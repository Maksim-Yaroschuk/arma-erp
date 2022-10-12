import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';
import { Logistics } from './Logistics/Logistics';
import { SalesIndex } from './SalesIndex/SalesIndex';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const ReferenceBooks = lazy(() => import('pages/ReferenceBooks'))
const Sales = lazy(() => import('pages/Sales'))
const Purchases = lazy(() => import('pages/Purchases'))
const Reports = lazy(() => import('pages/Reports'))
const Service = lazy(() => import('pages/Service'))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reference-books" element={<ReferenceBooks/>} />
            <Route path="sales" element={<Sales />}>
              <Route index element={<SalesIndex/>} />
              <Route path="logistics" element={<Logistics/> } />
            </Route>
            <Route path="purchases" element={<Purchases />} />
            <Route path="reports" element={<Reports />} />
            <Route path="service" element={<Service />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
