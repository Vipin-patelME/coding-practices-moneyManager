// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {title, amount, type} = props
  const balance = type === 'income' ? amount : 0

  return (
    <>
      <div className="balance-money-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="moneyImage"
        />
        <div>
          <p>Your Balance</p>
          <p>{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="income-money-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="moneyImage"
        />
        <div>
          <p>Your Income</p>
          <p>{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="expences-money-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expences"
          className="moneyImage"
        />
        <div>
          <p>Your Balance</p>
          <p>Rs 0</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
