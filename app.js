window.onload = function() {
var cells = [
    {pos: "p11", movable: false, clear: false, top: "0.2%", left: "0.2%"},
    {pos: "p12", movable: false, clear: false, top: "0.2%", left: "25.2%"},
    {pos: "p13", movable: false, clear: false, top: "0.2%", left: "50.2%"},
    {pos: "p14", movable: false, clear: false, top: "0.2%", left: "75.2%"},
    {pos: "p21", movable: false, clear: false, top: "25.2%", left: "0.2%"},
    {pos: "p22", movable: false, clear: false, top: "25.2%", left: "25.2%"},
    {pos: "p23", movable: false, clear: false, top: "25.2%", left: "50.2%"},
    {pos: "p24", movable: false, clear: false, top: "25.2%", left: "75.2%"},
    {pos: "p31", movable: false, clear: false, top: "50.2%", left: "0.2%"},
    {pos: "p32", movable: false, clear: false, top: "50.2%", left: "25.2%"},
    {pos: "p33", movable: false, clear: false, top: "50.2%", left: "50.2%"},
    {pos: "p34", movable: true, clear: false, top: "50.2%", left: "75.2%"},
    {pos: "p41", movable: false, clear: false, top: "75.2%", left: "0.2%"},
    {pos: "p42", movable: false, clear: false, top: "75.2%", left: "25.2%"},
    {pos: "p43", movable: true, clear: false, top: "75.2%", left: "50.2%"},
    {pos: "p44", movable: false, clear: true, top: "75.2%", left: "75.2%"},
];

var clear = 15;
    
//document.getElementById("p11").onclick = function () { move(0) };
//document.getElementById("p12").onclick = move(1);
//document.getElementById("p13").onclick = move(2);
//document.getElementById("p14").onclick = move(3);
//document.getElementById("p21").onclick = move(4);
//document.getElementById("p22").onclick = move(5);
//document.getElementById("p23").onclick = move(6);
//document.getElementById("p24").onclick = move(7);
//document.getElementById("p31").onclick = move(8);
//document.getElementById("p32").onclick = move(9);
document.getElementById("p34").onclick = function() { 
    move(11);
};
//document.getElementById("p34").onclick = move(11);
//document.getElementById("p41").onclick = move(12);
//document.getElementById("p42").onclick = move(13);
document.getElementById("p43").onclick = function() {
    move(14);
};
//document.getElementById("p44").onclick = move(15);
    
    
function move(e) {
    if(cells[e].movable){
        document.getElementById(cells[e].pos).style.transition = "all 1s";
        document.getElementById(cells[e].pos).style.top = cells[clear].top;
        document.getElementById(cells[e].pos).style.left = cells[clear].left;
    }
}

    
    
    
    
    
//    document.getElementById("p43").onclick = function() {
//        console.log("i");
////        document.getElementById("p43").style.transition = "top 1s";
////        document.getElementById("p43").style.top = "75.2%";
//        document.getElementById("p43").style.transition = "all 1s";
//        document.getElementById("p43").style.left = "75.2%";
//    }
}