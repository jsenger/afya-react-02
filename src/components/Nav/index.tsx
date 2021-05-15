import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    );
}

export default Nav;