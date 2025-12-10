import React from 'react';
import { Link } from 'react-router-dom';
import LoginEmployee from './LoginEmployee';

export default function Welcome() {
  return (
    <div class="container">
      <p class="t-a-center">Вже маєте аккаунт?</p>
      <LoginEmployee />
      <div className="t-a-center">
        <p>Ще не маєте аккаунту?</p>
        <Link to="/companies/new">Реєстрація</Link>
      </div>
    </div>
  );
}
