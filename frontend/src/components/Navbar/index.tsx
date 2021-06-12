import { useLocation } from 'react-router-dom';

import { Home, Plus, Profile } from './icons';

import { Container, Link } from './styles';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/" active={pathname === '/'}>
        <Home />
        Home
      </Link>
      <Link to="/books" active={pathname === '/books'}>
        <Plus />
        Add Book
      </Link>
      <Link to="/profile" active={pathname === '/profile'}>
        <Profile />
        Profile
      </Link>
    </Container>
  );
};

export default Navbar;
