import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? 'https://electronics-kit-backend-4.onrender.com/api/login'
      : 'https://electronics-kit-backend-4.onrender.com/api/register';

    try {
      const response = await axios.post(url, formData);
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Signup successful!');
        setIsLogin(true);
      }
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || 'Something went wrong.'));
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-white" style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}>
      <main className="container py-5 d-flex justify-content-center flex-grow-1">
        <div className="row w-100 shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: '900px' }}>
          {/* Form Section */}
          <div className="col-md-7 bg-black px-5 py-4">
            <h2 className="fw-bold pb-3" style={{ color: '#81650fff' }}>
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3 text-white">
                  <label className="form-label fw-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-3 p-3"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-3 text-white">
                <label className="form-label fw-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-3 p-3"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-2 text-white">
                <label className="form-label fw-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control rounded-3 p-3"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {isLogin && (
                <p className="auth-forgot mt-2" style={{ color: '#81650fff' }}>
                  Forgot your password?
                </p>
              )}

              <button
                type="submit"
                className="btn rounded-pill mt-4 w-100"
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  fontWeight: 'bold',
                  padding: '10px',
                  border: 'none',
                }}
              >
                {isLogin ? 'Log in' : 'Sign up'}
              </button>
            </form>
          </div>

          {/* Toggle Section */}
          <div className="col-md-5 bg-white d-flex flex-column justify-content-center align-items-center auth-toggle-section">
            <h4 className="fw-bold text-center">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </h4>
            <button
              className="btn rounded-pill mt-4 w-100"
              style={{
                backgroundColor: '#000',
                color: '#fff',
                fontWeight: 'bold',
                padding: '10px',
                border: 'none',
              }}
              onClick={toggleForm}
            >
              {isLogin ? 'Create an account' : 'Login here'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
