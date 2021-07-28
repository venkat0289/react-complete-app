import './ExpenseItems.css';

function ExpenseItems(props) {
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="second-section">
                <h2 className="expense-item__description">{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;