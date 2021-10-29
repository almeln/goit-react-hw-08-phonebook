import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome, {name}</span>
      <Button variant="outline-info" type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </div>
  );
}