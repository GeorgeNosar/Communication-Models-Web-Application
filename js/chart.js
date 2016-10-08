google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);


/*Вычисление массива потерь для построения графика*/
function CountPkForGraphics(pk) {
    var form = document.forms.input;
    var lyambda = form.elements.lyambda.value;
    var myu = form.elements.myu.value;
    if( (typeof lyambda == "number") && (typeof myu == "number") )
        {
            var max = 11;
            if (myu > lyambda) 
            {
                for(var i = 0; i < max; i++) 
                {
                  pk[i] = (1 - lyambda/myu) * ( (lyambda/myu) ^ k);
                }
            }
            else
            {
                alert("Invalid values. Try M > L");
            }
        }
    else 
        {
            alert("Not a number");
        }
}


function drawLogScales() {
      var data = new google.visualization.DataTable();
      var pk = [];
      //CountPkForGraphics(pk);

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
          logScale: true
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