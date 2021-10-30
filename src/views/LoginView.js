import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import css from './Views.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={css.title}>Log In</h1>

      <Form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} name="email" onChange={handleChange} placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} name="password" onChange={handleChange} placeholder="Password" required/>
        </Form.Group>
        <Button type="submit" className={css.button}>Log In</Button>

      </Form>
    </div>
  );
}