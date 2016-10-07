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



/*Объединение первых трех функций в одну для вызова с помощью атрибута onclick в разметке*/
function CountForMM1() {
    		var form = document.forms.input;
    		var lyambda = form.elements.lyambda.value;
    		var myu = form.elements.myu.value;
            if( (typeof lyambda == "number") && (typeof myu == "number") )
            {
                alert(lyambda);
                alert(myu);
                var max = 11;
                var pk = [];
                if (myu > lyambda) 
                {
                	for(var i = 0; i < max; i++) 
                	{
                	    pk[i] = CountPkMM1(lyambda, myu, i);
                	}
                	var k = CountKMM1(lyambda, myu);
                	var t = CountTMM1(lyambda, myu);
                	alert(pk);
                	alert(k);
                	alert(t);
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
    	};

