function getInputValue(input) {
    const amountInput = document.getElementById(input);
    const amountText = amountInput.value;
    const depositAmount = parseFloat(amountText);
    // clear input field
    amountInput.value = '';
    return depositAmount;

}
function getTotalValue(total, amount) {
    const totalElement = document.getElementById(total);
    const totalText = totalElement.innerText;
    const previousAmountTotal = parseFloat(totalText)
    totalElement.innerText = previousAmountTotal + amount;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    // debugger;
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        getTotalValue('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        getTotalValue('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

})