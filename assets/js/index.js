// window.onload = function () {
//     var chart = new CanvasJS.Chart("chart", {
//         animationEnabled: true,
//         title:{
//             text: "Daily High Temperature at Different Beaches"
//         },
//         axisX: {
//             valueFormatString: "DD MMM,YY"
//         },
//         axisY: {
//             title: "Temperature (in °C)",
//             suffix: " °C"
//         },
//         legend:{
//             cursor: "pointer",
//             fontSize: 16,
//             itemclick: toggleDataSeries
//         },
//         toolTip:{
//             shared: true
//         },
//         data: [{
//             name: "Myrtle Beach",
//             type: "spline",
//             yValueFormatString: "#0.## °C",
//             showInLegend: true,
//             dataPoints: [
//                 { x: new Date(2017,6,24), y: 31 },
//                 { x: new Date(2017,6,25), y: 31 },
//                 { x: new Date(2017,6,26), y: 29 },
//                 { x: new Date(2017,6,27), y: 29 },
//                 { x: new Date(2017,6,28), y: 31 },
//                 { x: new Date(2017,6,29), y: 30 },
//                 { x: new Date(2017,6,30), y: 29 }
//             ]
//         },
//         {
//             name: "Martha Vineyard",
//             type: "spline",
//             yValueFormatString: "#0.## °C",
//             showInLegend: true,
//             dataPoints: [
//                 { x: new Date(2017,6,24), y: 20 },
//                 { x: new Date(2017,6,25), y: 20 },
//                 { x: new Date(2017,6,26), y: 25 },
//                 { x: new Date(2017,6,27), y: 25 },
//                 { x: new Date(2017,6,28), y: 25 },
//                 { x: new Date(2017,6,29), y: 25 },
//                 { x: new Date(2017,6,30), y: 25 }
//             ]
//         },
//         {
//             name: "Nantucket",
//             type: "spline",
//             yValueFormatString: "#0.## °C",
//             showInLegend: true,
//             dataPoints: [
//                 { x: new Date(2017,6,24), y: 22 },
//                 { x: new Date(2017,6,25), y: 19 },
//                 { x: new Date(2017,6,26), y: 23 },
//                 { x: new Date(2017,6,27), y: 24 },
//                 { x: new Date(2017,6,28), y: 24 },
//                 { x: new Date(2017,6,29), y: 23 },
//                 { x: new Date(2017,6,30), y: 23 }
//             ]
//         }]
//     });
//     chart.render();
    
//     function toggleDataSeries(e){
//         if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         }
//         else{
//             e.dataSeries.visible = true;
//         }
//         chart.render();
//     }

//     // chart 2
//     var chart = new CanvasJS.Chart("chartContainer2", {
//         animationEnabled: true,
//         title: {
//             text: "Desktop Search Engine Market Share - 2016"
//         },
//         data: [{
//             type: "pie",
//             startAngle: 240,
//             yValueFormatString: "##0.00\"%\"",
//             indexLabel: "{label} {y}",
//             dataPoints: [
//                 {y: 79.45, label: "Google"},
//                 {y: 7.31, label: "Bing"},
//                 {y: 7.06, label: "Baidu"},
//                 {y: 4.91, label: "Yahoo"},
//                 {y: 1.26, label: "Others"}
//             ]
//         }]
//     });
//     chart.render();
//     }





//     var chart = bb.generate({
//         data: {
//           columns: [
//           ["data1", 30, 200, 100, 400, 150, 250],
//           ["data2", 50, 20, 10, 40, 15, 25]
//           ],
//           type: "line", // for ESM specify as: line()
//         },
//         bindto: "#lineChart"
//       });
      
//       setTimeout(function() {
//           chart.load({
//               columns: [
//                   ["data1", 230, 190, 300, 500, 300, 400]
//               ]
//           });
//       }, 1000);
      
//       setTimeout(function() {
//           chart.load({
//               columns: [
//                   ["data3", 130, 150, 200, 300, 200, 100]
//               ]
//           });
//       }, 1500);
      
//       setTimeout(function() {
//           chart.unload({
//               ids: "data1"
//           });
//       }, 2000);


// side bar toggle 
   