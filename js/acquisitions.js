import Chart from 'chart.js/auto'
let totalWithdraw = parseFloat(document.getElementById('totalWithdraw').innerText);
let totalDeposit = parseFloat(document.getElementById('totalDeposit').innerText);
let total = parseFloat(document.getElementById('total').innerText);
console.log(total);

const ctx = document.getElementById('acquisitions')

const updateChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Total',
            'Deposit',
            'Withdraw'
        ],
        datasets: [{
            label: 'Balance',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'green'
            ],
            hoverOffset: 4
        }]
    }
});

setInterval(function () {
    // Get a random index point
    let totalWithdraw = parseFloat(document.getElementById('totalWithdraw').innerText);
    let totalDeposit = parseFloat(document.getElementById('totalDeposit').innerText);
    let total = parseFloat(document.getElementById('total').innerText);
    console.log(total);

    // Update one of the points in the second dataset
    updateChart.data.datasets[0].data[0] = total;
    updateChart.data.datasets[0].data[1] = totalDeposit;
    updateChart.data.datasets[0].data[2] = totalWithdraw;
    updateChart.update();
}, 2000);