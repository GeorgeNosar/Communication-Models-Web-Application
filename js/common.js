/*Объединение функций расчета для вызова по клику*/
function BuildAllElements(modelName) 
{
    var form = document.forms.input;
    var lyambda,myu,a,v,n;

    switch(modelName)
    {
    	case '1':
    	lyambda = +(form.elements.lyambda.value);
    	myu = +(form.elements.myu.value);
    	if( !((isNaN(lyambda)) || (isNaN(myu))) )
    	{
    		if( (lyambda > 0) && (myu > 0) )
    		{
    			if(myu > lyambda) 
    			{
                    drawLogScales(modelName, lyambda, myu, v,a,n);
                    AddKValueToChart(modelName, lyambda, myu);
                	AddTValueToChart(modelName, lyambda, myu); 
                }
                else 
                {
                	alert("Wrong numbers. Try M > L");
                }
    		}
    		else
        	{
            	alert("Wrong numbers. Try > 0");
        	}
    	}
    	else
    	{
       		alert("Not a number!");
    	}

    	break;



    	case '2':
    	lyambda = +(form.elements.lyambda.value);
    	myu = +(form.elements.myu.value);
    	if( !((isNaN(lyambda)) || (isNaN(myu))) )
    	{
    		if( (lyambda > 0) && (myu > 0) )
    		{
    			drawLogScales(modelName, lyambda, myu, v,a, n);
                AddKValueToChart(modelName, lyambda, myu);
                AddTValueToChart(modelName, lyambda, myu); 
    		}
    		else
        	{
            	alert("Wrong numbers. Try > 0");
        	}

    	}
    	else
    	{
       		alert("Not a number!");
    	}
    	break;


    	case '3':
    	lyambda = +(form.elements.lyambda.value);
    	myu = +(form.elements.myu.value);
    	v = +(form.elements.v.value);
    	if( !((isNaN(lyambda)) || (isNaN(myu))|| (isNaN(v))) )
    	{
    		if( (lyambda > 0) && (myu > 0) && (v > 0))
    		{
    			if(isInteger(v))
    			{
    				if(myu*v > lyambda)
    				{
						drawLogScales(modelName, lyambda, myu, v,a, n);
						AddPtValueToChart(modelName, lyambda, myu, v,a,n);
						AddGammaValueToChart(modelName, lyambda, myu, v);
                		AddJValueToChart(modelName, lyambda, myu, v);
    				}
    				else
    				{
    					alert("Wrong numbers. Try M*V > L");
    				}
    			}
    			else
    			{
    				alert("V is not integer!");
    			}

    		}
    		else
        	{
            	alert("Wrong numbers. Try > 0");
        	}
    	}
    	else
    	{
       		alert("Not a number!");
    	}


    	break;
    	case '4':
    	lyambda = +(form.elements.lyambda.value);
    	myu = +(form.elements.myu.value);
    	v = +(form.elements.v.value);
    	if( !((isNaN(lyambda)) || (isNaN(myu))|| (isNaN(v))) )
    	{
			if( (lyambda > 0) && (myu > 0) && (v > 0))
    		{
    			if(myu*v > lyambda)
    			{
					drawLogScales(modelName, lyambda, myu, v,a, n);
					AddPtValueToChart(modelName, lyambda, myu, v,a,n);
    			}
    			else
    			{
    				alert("Wrong numbers. Try M*V > L");
    			}

    		}
    		else
        	{
            	alert("Wrong numbers. Try > 0");
        	}
    	}
    	else
    	{
       		alert("Not a number!");
    	}

    	break;


    	case '5':
    	a = +(form.elements.a.value);
    	myu = +(form.elements.myu.value);
    	v = +(form.elements.v.value);
    	n = +(form.elements.n.value);
    	if( !((isNaN(a)) || (isNaN(myu))|| (isNaN(v))|| (isNaN(n))) )
    	{
    		if( (a > 0) && (myu > 0) && (v > 0)&& (n > 0))
    		{
    			if(a<1)
    			{
    				if(isInteger(v)&&isInteger(n))
    				{
    					var alfa=(a*myu)/(1-a);
    					if((alfa*n)<(v*myu))
    					{
    						//вызов построения граффика и значений 
    					}
    					else
    					{
    						alert("Wrong numbers. Try alfa*N < V*M");
    					}
    				}
    				else
    				{
    					alert("Wrong numbers. N or V is not integer");
    				}
    			}
    			else
    			{
    				alert("Wrong numbers. Try a<1");
    			}
    		}
    		else
        	{
            	alert("Wrong numbers. Try > 0");
        	}
    	}
    	else
    	{
       		alert("Not a number!");
    	}

    	break;


    }
};
    /*
    var myu = +(form.elements.myu.value);

    if(modelName!='5')
    {
    	var lyambda = +(form.elements.lyambda.value);
    }
    
    if(modelName == '3' || modelName == '4' || modelName == '5')
    {
        var v = +(form.elements.v.value);
    }

    if(modelName=='5')
    {
    	var a = +(form.elements.a.value)
    }

    if( !((isNaN(lyambda)) || (isNaN(myu))) ) {
        if( (lyambda > 0) && (myu > 0) ) {
            if(modelName == '1')  {
                if(myu < lyambda) {
                    alert("Wrong numbers. Try M > L");
                    return false;
                }
            }
            else if(modelName == '3' || modelName == '4') {
                if(myu*v < lyambda) {
                    alert("Wrong numbers. Try M*V > L");
                    return false;
                }
            }
            drawLogScales(modelName, lyambda, myu, v);
            if(modelName == '1' || modelName == '2') {
                AddKValueToChart(modelName, lyambda, myu);
                AddTValueToChart(modelName, lyambda, myu);               
            }
            else if(modelName == '3') {
                AddPtValueToChart(modelName, lyambda, myu, v);
                AddGammaValueToChart(modelName, lyambda, myu, v);
                AddJValueToChart(modelName, lyambda, myu, v);
            }
            else if(modelName == '4') {
                AddPtValueToChart(modelName, lyambda, myu, v);
            }
        }
        else
        {
            alert("Wrong numbers. Try > 0");
        }
    }
    else
    {
        alert("Not a number!");
    }
};*/

