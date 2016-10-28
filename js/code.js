/*Вычисление Рк, К и Т для модели М/М/1*/
function CountPkMM1(lyambda, myu, k) {
	var pk = (1 - lyambda/myu) * ( Math.pow((lyambda/myu), k) );
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
	var pk =  ( Math.pow((lyambda/myu), k) / factorial(k) )  *  Math.exp( -(lyambda/myu) );
	return pk;
};
function CountKMMInfinite(lyambda, myu) {
	var k = lyambda / myu;
	return k;
};
function CountTMMInfinite(lyambda, myu) {
	var t = 1 / myu;
	return t;
}
/*Формулы MMV8*/
function CountPkMMVInf(lyambda, myu, k, v) {
    var pk;
    var ro = lyambda/myu; i
    var sum = 0;
    for(var i = 0; i <= (v-1); i++) {
        sum += Math.pow(ro, i) / factorial(i);
    }
    if(k <= v) {
        pk = (Math.pow(ro, factorial(k))) / (sum + ((Math.pow(ro, v)/factorial(v))*(v/(v-ro))));
    }
    else {
        pk = ((Math.pow(ro, v)/factorial(v))*Math.pow((ro/v), (k-v))) / (sum + ((Math.pow(ro, v)/factorial(v))*(v/(v-ro))));
    }
    return pk;
};
/*Вторая формула Эрланга*/
function CountPtMMVInf(lyambda, myu, v) {
    var pt;
    var ro = lyambda/myu;
    var sum = 0;
    for(var i = 0; i <= (v-1); i++) {
        sum += Math.pow(ro, i) / factorial(i);
    }
    pt = ( (Math.pow(ro, v)/factorial(v))*(v/(v-ro)) ) / (sum + ((Math.pow(ro, v)/factorial(v))*(v/(v-ro))));
    return pt;
};
function CountGammaMMVInf(lyambda, myu, v) {
    var gamma = 1 / (myu*(v-(lyambda/myu)));
    return gamma;
};
function CountJMMVInf(lyambda, myu, v) {
    var gamma = CountGammaMMVInf(lyambda, myu, v);
    var j = lyambda * gamma;
    return j;
};
function CountPkMMVK(lyambda, myu, k, v) {
    var ro = lyambda / myu;
    var sum = 0;
    for (var i = 0; i <= v; i++) {
        sum += Math.pow(ro, i) / factorial(i);
    }
    var pk = (Math.pow(ro, k)/factorial(k)) / sum;
    return pk;
};
/*Первая формула Эрланга*/
function CountPtMMVK(lyambda, myu, v) {
    var ro = lyambda / myu;
    var sum = 0;
    for (var i = 0; i <= v; i++) {
        sum += Math.pow(ro, i) / factorial(i);
    }
    var pt = (Math.pow(ro, v)/factorial(v)) / sum;
    return pt;
}

/*Рассчет величин для вызова с помощью атрибута onclick в разметке*/
function CountPkForChart(modelName, lyambda, myu, v) {
            	var max = 11;
            	var pk = [];
                switch(modelName)
                {
            	case '1':   
            		for(var i = 0; i < max; i++) 
                	{
                  	     pk[i] = CountPkMM1(lyambda, myu, i);
                	}  
            	break;
                case '2' :
                	for(var i = 0; i < max; i++) 
                	{
                  		pk[i] = CountPkMMInfinite(lyambda, myu, i);
                	}
                break;
                case '3':
                    max = v + 10;
                    for(var i = 0; i < max; i++)
                    {
                        pk[i] = CountPkMMVInf(lyambda, myu, i, v);
                    }
                }

            return pk;
};

function CountKForChart(modelName, lyambda, myu) {
            	var k;
                switch(modelName)
                {

            	case '1':
                	k = CountKMM1(lyambda, myu);
            	break;

            	case '2' :
            		k = CountKMMInfinite(lyambda, myu);
            	break;
                }
            return k;
};

function CountTForChart(modelName, lyambda, myu) {
            	var t;
                switch(modelName)
                {
            	case '1' :    
            		t = CountTMM1(lyambda, myu);
                break;
            	case '2' :
            		t = CountTMMInfinite(lyambda, myu);
            	break; 
                }             
            return t;
};

function CountPtForChart(modelName, lyambda, myu, v) {
                var pt;
                switch(modelName)
                {
                case '3' :    
                    pt = CountPtMMVInf(lyambda, myu, v);
                break;
                }             
            return pt;
};

function CountGammaForChart(modelName, lyambda, myu, v) {
                var gamma;
                switch(modelName)
                {
                case '3' :    
                    gamma = CountGammaMMVInf(lyambda, myu, v);
                break;
                }             
            return gamma;
};

function CountJForChart(modelName, lyambda, myu, v) {
                var j;
                switch(modelName)
                {
                case '3' :    
                    j = CountJMMVInf(lyambda, myu, v);
                break;
                }             
            return j;
};