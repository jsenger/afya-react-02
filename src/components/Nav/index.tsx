import { Link } from 'react-router-dom';

import LogoAfya from '../../assets/img/logo.png';
import { NavContent } from './styles';

const Nav: React.FC = () => {
  return (
    <NavContent>
      <Link to="/">
        <img src={LogoAfya} alt="Logo Afya" width="60" height="60" />
      </Link>
      <div className="nav-contents">
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </NavContent>
  );
};

export default Nav;
