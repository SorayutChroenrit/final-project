// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iPhone", "MacBook", "AirPods", "Apple Watch", "Mac studio"],
    datasets: [{
      data: [54.73, 13.52, 11.05 , 10.54, 10.14],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745','#e6547f'],
    }],
  },
});
