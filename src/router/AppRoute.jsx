import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path='*' element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        /> */}

        <Route path='/login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
        />

        <Route path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