/*Расчет факториала*/
function factorial(n) {
    var fac = 1;
    for (var i = 2; i <= n; i++) {
        fac *= i;
    }
    return fac;
};

/*Расчет сочетаний*/
function combinations(K,N)
{
	var chisl=1;
	for(var i=K+1;i<=N;i++)
		chisl*=i;
	var comb=chisl/factorial(N-K);
	return comb;
}

/*проверка на целое число*/
function isInteger(num) {
  return (num ^ 0) == num;
}

/*JQuery функции для скролла*/
$(document).ready(function(){
    $('#go_to').click( function(){ 
    var scroll_el = $(this).attr('src'); 
        if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});

$(document).ready(function() {
    $('#up').click( function() {
        $('body').animate({ scrollTop: 0}, 500);
        return false;
    });
});

/*Функция плавного показа блока*/
$(document).ready(function(){
    $('#fadeshow').click( function(){ // ловим клик по ссылке 
     $('#chart_div').fadeIn();
     $('#valueK').fadeIn();
     $('#valueT').fadeIn();
        return false; // выключаем стандартное действие
    });
});
/*Функция для плавного скрытия блока*/
$(document).ready(function(){
    $('#fadehide').click( function(){ // ловим клик по ссылке 
     $('#chart_div').fadeOut();
     $('#valueK').fadeOut();
     $('#valueT').fadeOut();
        return false; // выключаем стандартное действие
    });
});

/*dinamic page script*/
/*function showHide(element_id) {
    var element = document.getElementById(element_id);
    var mm1 = document.getElementById("mm1");
    var mm8 = document.getElementById("mm8");
    if (element != mm1) {
        if(mm1.style.display == "block") {
            mm1.style.display = "none";
        }
    }
    if (element != mm8) {
        if(mm8.style.display == "block") {
            mm8.style.display = "none";
        }
    }
    if(element.style.display != "block") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
};*/


