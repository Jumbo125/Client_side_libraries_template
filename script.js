// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', "Terrasse"];
const votes = [12, 9, 5, 4, 5];
const secondVotes = [8, 11, 7, 6, 3];

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'pie',                 // try: 'line', 'pie', 'doughnut'
  data: {
    labels: places,         // labels on the x-axis
    datasets: [{
      label: 'Number of votes',
      data: votes              // values (same order as labels!)
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});

// Get the second canvas element from the page
const secondCanvas = document.getElementById('secondChart');

// Create a second chart
new Chart(secondCanvas, {
  type: 'bar',
  data: {
    labels: places,
    datasets: [{
      label: 'Second vote',
      data: secondVotes,
      backgroundColor: 'rgba(54, 162, 235, 0.7)'
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
