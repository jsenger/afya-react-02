import styled from 'styled-components';

export const CardContent = styled.div`
  padding: 1rem;
  background-color: #e2e2e2;
  border-radius: 1rem;

  form {
    .input-group {
      margin-top: 0.5rem;

      label {
        display: block;
      }

      input {
        width: 100%;
        padding: .375rem .75rem;

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
