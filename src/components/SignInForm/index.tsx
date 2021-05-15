import { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../service/api';

import { SignInFormContent } from './styles';

interface IUserLogin {
  usuario: string;
  senha: string;
}

const SignInForm: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IUserLogin>(
    {} as IUserLogin
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const loginSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      api
        .post('login', formDataContent)
        .then(response => {
          localStorage.setItem('@tokenAfyaApp', response.data.token);

          toast.success('Login realizado!');
          
          history.push('/panel');
        })
        .catch(err => toast.error('Ops, algo deu errado.'))
        .finally(() => setIsLoading(false));
    },
    [formDataContent, history]
  );

  return (
    <SignInFormContent>
      <form onSubmit={loginSubmit}>
        <div className="input-group">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            disabled={isLoading}
            onChange={e =>
              setFormDataContent({
                ...formDataContent,
                usuario: e.target.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            disabled={isLoading}
            onChange={e =>
              setFormDataContent({
                ...formDataContent,
                senha: e.target.value,
              })
            }
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </SignInFormContent>
  );
};

export default SignInForm;
