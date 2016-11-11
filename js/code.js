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

/*Вычисление для ММ8*/
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
        pk = (Math.pow(ro,k)/factorial(k)) / (sum + ((Math.pow(ro, v)/factorial(v))*(v/(v-ro))));
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
/*Формулы MMVK*/
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

/*Вычисление для ММVKN*/

function CountPkMMVKN(a,k,n,v)
{
    var sum=0;
    var temp=a/(1-a);
    for( var i=0;i<=v;i++)
        sum+= combinations(i,n)*Math.pow(temp,i);
    var pk=(combinations(k,n)*Math.pow(temp,k))/sum;
    return pk;

}


function CountPtMMVKN(a,n,v)
{
    var sum=0;
    var temp=a/(1-a);
    for( var i=0;i<=v;i++)
        sum+= combinations(i,n)*Math.pow(temp,i);
    var pt=(combinations(v,n)*Math.pow(temp,v))/sum;
    return pt;
}

function CountPvMMVKN(a,n,v)
{
    var sum=0;
    var temp=a/(1-a);
    for( var i=0;i<=v;i++)
        sum+= combinations(i,n-1)*Math.pow(temp,i);
    var pv=(combinations(v,n-1)*Math.pow(temp,v))/sum;
    return pv;
}




/*Рассчет величин для вызова с помощью атрибута onclick в разметке*/
function CountPkForChart(modelName, lyambda, myu, v,a,n) {
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
                    var db = 0;
                    for(var i = 0; i <= max; i++)
                    {
                        pk[i] = CountPkMMVInf(lyambda, myu, i, v);
                        if(i>=v) {
                            db += pk[i];
                        }
                    }
                break;
                case '4':
                    max = v;
                    for(var i = 0; i <= max; i++)
                    {
                        pk[i] = CountPkMMVK(lyambda, myu, i, v);
                    }
                break;
                case '5':
                    max=v;
                    for(var i=0;i<=max;i++)
                    {
                        pk[i]=CountPkMMVKN(a,i,n,v)
                    }

                break;
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

function CountPtForChart(modelName, lyambda, myu, v,a,n) {
                var pt;
                switch(modelName)
                {
                case '3' :    
                    pt = CountPtMMVInf(lyambda, myu, v);
                break;
                case '4' :
                    pt = CountPtMMVK(lyambda, myu, v);
                break;
                case '5':
                    pt = CountPtMMVKN(a,n,v);
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

function CountPvForChart(modelName,v,a,n) {
                var pv;
                switch(modelName)
                {
                case '5':
                    pv = CountPvMMVKN(a,n,v);
                }             
            return pv;
};