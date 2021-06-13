import { useLocation } from 'react-router-dom';

import { Home, Plus, Profile } from '../icons';

import { Container, Content, Link } from './styles';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/" $active={pathname === '/'}>
          <Home />
          Home
        </Link>
        <Link to="/books" $active={pathname === '/books'}>
          <Plus />
          Add Book
        </Link>
        <button type="button" disabled>
          <Profile />
          Profile
        </button>
      </Content>
    </Container>
  );
};

export default Navbar;
