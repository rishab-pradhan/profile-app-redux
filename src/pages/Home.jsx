import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4">{user.name ? `Hello, ${user.name}!` : 'Welcome to Profile App!'}</h1>
          <p className="mb-4">This is a simple profile app made with React and Redux.</p>
          
          {user.name && (
            <div className="alert alert-success mb-4">
              <h5>Your Profile:</h5>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
          
          <button 
            className="btn btn-primary btn-lg" 
            onClick={goToProfile}
          >
            {user.name ? 'Edit Profile' : 'Create Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;