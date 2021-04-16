function products(){
    document.getElementById("productDropdown").classList.toggle("show");
    if(document.getElementById("arrow-1").style.transform == "rotate(180deg)"){
        
        document.getElementById("arrow-1").style.transform = "rotate(0deg)"
    }else{
        
        document.getElementById("arrow-1").style.transform = "rotate(180deg)";
    }
}

function company(){
    document.getElementById("companyDropdown").classList.toggle("show");
    if(document.getElementById("arrow-2").style.transform == "rotate(180deg)"){
        
        document.getElementById("arrow-2").style.transform = "rotate(0deg)"
    }else{
        
        document.getElementById("arrow-2").style.transform = "rotate(180deg)";
    }
}

function connect(){
    document.getElementById("connectDropdown").classList.toggle("show");
    if(document.getElementById("arrow-3").style.transform == "rotate(180deg)"){
        
        document.getElementById("arrow-3").style.transform = "rotate(0deg)"
    }else{
        
        document.getElementById("arrow-3").style.transform = "rotate(180deg)";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.product-btn') ) {
        if(document.getElementById("productDropdown").classList.contains('show')){
            document.getElementById("productDropdown").classList.remove('show');
            document.getElementById("arrow-1").style.transform = "rotate(0deg)";
        }
    }
    if (!event.target.matches('.company-btn') ) {
        if(document.getElementById("companyDropdown").classList.contains('show')){
            document.getElementById("companyDropdown").classList.remove('show');
        }
    }
    if (!event.target.matches('.connect-btn') ) {
        if(document.getElementById("connectDropdown").classList.contains('show')){
            document.getElementById("connectDropdown").classList.remove('show');
        }
    }
}


