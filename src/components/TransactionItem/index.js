// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction} = props
  const {title, amount, type} = eachTransaction

  return (
    <li className="transaction-list">
      <p className="trans-para">{title}</p>
      <p className="trans-para">{amount}</p>
      <p className="trans-para">{type}</p>
    </li>
  )
}
export default TransactionItem
