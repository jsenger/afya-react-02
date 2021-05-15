import SignInForm from '../../../components/SignInForm';
import { LoginContent } from './styles';

const Login: React.FC = () => {
  return (
    <LoginContent>
      <SignInForm />
    </LoginContent>
  );
};

export default Login;
