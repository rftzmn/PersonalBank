// Initialization for ES Users
import {
    Carousel,
    initTE,
    Input,
} from "tw-elements";
initTE({ Carousel });
initTE({ Input });


const depositMoneyButton = document.getElementById('depositMoneyButton');
depositMoneyButton.addEventListener('click', function () {
    const depositValue = parseFloat(document.getElementById('depositValue').value);
    document.getElementById('depositValue').value = "";
    let totalDeposit = parseFloat(document.getElementById('totalDeposit').innerText);

    totalDeposit = totalDeposit + depositValue;
    document.getElementById('totalDeposit').innerText = totalDeposit;

    let total = parseFloat(document.getElementById('total').innerText);
    total = total + depositValue;
    document.getElementById('total').innerText = total;
})

const withdrawMoneyButton = document.getElementById('withdrawMoneyButton');
withdrawMoneyButton.addEventListener('click', function () {
    const withdrawValue = parseFloat(document.getElementById('withdrawValue').value);
    document.getElementById('withdrawValue').value = "";
    let totalWithdraw = parseFloat(document.getElementById('totalWithdraw').innerText);
    totalWithdraw = totalWithdraw + withdrawValue;
    document.getElementById('totalWithdraw').innerText = totalWithdraw;

    let total = parseFloat(document.getElementById('total').innerText);
    total = total - withdrawValue;
    document.getElementById('total').innerText = total;
})

// totalWithdraw
// totalDeposit
// total