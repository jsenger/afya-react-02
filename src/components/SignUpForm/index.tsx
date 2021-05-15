import { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../service/api';

import { CardContent } from './styles';

interface IFormPostData {
  nome?: string;
  login?: string;
  cpf?: string;
  senha?: string;
}

const SignUpForm: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IFormPostData>(
    {} as IFormPostData
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  const postSignupData = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      api
        .post('usuarios', formDataContent)
        .then(response => {
          toast.success('Cadastro realizado com sucesso.');
          setTimeout(() => history.push('/login'), 1500);
        })
        .catch(err => toast.error('Ops, falha no engano!'))
        .finally(() => setIsLoading(false));
    },
    [formDataContent, history]
  );

  return (
    <CardContent>
      <h3>Crie sua conta</h3>
      <form onSubmit={postSignupData}>
        <div className="input-group">
          <label htmlFor="">Seu nome:</label>
          <input
            type="text"
            disabled={isLoading}
            onChange={e =>
              setFormDataContent({
                ...formDataContent,
                nome: e.target.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            disabled={isLoading}
            onChange={e =>
              setFormDataContent({
                ...formDataContent,
                login: e.target.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="">CPF:</label>
          <input
            type="text"
            disabled={isLoading}
            onChange={e =>
              setFormDataContent({
                ...formDataContent,
                cpf: e.target.value,
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
          {isLoading ? 'Criando conta...' : 'Enviar'}
        </button>
      </form>
    </CardContent>
  );
};

export default SignUpForm;
