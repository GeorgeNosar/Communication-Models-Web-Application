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
}