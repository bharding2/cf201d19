'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var data = [12, 4, 9, 3, 100, 55, 31];
var labelColor = ['blue', 'red', 'orange', 'purple', 'green', 'yellow', 'salmon'];

var chartData = {
  type: 'bar',
  data: {
    labels: labelColor,
    datasets: [
      {
        label: '# of Votes / Color',
        data: data,
        backgroundColor: labelColor
      }
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

var myChart = new Chart(ctx, chartData);
