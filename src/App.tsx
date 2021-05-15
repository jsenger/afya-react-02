import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './assets/img/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </>
  );
};

export default App;
