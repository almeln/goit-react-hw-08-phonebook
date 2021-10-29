import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import { Container, Navbar } from 'react-bootstrap';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Navbar>
  );
}