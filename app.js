window.onload = function() {
var cells = [
    {pos: "p11", movable: false, clear: false, top: "0.2%", left: "0.2%", id: 0},
    {pos: "p12", movable: false, clear: false, top: "0.2%", left: "25.2%", id: 1},
    {pos: "p13", movable: false, clear: false, top: "0.2%", left: "50.2%", id: 2},
    {pos: "p14", movable: false, clear: false, top: "0.2%", left: "75.2%", id: 3},
    {pos: "p21", movable: false, clear: false, top: "25.2%", left: "0.2%", id: 4},
    {pos: "p22", movable: false, clear: false, top: "25.2%", left: "25.2%", id: 5},
    {pos: "p23", movable: false, clear: false, top: "25.2%", left: "50.2%", id: 6},
    {pos: "p24", movable: false, clear: false, top: "25.2%", left: "75.2%", id: 7},
    {pos: "p31", movable: false, clear: false, top: "50.2%", left: "0.2%", id: 8},
    {pos: "p32", movable: false, clear: false, top: "50.2%", left: "25.2%", id: 9},
    {pos: "p33", movable: false, clear: false, top: "50.2%", left: "50.2%", id: 10},
    {pos: "p34", movable: true, clear: false, id: 11, top: "50.2%", left: "75.2%"},
    {pos: "p41", movable: false, clear: false, top: "75.2%", left: "0.2%", id: 12},
    {pos: "p42", movable: false, clear: false, top: "75.2%", left: "25.2%", id: 13},
    {pos: "p43", movable: true, clear: false, top: "75.2%", left: "50.2%", id: 14},
    {pos: "p44", movable: false, clear: true, id: 15, top: "75.2%", left: "75.2%"},
];

var clear = 15;
   

    
    
    
    
    
    
    
document.getElementById("p11").onclick = function() { console.log(cells[0]); move(0) };
document.getElementById("p12").onclick = function() { console.log(cells[1]); move(1) };
document.getElementById("p13").onclick = function() { console.log(cells[2]); move(2) };
document.getElementById("p14").onclick = function() { console.log(cells[3]); move(3) };
document.getElementById("p21").onclick = function() { console.log(cells[4]); move(4) };
document.getElementById("p22").onclick = function() { console.log(cells[5]); move(5) };
document.getElementById("p23").onclick = function() { console.log(cells[6]); move(6) };
document.getElementById("p24").onclick = function() { console.log(cells[7]); move(7) };
document.getElementById("p31").onclick = function() { console.log(cells[8]); move(8) };
document.getElementById("p32").onclick = function() { console.log(cells[9]); move(9) };
document.getElementById("p33").onclick = function() { console.log(cells[10]); move(10) };
document.getElementById("p34").onclick = function() { console.log(cells[11]); move(11) };
document.getElementById("p41").onclick = function() { console.log(cells[12]); move(12) };
document.getElementById("p42").onclick = function() { console.log(cells[13]); move(13) };
document.getElementById("p43").onclick = function() { console.log(cells[14]); move(14) };
document.getElementById("p44").onclick = function() { console.log(cells[15]); move(15) };
    
    
function move(e) {
    if(cells[e].movable){
        
        document.getElementById(cells[e].pos).style.transition = "all 0.4s";
        var tempTop = document.getElementById(cells[e].pos).style.top;

        var tempLeft = document.getElementById(cells[e].pos).style.left;

        document.getElementById(cells[e].pos).style.top = cells[clear].top;
        document.getElementById(cells[e].pos).style.left = cells[clear].left;
        document.getElementById(cells[clear].pos).style.top = tempTop;
        document.getElementById(cells[clear].pos).style.left = tempLeft;
//        console.log(cells[clear]);
        
        
        
        
        
        unset(clear);
        var tempClear = clear;
        
        clear = e;
        reset(e);
        
        var tempPos = cells[e].pos;
        cells[e].pos = cells[tempClear].pos;
        cells[tempClear].pos = tempPos;
//        
        var tempId = cells[e].id;
        cells[e].id = cells[tempClear].id;
        cells[tempClear].id = tempId;
        
        
//        var tempId = document.getElementsByClassName("cell")[e].id;
//        console.log(tempId);
//        document.getElementsByClassName("cell")[e].id = document.getElementsByClassName("cell")[tempId].id;
//        document.getElementsByClassName("cell")[tempId].id = tempId;
//        console.log(tempId);
        cells[e].clear = true;
//        console.log(e);
//        console.log(cells[11]);
    }
}
    
function unset(p) {
//    console.log(p);
    switch(p){
        case 0:
            cells[1].movable = false;
            cells[4].movable = false;
            cells[0].clear = false;
            break;
        case 1:
            cells[0].movable = false;
            cells[2].movable = false;
            cells[5].movable = false;
            cells[1].clear = false;
            break;
        case 2:
            cells[1].movable = false;
            cells[3].movable = false;
            cells[6].movable = false;
            cells[2].clear = false;
            break;
        case 3:
            cells[2].movable = false;
            cells[7].movable = false;
            cells[3].clear = false;
            break;
        case 4:
            cells[0].movable = false;
            cells[5].movable = false;
            cells[8].movable = false;
            cells[4].clear = false;
            break;
        case 5:
            cells[1].movable = false;
            cells[4].movable = false;
            cells[6].movable = false;
            cells[9].movable = false;
            cells[5].clear = false;
            break;
        case 6:
            cells[2].movable = false;
            cells[5].movable = false;
            cells[7].movable = false;
            cells[10].movable = false;
            cells[6].clear = false;
            break;
        case 7:
            cells[3].movable = false;
            cells[6].movable = false;
            cells[11].movable = false;
            cells[7].clear = false;
            break;
        case 8:
            cells[4].movable = false;
            cells[9].movable = false;
            cells[12].movable = false;
            cells[8].clear = false;
            break;
        case 9:
            cells[5].movable = false;
            cells[8].movable = false;
            cells[10].movable = false;
            cells[13].movable = false;
            cells[9].clear = false;
            break;
        case 10:
            cells[6].movable = false;
            cells[9].movable = false;
            cells[11].movable = false;
            cells[14].movable = false;
            cells[10].clear = false;
            break;
        case 11:
            cells[7].movable = false;
            cells[10].movable = false;
            cells[15].movable = false;
            cells[11].clear = false;
            break;
        case 12:
            cells[8].movable = false;
            cells[13].movable = false;
            cells[12].clear = false;
            break;
        case 13:
            cells[9].movable = false;
            cells[12].movable = false;
            cells[14].movable = false;
            cells[13].clear = false;
            break;
        case 14:
            cells[10].movable = false;
            cells[13].movable = false;
            cells[15].movable = false;
            cells[8].clear = false;
            break;
        case 15:
            cells[11].movable = false;
            cells[14].movable = false;
            cells[15].clear = false;
            break;
    }
    
}
    
function reset(p) {
//    console.log(p);
    switch(p){
        case 0:
            cells[1].movable = true;
            cells[4].movable = true;
            break;
        case 1:
            cells[0].movable = true;
            cells[2].movable = true;
            cells[5].movable = true;
            break;
        case 2:
            cells[1].movable = true;
            cells[3].movable = true;
            cells[6].movable = true;
            break;
        case 3:
            cells[2].movable = true;
            cells[7].movable = true;
            break;
        case 4:
            cells[0].movable = true;
            cells[5].movable = true;
            cells[8].movable = true;
            break;
        case 5:
            cells[1].movable = true;
            cells[4].movable = true;
            cells[6].movable = true;
            cells[9].movable = true;
            break;
        case 6:
            cells[2].movable = true;
            cells[5].movable = true;
            cells[7].movable = true;
            cells[10].movable = true;
            break;
        case 7:
            cells[3].movable = true;
            cells[6].movable = true;
            cells[11].movable = true;
            break;
        case 8:
            cells[4].movable = true;
            cells[9].movable = true;
            cells[12].movable = true;
            break;
        case 9:
            cells[5].movable = true;
            cells[8].movable = true;
            cells[10].movable = true;
            cells[13].movable = true;
            break;
        case 10:
            cells[6].movable = true;
            cells[9].movable = true;
            cells[11].movable = true;
            cells[14].movable = true;
            break;
        case 11:
            cells[7].movable = true;
            cells[10].movable = true;
            cells[15].movable = true;
            break;
        case 12:
            cells[8].movable = true;
            cells[13].movable = true;
            break;
        case 13:
            cells[9].movable = true;
            cells[12].movable = true;
            cells[14].movable = true;
            break;
        case 14:
            cells[10].movable = true;
            cells[13].movable = true;
            cells[15].movable = true;
            break;
        case 15:
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