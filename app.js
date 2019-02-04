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
    
document.getElementById("p11").onclick = function() { move(0) };
document.getElementById("p12").onclick = function() { move(1) };
document.getElementById("p13").onclick = function() { move(2) };
document.getElementById("p14").onclick = function() { move(3) };
document.getElementById("p21").onclick = function() { move(4) };
document.getElementById("p22").onclick = function() { move(5) };
document.getElementById("p23").onclick = function() { move(6) };
document.getElementById("p24").onclick = function() { move(7) };
document.getElementById("p31").onclick = function() { move(8) };
document.getElementById("p32").onclick = function() { move(9) };
document.getElementById("p33").onclick = function() { move(10) };
document.getElementById("p34").onclick = function() { move(11) };
document.getElementById("p41").onclick = function() { move(12) };
document.getElementById("p42").onclick = function() { move(13) };
document.getElementById("p43").onclick = function() { move(14) };
document.getElementById("p44").onclick = function() { move(15) };
    
    
function move(e) {
    if(cells[e].movable){
        document.getElementById(cells[e].pos).style.transition = "all 0.4s";
        document.getElementById(cells[e].pos).style.top = cells[clear].top;
        document.getElementById(cells[e].pos).style.left = cells[clear].left;
        
        unset(cells[clear].pos);
        var tempClear = clear;
        clear = e;
        reset(cells[clear].pos);
        
        var temp = cells[e].pos;
        cells[e].pos = cells[tempClear].pos;
        cells[tempClear].pos = temp;
        
        cells[e].clear = true;
    }
}
    
function unset(p) {
    switch(p){
        case "p11":
            cells[1].movable = false;
            cells[4].movable = false;
            cells[0].clear = false;
            break;
        case "p12":
            cells[0].movable = false;
            cells[2].movable = false;
            cells[5].movable = false;
            cells[1].clear = false;
            break;
        case "p13":
            cells[1].movable = false;
            cells[3].movable = false;
            cells[6].movable = false;
            cells[2].clear = false;
            break;
        case "p14":
            cells[2].movable = false;
            cells[7].movable = false;
            cells[3].clear = false;
            break;
        case "p21":
            cells[0].movable = false;
            cells[5].movable = false;
            cells[8].movable = false;
            cells[4].clear = false;
            break;
        case "p22":
            cells[1].movable = false;
            cells[4].movable = false;
            cells[6].movable = false;
            cells[9].movable = false;
            cells[5].clear = false;
            break;
        case "p23":
            cells[2].movable = false;
            cells[5].movable = false;
            cells[7].movable = false;
            cells[10].movable = false;
            cells[6].clear = false;
            break;
        case "p24":
            cells[3].movable = false;
            cells[6].movable = false;
            cells[11].movable = false;
            cells[7].clear = false;
            break;
        case "p31":
            cells[4].movable = false;
            cells[9].movable = false;
            cells[12].movable = false;
            cells[8].clear = false;
            break;
        case "p32":
            cells[5].movable = false;
            cells[8].movable = false;
            cells[10].movable = false;
            cells[13].movable = false;
            cells[9].clear = false;
            break;
        case "p33":
            cells[6].movable = false;
            cells[9].movable = false;
            cells[11].movable = false;
            cells[14].movable = false;
            cells[10].clear = false;
            break;
        case "p34":
            cells[7].movable = false;
            cells[10].movable = false;
            cells[15].movable = false;
            cells[11].clear = false;
            break;
        case "p41":
            cells[8].movable = false;
            cells[13].movable = false;
            cells[12].clear = false;
            break;
        case "p42":
            cells[9].movable = false;
            cells[12].movable = false;
            cells[14].movable = false;
            cells[13].clear = false;
            break;
        case "p43":
            cells[10].movable = false;
            cells[13].movable = false;
            cells[15].movable = false;
            cells[8].clear = false;
            break;
        case "p44":
            cells[11].movable = false;
            cells[14].movable = false;
            cells[15].clear = false;
            break;
    }
}
    
function reset(p) {
    switch(p){
        case "p11":
            cells[1].movable = true;
            cells[4].movable = true;
            break;
        case "p12":
            cells[0].movable = true;
            cells[2].movable = true;
            cells[5].movable = true;
            break;
        case "p13":
            cells[1].movable = true;
            cells[3].movable = true;
            cells[6].movable = true;
            break;
        case "p14":
            cells[2].movable = true;
            cells[7].movable = true;
            break;
        case "p21":
            cells[0].movable = true;
            cells[5].movable = true;
            cells[8].movable = true;
            break;
        case "p22":
            cells[1].movable = true;
            cells[4].movable = true;
            cells[6].movable = true;
            cells[9].movable = true;
            break;
        case "p23":
            cells[2].movable = true;
            cells[5].movable = true;
            cells[7].movable = true;
            cells[10].movable = true;
            break;
        case "p24":
            cells[3].movable = true;
            cells[6].movable = true;
            cells[11].movable = true;
            break;
        case "p31":
            cells[4].movable = true;
            cells[9].movable = true;
            cells[12].movable = true;
            break;
        case "p32":
            cells[5].movable = true;
            cells[8].movable = true;
            cells[10].movable = true;
            cells[13].movable = true;
            break;
        case "p33":
            cells[6].movable = true;
            cells[9].movable = true;
            cells[11].movable = true;
            cells[14].movable = true;
            break;
        case "p34":
            cells[7].movable = true;
            cells[10].movable = true;
            cells[15].movable = true;
            break;
        case "p41":
            cells[8].movable = true;
            cells[13].movable = true;
            break;
        case "p42":
            cells[9].movable = true;
            cells[12].movable = true;
            cells[14].movable = true;
            break;
        case "p43":
            cells[10].movable = true;
            cells[13].movable = true;
            cells[15].movable = true;
            break;
        case "p44":
            cells[11].movable = true;
            cells[14].movable = true;
            break;
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