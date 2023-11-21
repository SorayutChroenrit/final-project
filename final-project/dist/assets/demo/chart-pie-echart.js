   var chartDom = document.querySelector('.echart-top-coupons');
   var myChart = echarts.init(chartDom);
   var option = {
    // ECharts options for the pie chart
    series: [{
       type: 'pie',
       // ... (other configuration options)
       data: [
          { value: 72, name: 'Percentage discount' },
          { value: 18, name: 'Fixed card discount' },
          { value: 10, name: 'Fixed product discount' }
       ]
    }]
 };
   myChart.setOption(option);

   
 