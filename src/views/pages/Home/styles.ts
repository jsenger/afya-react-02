import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;

  .signup-section {
    display: flex;
    height: calc(100vh - 100px);

    .signup-text {
      flex: 1;
    }

    .signup-form {
      flex: 1;
    }
  }

  .cta-section {
    display: flex;
    height: calc(100vh - 100px);
  }
`