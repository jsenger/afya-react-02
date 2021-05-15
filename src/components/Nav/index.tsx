import { Link } from 'react-router-dom';

import LogoAfya from '../../assets/img/logo.png';

const Nav: React.FC = () => {
  return (
    <nav>
      <img src={LogoAfya} alt="Logo Afya" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    );
}

export default Nav;