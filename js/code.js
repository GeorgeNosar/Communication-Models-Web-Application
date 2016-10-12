/*Вычисление Рк, К и Т для модели М/М/1*/
function CountPkMM1(lyambda, myu, k) {
	var pk = (1 - lyambda/myu) * ( (lyambda/myu) ^ k);
	return pk;
};
function CountKMM1(lyambda, myu) {
	var k = (lyambda/myu) / (1 - lyambda/myu);
	return k;
};
function CountTMM1(lyambda, myu) {
	var t = (1/myu) / (1 - lyambda/myu);
	return t;
};

/*Вычисление для ММV*/
function CountPkMMInfinite(lyambda, myu, k) {
	var pk = ( ( (lyambda/myu)^k ) / factorial(k) )  *  Math.pow(exp, -(lyambda/myu) );
	return pk;
};
function CountKMMInfinite(lyambda, myu) {
	var k = lyambda / myu;
	return k;
};
function CountTMMInfinite(lyambda, myu) {
	var t = 1 / lyambda;
	return t;
}



/*Рассчет величин для вызова с помощью атрибута onclick в разметке*/
function CountPkForChart(modelName) {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);

            if( !((isNaN(lyambda)) || (isNaN(myu))) )
            {
            	var max = 11;
            	var pk = [];
            	if(modelName == '1') {
            		if (myu >= lyambda) 
                	{     
            			for(var i = 0; i < max; i++) 
                		{
                  			pk[i] = CountPkMM1(lyambda, myu, i);
                		}  
                	}
                	else
                	{
                   	alert("Invalid values. Try M > L");
                	}
            	}
                else if(modelName == '2') {
                	for(var i = 0; i < max; i++) 
                		{
                  			pk[i] = CountPkMMInfinite(lyambda, myu, i);
                		}  
                }
            }
    		else 
            {
                alert("Not a number");
            }
            return pk;
};

function CountKForChart(modelName) {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);
            if( !((isNaN(lyambda)) || (isNaN(myu))) )
            {
            	var k;
            	if(modelName == '1') {
            		if (myu >= lyambda) 
                	{     
                		k = CountKMM1(lyambda, myu);
                	}
                	else
                	{
                   		alert("Invalid values. Try M > L");
                	}
            	}

            	else if(modelName == '2') {
            		k = CountKMMInfinite(lyambda, myu);
            	}
            }
    		else 
            {
                alert("Not a number");
            }
            return k;
};

function CountTForChart(modelName) {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);
            if( !((isNaN(lyambda)) || (isNaN(myu))) )
            {
            	var t;
            		if(modelName == '1') {
            			if (myu >= lyambda) 
                		{     
                			t = CountTMM1(lyambda, myu);
                		}
                		else
                		{
                   			alert("Invalid values. Try M > L");
                		}
            	}
            	else if(modelName == '2') {
            		t = CountTMMInfinite(lyambda, myu);
            	}               
            }
    		else 
            {
                alert("Not a number");
            }
            return t;
};