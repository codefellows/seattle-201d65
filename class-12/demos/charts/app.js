'use strict';

var ctx = document.getElementById('myChart').getContext('2d');



var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ginger', 'Snowdrop', 'Apollo', 'Pongo', 'Ashton', 'Pippin', 'Clifford', 'Hobbes'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 30, 50, 20, 30, 90, 200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'red',
        'orange'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'purple',
        'green'
      ],
      borderWidth: 10
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }

  },

});


var ctx2 = document.getElementById('chart2').getContext('2d');



var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Ginger', 'Snowdrop', 'Apollo', 'Pongo', 'Ashton', 'Pippin', 'Clifford', 'Hobbes'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 30, 50, 20, 30, 90, 200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'red',
        'orange'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'purple',
        'green'
      ],
      borderWidth: 10
    },
    {
      type: 'line',
      label: '# of Votes',
      data: [120, 190, -30, 250, 20, 30, 90, 200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'red',
        'orange'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'purple',
        'green'
      ],
      borderWidth: 10
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }

  },

});


var ctx3 = document.getElementById('myChart3').getContext('2d');



var myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Ginger', 'Snowdrop', 'Apollo', 'Pongo', 'Ashton', 'Pippin', 'Clifford', 'Hobbes'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 30, 50, 20, 30, 90, 200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'red',
        'orange'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'purple',
        'green'
      ],
      borderWidth: 10
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }

  },

});
