import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenseObject = [{
    title: 'Car Insurance',
    date: '27-07-2021',
    amount: 'INR 234'
  },
  {
    title: 'Bike Insurance',
    date: '28-07-2021',
    amount: 'INR 200'
  },
  {
    title: 'Lorry Insurance',
    date: '29-07-2021',
    amount: 'INR 300'
  }
]
  return (
    <div>
      <ExpenseItems 
      title={expenseObject[0].title}
      date={expenseObject[0].date}
      amount={expenseObject[0].amount}></ExpenseItems>
      <ExpenseItems
      title={expenseObject[1].title}
      date={expenseObject[1].date} 
      amount={expenseObject[1].amount}></ExpenseItems>
      <ExpenseItems
      title={expenseObject[2].title}
      date={expenseObject[2].date}
      amount={expenseObject[2].amount}></ExpenseItems>
    </div>
  );
}

export default App;
