/*Показать-скрыть элемент, используя id*/
function ShowHiddenElements(element_id) {
                if (document.getElementById(element_id)) { 
                    var obj = document.getElementById(element_id); 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; 
                    }
                }
                else alert("Element with id: " + element_id + " not found!"); 
};   
function HideOpenElements(element_id) {
                if (document.getElementById(element_id)) { 
                    var obj = document.getElementById(element_id); 
                    if (obj.style.display != "none") { 
                        obj.style.display = "none"; 
                    } 
                }
                else alert("Element with id: " + element_id + " not found!"); 
}; 

/*Объединение функций для вызова по клику*/
function ShowAndBuildAllElements(element1, element2, element3) {
    ShowHiddenElements(element1);
    ShowHiddenElements(element2);
    ShowHiddenElements(element3);
    drawLogScales();
    AddKValueToChart();
    AddTValueToChart();
};
function ClearAllElements(element1, element2, element3) {
    HideOpenElements(element1);
    HideOpenElements(element2);
    HideOpenElements(element3);
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

/*$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});*/