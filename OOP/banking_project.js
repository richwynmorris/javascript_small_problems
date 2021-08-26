function makeAccount(number) {
  let balance = 0
  let transactions = []
  return { number() {
            return number
          },
          balance() {
            return balance
          },
          deposit(value) {
            this.totalBalance += value
            transactions.push({type: 'deposit', amount: value})
            return value
          },
          withdraw(value) {
            if (value > balance) {
              value = balance;
            }
            this.transactions.push({type: 'withdraw', amount: value})
            return balance -= value
          },
          transactions() {
            return transactions
          }
        };
}


function makeBank() {
  let uniqAccount = 101
  let accounts = []
  return {
    openAccount() {
      let newAccount = makeAccount(uniqAccount);
      accounts.push(newAccount)
      uniqAccount += 1
      return newAccount;
    },
    transfer(source, destination, amount) {
      source.withdraw(amount)
      destination.deposit(amount)
      return amount
    } 
  }
}
