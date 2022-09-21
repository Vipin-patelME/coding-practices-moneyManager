import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

const OptionsItem = props => {
  const {eachOption} = props
  const {displayText} = eachOption
  return <option value={displayText}>{displayText}</option>
}

class MoneyManager extends Component {
  state = {title: '', amount: 0, type: '', transactionlist: []}

  onTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onTypeInput = event => {
    this.setState({type: event.target.value})
  }

  onSubmitData = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransactions = {
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionlist: [...prevState.transactionlist, newTransactions],
      title: '',
      amount: '',
      type: '',
    }))
  }

  render() {
    const {title, amount, type, transactionlist} = this.state
    console.log(title, amount, type)
    return (
      <div className="main-cont">
        <div className="intro-cont">
          <div className="intro-card">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money manager</span>
            </p>
          </div>
        </div>
        <div className="money-card">
          <MoneyDetails title={title} amount={amount} type={type} />
        </div>
        <div className="form-histry-container">
          <form onSubmit={this.onSubmitData}>
            <h1>Add Transactions</h1>
            <div className="titel-cont">
              <label htmlFor="textInput">Title</label>
              <br />
              <input type="text" id="textInput" onChange={this.onTitleInput} />
            </div>
            <div className="titel-cont">
              <label htmlFor="amountInput">Amount</label>
              <br />
              <input
                type="text"
                id="amountInput"
                onChange={this.onAmountInput}
              />
            </div>
            <div className="titel-cont">
              <label htmlFor="selectInput">Type</label>
              <br />
              <select
                id="selectInput"
                className="selecter"
                onChange={this.onTypeInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <OptionsItem eachOption={eachOption} key={eachOption.id} />
                ))}
              </select>
            </div>
            <button className="btn-style" type="submit">
              Add
            </button>
          </form>
          <div>
            <h1>History</h1>
            <div className="transaction-list">
              <p className="trans-para">Title</p>
              <p className="trans-para">Amount</p>
              <p className="trans-para">Type</p>
            </div>
            <ul className="li-transaction-list">
              {transactionlist.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  key={eachTransaction.title}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
