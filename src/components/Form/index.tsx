import { useState } from 'react';

import { CardContent } from './styles';

interface IFormPostData {
  data: {
    name: string;
    username: string;
    email: string;
    password: string;
  };
}

const Form: React.FC = () => {
  const [formDataContent, setFormDataContent] = useState<IFormPostData>();


  return (
    <CardContent>
      <h3>Crie sua conta</h3>
      <form>
        <div className="input-group">
          <label htmlFor="">Seu nome:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">Username:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">E-mail:</label>
          <input type="email" />
        </div>
        <div className="input-group">
          <label htmlFor="">Senha:</label>
          <input type="password" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </CardContent>
  );
};

export default Form;
