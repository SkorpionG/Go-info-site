google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["棋賽", "獎金(日幣)"],
    ["棋聖", 45000000],
    ["十段", 7000000],
    ["本因坊", 28000000],
    ["碁聖", 8000000],
    ["名人", 30000000],
    ["王座", 14000000],
    ["天元", 13000000],
  ]);

  const options = {
    title: "日本七大棋戰獎金分布圓餅圖",
  };

  const container = document.getElementById("competition-piechart");
  if (!container) return;

  const chart = new google.visualization.PieChart(container);
  chart.draw(data, options);
}
