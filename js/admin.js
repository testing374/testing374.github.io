document.querySelector('button').addEventListener('click', () =>{
    window.location.href = 'admin_login.html';
});

// 商品瀏覽數分析 Chart

const xValues = ["詹姆斯圍裙鞋", "Classic Slides", "奧利佛德比鞋", "麗娃鏈條樂福鞋", "經典皮鞋"];
const yValues = [200, 198, 195, 185, 168];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "最高瀏覽數貨品"
    }
  }
});