import { Link } from 'react-router-dom';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/books">Add Book</Link>
      <Link to="/profile">Profile</Link>
    </Container>
  );
};

export default Navbar;
