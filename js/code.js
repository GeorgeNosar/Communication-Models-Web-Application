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



/*Рассчет величин для вызова с помощью атрибута onclick в разметке*/
function CountPkForChart() {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);
            if( (typeof lyambda == "number") && (typeof myu == "number") )
            {
            	var max = 11;
            	var pk = [];
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
    		else 
            {
                alert("Not a number");
            }
            return pk;
};

function CountKForChart() {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);
            if( (typeof lyambda == "number") && (typeof myu == "number") )
            {
            	var k;
                if (myu >= lyambda) 
                {     
                	k = CountKMM1(lyambda, myu);
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
            return k;
};

function CountTForChart() {
    		var form = document.forms.input;
    		var lyambda = +(form.elements.lyambda.value);
    		var myu = +(form.elements.myu.value);
            if( (typeof lyambda == "number") && (typeof myu == "number") )
            {
            	var t;
                if (myu >= lyambda) 
                {     
                	t = CountTMM1(lyambda, myu);
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
            return t;
};