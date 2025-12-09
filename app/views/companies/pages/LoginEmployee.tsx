import React from 'react';

export default function LoginEmployee() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/api/employees/login" method="post">
        <input type="email" placeholder="Email" name="email" id="email" required />
        <input type="password" placeholder="Password" name="password" id="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

