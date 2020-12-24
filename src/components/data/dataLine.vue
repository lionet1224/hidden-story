<template>
  <div class="error-idea-data mt-1 d-flex justify-content-center align-items-center">
    <canvas id="error-idea-data" width="200" height="200"></canvas>
  </div>
</template>

<script>
import 'chart.js'

export default {
  mounted(){
    var ctx = document.getElementById('error-idea-data').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            datasets: [{
                label: '错误修正',
                data: [19, 17, 2, 1, 0, 0],
                borderColor: 'rgba(245, 108, 108)',
                fill: false,
                backgroundColor: 'transparent',
                pointBackgroundColor: 'rgba(245, 108, 108)'
            }, {
                label: '优化点完成',
                data: [29, 12, 5, 2, 0, 0],
                borderColor: 'rgba(103, 194, 58)',
                fill: false,
                backgroundColor: 'transparent',
                pointBackgroundColor: 'rgba(103, 194, 58)'
            }]
        },
        options: {
        }
    });
  }
}
</script>

<style lang="scss" scoped>
</style>