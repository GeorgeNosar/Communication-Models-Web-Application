/*Объединение функций расчета для вызова по клику*/
function BuildAllElements(modelName) {
    drawLogScales(modelName);
    AddKValueToChart(modelName);
    AddTValueToChart(modelName);
};

/*Расчет факториала*/
function factorial(n) {
    var fac = 1;
    for (var i = 2; i <= n; i++) {
        fac *= i;
    }
    return fac;
};


/*JQuery функция для скролла к элементу*/
$(document).ready(function(){
    $('#go_to').click( function(){ 
    var scroll_el = $(this).attr('src'); 
        if ($(scroll_el).length != 0) { 
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
        return false; 
    });
});

/*Функция плавного показа скрытого блока*/
$(document).ready(function(){
    $('#fadeshow').click( function(){ // ловим клик по ссылке с классом go_to
     $('#chart_div').fadeIn();
     $('#valueK').fadeIn();
     $('#valueT').fadeIn();
        return false; // выключаем стандартное действие
    });
});
/*Функция для плавного скрытия блока*/
$(document).ready(function(){
    $('#fadehide').click( function(){ // ловим клик по ссылке с классом go_to
     $('#chart_div').fadeOut();
     $('#valueK').fadeOut();
     $('#valueT').fadeOut();
        return false; // выключаем стандартное действие
    });
});