
import Optional from '../interfaces/IOptional';
import IParams from '../interfaces/IParams';
import { TablePaginationConfig } from 'antd';
import React, { useState, useEffect } from 'react';

export interface IUseService<T> {
  data: Optional<T>,
  currentPage: number,
  loading: boolean,
  currentParams: (IParams & PaginationProps);
  reload: () => Promise<void>,
  setCurrentParams: React.Dispatch<React.SetStateAction<(IParams & PaginationProps)>>;
  onChangePage: (page: TablePaginationConfig | number) => void;
}

export interface PaginationProps {
  skip?: number,
  limit?: number,
}

interface UseServiceProps<T> {
  fetchData: (params?: any) => Promise<T>;
  params?: (IParams & PaginationProps);
}

function useService<T>({ 
  fetchData, 
  params,
}: UseServiceProps<T>): IUseService<T> {
  const [data, setData] = useState<Optional<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentParams, setCurrentParams] = useState<(IParams & PaginationProps)>(params || {});

  async function reload() {
    setLoading(true);
 
    return fetchData(currentParams)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error(err);
        setData(null);
      })
      .finally(() => {
          setLoading(false);
      });
  }

  const onChangePage = (pagination: TablePaginationConfig | number) => {
    let page = 1;

    if (typeof pagination === 'number') page = pagination;

    if (typeof pagination !== 'number') {
      page = pagination.current ?? 1;
    }

    setCurrentPage(page);

    if (typeof currentParams !== "string" 
    && currentParams.hasOwnProperty('$skip')
    && currentParams.hasOwnProperty('$limit')
    ) {
      const recordsToSkip = (page - 1) * 10;

      setCurrentParams(prev => ({
        ...prev,
        "$skip": recordsToSkip,
      }));
    }
  };

  useEffect(() => {
    reload();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentParams]);
  
  return {
    data,
    loading,
    currentPage,
    currentParams: currentParams,
    reload,
    setCurrentParams,
    onChangePage,
  };
}

export default useService;
