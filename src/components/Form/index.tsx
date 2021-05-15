import { useCallback, useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import api from '../../service/api';

import { CardContent } from './styles';

interface IFormPostData {
  nome?: string;
  login?: string;
  cpf?: string;
  senha?: string;
}

const Form: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IFormPostData>(
    {} as IFormPostData
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postSignupData = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      console.log(formDataContent)

      api
        .post('usuarios', formDataContent)
        .then(response => toast.success('Cadastro realizado com sucesso.'))
        .catch(err => toast.error('Ops, falha no engano!'))
        .finally(() => setIsLoading(false));
    },
    [formDataContent]
  );

  return (
    <CardContent>
      <h3>Crie sua conta</h3>
      <form onSubmit={postSignupData}>
        <div className="input-group">
          <label htmlFor="">Seu nome:</label>
          <input
            type="text"
            onChange={e => {
              setFormDataContent({
                ...formDataContent,
                nome: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            onChange={e => {
              setFormDataContent({
                ...formDataContent,
                login: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">CPF:</label>
          <input
            type="text"
            onChange={e => {
              setFormDataContent({
                ...formDataContent,
                cpf: e.target.value,
              });
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            onChange={e => {
              setFormDataContent({
                ...formDataContent,
                senha: e.target.value,
              });
            }}
          />
        </div>
        
        <button type="submit">{isLoading ? 'Criando conta...' : 'Enviar'}</button>
      </form>
    </CardContent>
  );
};

export default Form;
