import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from './database/firebase';
import './App.scss'
import LoginPage from './components/pages/login/loginPage';
import RegisterPage from './components/pages/register/registerPage';
import MainPage from './components/pages/main/mainPage';
import Header from './components/header/Header';
import PrivateRoute from './components/PrivateRoute';
import AddExpensePage from './components/pages/expences/AddExpensePage';



function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();

  }, [])

  if (loading) return (
    <div className="loadingWrap">
      <div className='loadingDiv'>Loading...</div>
    </div>
)

  return (
    <>
      <Router>
        <div className="wrap">
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/main" /> : <LoginPage />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/main" /> : <RegisterPage />}
            />
            <Route
              path="/main"
              element={<PrivateRoute user={user}><MainPage user={user} /></PrivateRoute>}
            />
            <Route
              path="/add-expense"
              element={user ? <AddExpensePage user={user} /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
