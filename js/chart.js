google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);



function drawLogScales(modelName, lyambda, myu, v, a, n) {
      var data = new google.visualization.DataTable();
      var pk = [];
      pk = CountPkForChart(modelName, lyambda, myu, v, a, n);
      
      data.addColumn('number', 'X');
      data.addColumn('number', 'Pk');
      if(modelName == '3') {
        data.addColumn('number', 'Wk');
      }

      if(modelName == '1' || modelName == '2') {
        data.addRows([
        [0, pk[0]], [1, pk[1]], [2, pk[2]], [3, pk[3]], [4, pk[4]], 
        [5, pk[5]], [6, pk[6]], [7, pk[7]], [8, pk[8]], [9, pk[9]],
        [10, pk[10]] 
      ]);
      }
      else if(modelName == '3') {
        for(var i=0; i <= v; i++) {
          data.addRows([
            [i, pk[i], NaN]
            ]);
        }
        for(var i = v; i <= v+10; i++) {
          data.addRows([
            [i, NaN, pk[i]]
            ]);
        }
      }
      else if(modelName == '4' || modelName == '5') {
        var max = v;
        for(var i=0; i <= max; i++) {
          data.addRows([
            [i, pk[i]]
            ]);
        }
      }

      var options = {
        hAxis: {
          title: 'K',
        },
        vAxis: {
          title: 'Pk',
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
    };

    function AddTValueToChart(modelName, lyambda, myu) {
      var t = CountTForChart(modelName, lyambda, myu);
      t = t.toFixed(3);
      var outputT = "T = " + t;
      document.getElementById('valueT').innerHTML = outputT;
    };

    function AddPtValueToChart(modelName, lyambda, myu, v,a,n) {
        var pt = CountPtForChart(modelName, lyambda, myu, v, a, n);
        pt = pt.toFixed(3);
        var outputPt = "Pt = " + pt;
        document.getElementById('valuePt').innerHTML = outputPt;  
    };

    function AddGammaValueToChart(modelName, lyambda, myu, v) {
      var gamma = CountGammaForChart(modelName, lyambda, myu, v);
      gamma = gamma.toFixed(3);
      var outputGamma = "Gamma = " + gamma;
      document.getElementById('valueGamma').innerHTML = outputGamma;  
    };

    function AddJValueToChart(modelName, lyambda, myu, v) {
      var j = CountJForChart(modelName, lyambda, myu, v);
      j = j.toFixed(3);
      var outputJ = "J = " + j;
      document.getElementById('valueJ').innerHTML = outputJ;  
    };

    function AddPvValueToChart(modelName, a, n, v) {
      var pv = CountPvForChart(modelName, v, a, n);
      pv = pv.toFixed(3);
      var outputPv = "Pv = " + pv;
      document.getElementById('valuePv').innerHTML = outputPv;
    }