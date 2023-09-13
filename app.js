const budgetInput = document.querySelector('#budget-input');
const budgetBtn = document.querySelector('#budgetBtn');
const budgetAmount = document.querySelector('#budget-value');
const expenseInput = document.querySelector('#expense-input');
const expenseBtn = document.querySelector('#expenseBtn');
const expenseAmount = document.querySelector('#expense-value');
const balanceAmount = document.querySelector('#balance-value');
const errorMessage = document.querySelector('#message_box');
const message = document.querySelector('#message');
const closeBtn = document.querySelector('#closeBtn');

budgetAmount.textContent = localStorage.getItem('app-budget') ? +localStorage.getItem('app-budget') : 0;
expenseAmount.textContent = localStorage.getItem('app-expense') ? +localStorage.getItem('app-expense') : 0;
balanceAmount.textContent = localStorage.getItem('app-balance') ? +localStorage.getItem('app-balance') : 0;


// Add budget amount
budgetBtn.addEventListener('click', (e) => {
    let budgetInputValue = +budgetInput.value;
    if (budgetInputValue > 0) {
        let budgetValue = +budgetAmount.textContent;
        let balanceValue = +balanceAmount.textContent;
        budgetAmount.textContent = budgetValue + budgetInputValue;
        localStorage.setItem("app-budget", budgetValue + budgetInputValue);

        balanceAmount.textContent = balanceValue + budgetInputValue;
        localStorage.setItem("app-balance", balanceValue + budgetInputValue);
        budgetInput.value = '';
    } else {
        errorMessage.classList.add('show-message');
        message.textContent = "Please enter the budget amount!";
        setTimeout(() => {
            errorMessage.classList.remove('show-message');
        }, 5000);

    }
    e.preventDefault();
});

closeBtn.addEventListener('click', () => {
    errorMessage.classList.remove('show-message');
});

// Add expense
expenseBtn.addEventListener('click', (e) => {
    let expenseInputValue = +expenseInput.value;
    let expenseValue = +expenseAmount.textContent;
    expenseAmount.textContent = expenseInputValue + expenseValue;
    localStorage.setItem("app-expense", expenseInputValue + expenseValue);

    let balanceValue = +balanceAmount.textContent;
    balanceAmount.textContent = balanceValue - expenseInputValue;
    localStorage.setItem("app-balance", balanceValue - expenseInputValue);

    expenseInput.value = '';
    e.preventDefault();
});