google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);



function drawLogScales(modelName, lyambda, myu) {
      var data = new google.visualization.DataTable();
      var pk = [];
      pk = CountPkForChart(modelName, lyambda, myu);
      
      data.addColumn('number', 'X');
      data.addColumn('number', 'Pk');

      data.addRows([
        [0, pk[0]], [1, pk[1]], [2, pk[2]], [3, pk[3]], [4, pk[4]], 
        [5, pk[5]], [6, pk[6]], [7, pk[7]], [8, pk[8]], [9, pk[9]],
        [10, pk[10]] 
      ]);

      var options = {
        hAxis: {
          title: 'K',
          logScale: false
        },
        vAxis: {
          title: 'Pk',
          logScale: false
        },
        colors: ['#a52714', '#097138']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

/*Отображение дополнительных величин*/
    function AddKValueToChart(modelName, lyambda, myu) {
      var k = CountKForChart(modelName, lyambda, myu);
      k = k.toFixed(3);
      var outputK = "K = " + k;
      document.getElementById('valueK').innerHTML = outputK;
    }

    function AddTValueToChart(modelName, lyambda, myu) {
      var t = CountTForChart(modelName, lyambda, myu);
      t = t.toFixed(3);
      var outputT = "T = " + t;
      document.getElementById('valueT').innerHTML = outputT;
    }