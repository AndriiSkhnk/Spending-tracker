import { useState, useEffect } from "react";
import { db } from "../../../database/firebase";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './MainPage.scss';
import DeleteIcon from '../../../assets/images/delete-icon.svg';

const MainPage = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesRef = collection(db, "expenses");
        const q = query(expensesRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const expensesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setExpenses(expensesList);
      } catch (error) {
        console.error("Error fetching expenses: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, [user.uid]);

  const handleAddExpense = () => {
    navigate('/add-expense');
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await deleteDoc(doc(db, "expenses", expenseId));
      setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== expenseId));
    } catch (error) {
      alert("Error deleting expense")
    }
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  if (loading) {
    return (
      <div className="loadingWrap">
        <div className="loadingDiv">Loading your expenses...</div> 
      </div>
      )
  }

  return (
    <div className="main-page">
      <p className="welcome-message">Hello, {user.displayName || "User"}!</p>
      <div className="expense-summary">
        <h2>Your total expenses:</h2>
        <p>$ {totalAmount.toFixed(2)}</p>
      </div>
      <button className="add-expense-btn" onClick={handleAddExpense}>
        Add Expense
      </button>

      <div className="expense-list">
        <p>Resent expenses:</p>
        <div className="horisontal-line"></div>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-amount">$ {expense.amount}</div>
              <div className="expense-category">{expense.category}</div>
              <div className="expense-date">{expense.date}</div>
              <button className="delete-expense-btn" onClick={() => handleDeleteExpense(expense.id)}>
                <img src={DeleteIcon} alt="Delete expense" />
              </button>
            </div>
          ))
        ) : (
          <p className="noExpenses-text">No expenses found. Add your first expense!</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
