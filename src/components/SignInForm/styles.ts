import styled from 'styled-components';

export const SignInFormContent = styled.div`
  width: 85%;
  max-width: 400px;
  min-height: 550px;

  color: #13132b;
  background: #e2e2e2;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    .input-group {
      margin-top: 0.5rem;

      label {
        display: block;
      }

      input {
        width: 100%;
        padding: 0.375rem 0.75rem;

        border: 1px solid #e3e3e3;
        border-radius: 0.5rem;

        font-size: 1rem;
      }
    }

    button {
      width: 100%;
      margin-top: 1rem;
      padding-top: 0.8rem;
      padding-bottom: 1rem;
      background-color: #f70054;
      border: none;
      border-radius: 1rem;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
