import { useState } from 'react';
import { db } from '../../../database/firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 
import './AddExpensePage.scss'

const AddExpensePage = ({ user }) => {

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate(); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addDoc(collection(db, "expenses"), {
        amount,
        category,
        date,
        userId: user.uid, 
      });

    
      navigate('/main');
    } catch (error) {
      alert("Error adding expense");
    }
  };

  return (
    <div className="add-expense-page">
      <h2 className='title'>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='forms'>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
            placeholder="Enter amount"   
          />
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            placeholder="Enter category" 
          />
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpensePage;
