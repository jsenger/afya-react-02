import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }: any) => {
  const isLogged = true;

  return (
    <Route
      {...rest}
      render={props => {
        isLogged ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoutes;
