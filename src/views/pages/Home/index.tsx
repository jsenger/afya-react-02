import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1>Home</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
