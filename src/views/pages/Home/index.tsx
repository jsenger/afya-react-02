import Nav from '../../../components/Nav';
import SignUpForm from '../../../components/SignUpForm';
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
              <SignUpForm />
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
