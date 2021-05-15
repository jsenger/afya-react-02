import Nav from '../../../components/Nav';
import Form from '../../../components/Form';
import Footer from '../../../components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <div>
          <section className="signup-section">
            <div className="signup-text">textos</div>
            <div className="signup-form">
              <Form />
            </div>
          </section>
          <section className="cta-section">
            <div>CTA</div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
