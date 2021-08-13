//get json file for generating the bar chart
jQuery(document).ready(function () {
  /* Promise to make sure data loads */
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://koichisugi.github.io/json-to-pie-bar-chart-chartJs/q3.Barchart.json",
      method: "GET",
      dataType: "JSON",
      success: function (data) {
        resolve(data);
        console.log("test q3.Barchart.json", data.labels[0]);
        //bar chart impl
        createBarChart(data);
      },
      error: function (error) {
        reject(error);
        console.log(error);
      },
    });
  });
});

//gerate bar chart impl
function createBarChart(data) {
  var ctx = document.getElementById("myBarChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Daily Trading Volume By All Clients",
          data: data.data,
          backgroundColor: data.backgroundColor,
          borderColor: data.borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

//getting pie chart json
jQuery(document).ready(function () {
  /* Promise to make sure data loads */
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://koichisugi.github.io/Intermediate_03Chartjs/q3.Piechart.json",
      method: "GET",
      dataType: "JSON",
      success: function (data) {
        resolve(data);
        console.log("test Piechart.json", data);
        //bar chart impl
        createPieChart(data);
      },
      error: function (error) {
        reject(error);
        console.log(error);
      },
    });
  });
});
//generate pie chart
function createPieChart(data) {
  var ctx = document.getElementById("myPieChart");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Daily Trading Volume By All Clients",
          data: data.data,
          backgroundColor: data.backgroundColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      legend: {
        labels: {
          font: {
            size: 15,
            color: "#353535",
          },
        },
      },
    },
  });
}
