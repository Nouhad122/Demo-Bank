let menuList = document.getElementById('menu-list');
let searchInput = document.querySelector('.search-input');
let homeContainers = document.querySelectorAll('.home-container');
let amountSpecification = document.querySelector('.amount-specif');
let successMessage = document.querySelector('.success-message');
let amountInput = document.getElementById('amount-input');
let transAmount = document.getElementById('trans-amount');
let currentBalance = document.getElementById('current-balance');
let balanceNotEnough = document.querySelector('.not-enough');
let buyCheckbox = document.getElementById('buy');
let sellCheckbox = document.getElementById('sell');
let currencySelection = document.getElementById('currency-selection');
function redirectToHomepage(){
    window.location.href = "homePage.html";
    return false;
}

function openMenuList(){
    menuList.classList.add('opened-list');
}
function closeMenuList(){
    menuList.classList.remove('opened-list');
}
function toggleDropDown(){
    homeContainers.forEach(cont =>{
        let userContainer = cont.querySelector('.user-section');
        let dropDownBtn = cont.querySelector('.fa-caret-down');
        userContainer.addEventListener('click', ()=>{
            cont.classList.toggle('bigger-home-container');
            dropDownBtn.classList.toggle('rotation');
        });
    });
}
toggleDropDown();

function showTransactionAmount(){
   amountSpecification.style.display = "flex";
}
function hideTransactionAmount(){
   amountSpecification.style.display = "none";
}

function displayAmount(num) {
   amountInput.value.length < 12 ? amountInput.value += num.dataset.value : amountInput.value;
    let currentValue = amountInput.value.replace(/\./g, '');
    amountInput.value = currentValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

function saveAmount(){
  amountInput.value ? transAmount.value = document.body.id === "exchange-money-page" ? amountInput.value : `TL ${amountInput.value}`  : transAmount.value = 0; 
}
function deleteNumFromAmount(){
    const amountsArray = amountInput.value.split('');
    amountsArray.pop();
    amountInput.value = amountsArray.join('');
 
}
function redirectSuccess(){
    let currAmount = transAmount.value.split(',')[0].replace(/TL|\./g,'');
    let currBal = currentBalance.textContent.split(',')[0].replace(/TL|\.|\,/g,'');
    if(Number(currAmount) > Number(currBal)){
        balanceNotEnough.style.display = "block";
        return false;
    }
    else{
        document.body.id ==="transfer-money-page" ? window.location.href = "success-transaction.html": window.location.href = "success-bill.html";
        return false;
    }
}

function redirectExchangeSuccess(){
    let currAmount = transAmount.value.split(',')[0].replace(/TL|\./g,'');
    let currBal = currentBalance.textContent.split(',')[0].replace(/TL|\.|\,/g,'');
    if(currencySelection.value === '$'){
        currAmount = currAmount * 32.124;
    }
    else if(currencySelection.value === '€'){
        currAmount = (currAmount * 32.124) / 0.9;
    }
    else{
        currAmount = currAmount;
    }

    if(Number(currAmount) > Number(currBal)){
        balanceNotEnough.style.display = "block";
        return false;
    }
    else{
        window.location.href = "success-exchange.html";
    return false;
    }
    
}
function redirectNewAccountSuccess(){
    window.location.href = "successNewAccount.html";
    return false;
}

function toggleCheckBoxes(boxChecked,boxUnchecked){
   if(boxChecked.checked){
    boxUnchecked.checked = false;
   }
   else{
    boxChecked.checked = true;
   }
}