// Initialize Pie Chart
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Full', 'Not Full'],
        datasets: [{
            data: [3, 10],
            backgroundColor: ['#FF6384', '#36A2EB'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});

// Initialize Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['0027', '0028', '0029', '0030', '0031', '0032', '0033', '0034', '0035', '0036', '0037', '0038'],
        datasets: [{
            label: 'Capacity (%)',
            data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 100, 100],
            backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex];
                return value === 100 ? '#FF6384' : '#36A2EB';
            }
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});
