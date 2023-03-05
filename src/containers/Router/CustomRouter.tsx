import React from 'react';
import { Navigate, RouterProvider, useRoutes } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Main/MainContainer';
import PacientsPage from '../../pages/Pacients/PacientsPage';
import MedicalHistoryPage from '../../pages/MedicalHistory/MedicalHistoryPage';
import ConsultationsPage from '../../pages/Consultations/ConsultationsPage';
import NewPacientPage from '../../pages/Pacients/NewPacientPage/NewPacientPage';

const CustomRouter: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/pacientes" />, index: true },
        { path: 'pacientes', element: <PacientsPage /> },
        { path: 'pacientes/nuevo', element: <NewPacientPage /> },
        { path: 'antecedentes/:pacientId?', element: <MedicalHistoryPage /> },
        { path: 'consultas', element: <ConsultationsPage /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/inicio" />, index: true },
        { path: '404', element: <div>404</div> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRouter;