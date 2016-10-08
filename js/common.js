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