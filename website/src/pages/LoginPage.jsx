import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/LoginBox.css'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // instantiate the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Redirect the user to the admin page after successful login
    navigate('/admin-page');
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
          <p className="message">Not registered? Contact ICTO.</p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
