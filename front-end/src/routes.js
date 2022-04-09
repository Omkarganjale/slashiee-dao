import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Service = lazy(() => import('pages/service/Service'));
const Request = lazy(() => import('pages/request/Request'));
const Team = lazy(() => import('pages/team/Team'));
const ServiceCreation = lazy(() => import('pages/serviceCreation/ServiceCreation'));
const TeamCreation = lazy(() => import('pages/teamCreation/TeamCreation'));

const routes = [
  {
    path: '/service',
    component: Service,
  },
  {
    path: '/request',
    component: Request,
  },
  {
    path: '/team',
    component: Team,
  },
  {
    path: '/serviceCreation',
    component: ServiceCreation,
  },
  {
    path: '/teamCreation',
    component: TeamCreation,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
