import React from 'react';
import { Link } from 'react-router-dom';
import LoginEmployee from './LoginEmployee';

export default function Welcome() {
  return (
    <div>
      <p>Вже маєте аккаунт?</p>
      <LoginEmployee />
      <p>Ще не маєте аккаунту?</p>
      <Link to="/companies/new">Реєстрація</Link>
    </div>
  );
}
