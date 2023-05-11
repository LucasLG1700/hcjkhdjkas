mla = [
    "Pizza Vegetariana",
    "Pizza de Galinha",
    "Pizza Portuguesa",
    "Pizza quatro queijos",
    "Pizza do Ratatui",
    "Pizza Extravaganza"
];
function getMenu(){
    var htmldata="";
    mla.sort();
    for(var i=0;i<mla.length;i++){
        htmldata=htmldata+ mla[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}
function addItem(){
    var htmldata;
    var imgtags= '<img id=im1 src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    mla.sort();
    htmldata=""
    for(var i=0;i<mla.length;i++){
        htmldata=htmldata+ mla[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}
function addTop(){
    var item=document.getElementById("addItem").value;
    mla.push(item);
    addItem();
}