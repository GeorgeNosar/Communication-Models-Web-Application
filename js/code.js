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



/*Рассчет величин для вызова с помощью атрибута onclick в разметке*/
function CountPkForChart(modelName, lyambda, myu) {
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