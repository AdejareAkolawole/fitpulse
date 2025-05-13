// Performance Bar Graph
const performanceChart = new Chart(document.getElementById('performanceChart'), {
    type: 'bar',
    data: {
        labels: ['John', 'Emma', 'Liam', 'Sophia'],
        datasets: [{
            label: 'Performance',
            data: [75, 90, 60, 85],
            backgroundColor: ['#BBB2EF', '#D7F337', '#FFC2F1', '#D4E4E1'],
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});

// Work Efficiency Line Chart
const efficiencyChart = new Chart(document.getElementById('efficiencyChart'), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Efficiency',
            data: [80, 82, 85, 84, 87],
            borderColor: '#D7F337',
            backgroundColor: 'rgba(215, 243, 55, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});

// Activity Tracker Bar Chart
const activityChart = new Chart(document.getElementById('activityChart'), {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Activity',
            data: [50, 60, 55, 70, 65],
            backgroundColor: '#BBB2EF',
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});