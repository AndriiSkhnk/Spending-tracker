import { React, useState } from 'react';
import "./LoginPage.scss";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../database/firebase';
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';
import { db } from '../../../database/firebase';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleEmailAndPasswordLogIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
    } catch (err) {
      setError(err.message);
      alert("User not found or password incorrect!");
    }
  };


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
  
      if (!userDoc.exists()) {

        await setDoc(userDocRef, {
          name: user.displayName || "",
          email: user.email,
          createdAt: new Date(),
          expenses: [],
        });
      }
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };
  

  return (
    <div className="loginPage-wrap">
        <div className="title">
          <h2>Login</h2>
        </div>
        <div className="login__forms">
          <form onSubmit={handleEmailAndPasswordLogIn}>
            <input 
              id='email' 
              type="email" 
              placeholder='Email' 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />  
            <input 
              id='password' 
              type="password" 
              placeholder='Password' 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className='submit-button'>Log In</button>
          </form>
          <button className="google-login" onClick={handleGoogleLogin}>Log in with Google</button>
        </div>
        <div className="goToRegister">
          <p>Don’t have an account? <Link to={{pathname:'/register'}}><strong>Register</strong></Link></p>
        </div>
    </div>
  )
}

export default LoginPage