import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useAuthentication from '../../hooks/useAuthentication';
import PrivateLayout from '../PrivateLayout';

const PrivateRoute = ({ component: Component, roles, ...routeProps }) => {
  const { user, userClaims } = useAuthentication();

  const hasPermission = React.useMemo(() => {
    if (!roles) return true;

    const foundRole = roles.some((role) => Boolean(userClaims[role]));

    return foundRole;
  }, [roles, userClaims]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...routeProps}>
      <PrivateLayout admin={userClaims.admin}>
        {hasPermission ? (
          <Component />
        ) : (
          <Typography variant="h5" align="center">
            Você não possui permissão para acessar essa página.
          </Typography>
        )}
      </PrivateLayout>
    </Route>
  );
};

export default PrivateRoute;
