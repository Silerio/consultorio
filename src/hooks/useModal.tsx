import React, { useState } from 'react';

export interface IUseModal {
  isVisible: boolean;
  isLoading: boolean;
  show: () => void;
  hide: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useModal = (): IUseModal => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const show = (): void => {
    setIsVisible(true);
  };

  const hide = (): void => {
    setIsVisible(false);
  };

  return {
    isVisible,
    isLoading,
    show,
    hide,
    setLoading,
  };
};

export default useModal;
