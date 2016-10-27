/*Объединение функций расчета для вызова по клику*/
function BuildAllElements(modelName) {
    var form = document.forms.input;
    var lyambda = +(form.elements.lyambda.value);
    var myu = +(form.elements.myu.value);
    if( !((isNaN(lyambda)) || (isNaN(myu))) ) {
        if( (lyambda > 0) && (myu > 0) ) {
            if(modelName == '1') {
                if(myu < lyambda) {
                    alert("Wrong numbers. Try M > L");
                    return false;
                }
            }
            drawLogScales(modelName, lyambda, myu);
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
};

/*Расчет факториала*/
function factorial(n) {
    var fac = 1;
    for (var i = 2; i <= n; i++) {
        fac *= i;
    }
    return fac;
};


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

/*dinmic page script*/
function showHide(element_id) {
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
};


