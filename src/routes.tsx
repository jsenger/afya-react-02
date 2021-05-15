import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './views/pages/Contact';

import Home from './views/pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
