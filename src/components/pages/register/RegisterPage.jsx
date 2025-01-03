import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../database/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './RegisterPage.scss'

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!name.trim()) {
      setError('Name is required!');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with the name
      await updateProfile(user, { displayName: name });

      // Create a collection for the user in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        createdAt: new Date(),
      });

      navigate('/main'); 
    } catch (err) {
      setError(err.message);
      alert('Registration error')
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegistration} className="register-form">
        <h2 className='title'>Create an Account</h2>
        <div className='register-forms'>
          <input
            placeholder='Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            placeholder='Confirm Password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button className='register-btn' type="submit">Register</button>
        <Link className='backToLogin-btn' to='/'>
         <strong>Back to Login</strong> 
        </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
