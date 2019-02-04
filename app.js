window.onload = function() {
var cells = [
    {pos: "11", movable: false, clear: false, top: "0.2%", left: "0.2%"},
    {pos: "12", movable: false, clear: false, top: "0.2%", left: "25.2%"},
    {pos: "13", movable: false, clear: false, top: "0.2%", left: "50.2%"},
    {pos: "14", movable: false, clear: false, top: "0.2%", left: "75.2%"},
    {pos: "21", movable: false, clear: false, top: "25.2%", left: "0.2%"},
    {pos: "22", movable: false, clear: false, top: "25.2%", left: "25.2%"},
    {pos: "23", movable: false, clear: false, top: "25.2%", left: "50.2%"},
    {pos: "24", movable: false, clear: false, top: "25.2%", left: "75.2%"},
    {pos: "31", movable: false, clear: false, top: "50.2%", left: "0.2%"},
    {pos: "32", movable: false, clear: false, top: "50.2%", left: "25.2%"},
    {pos: "33", movable: true, clear: false, top: "50.2%", left: "50.2%"},
    {pos: "34", movable: false, clear: false, top: "50.2%", left: "75.2%"},
    {pos: "41", movable: false, clear: false, top: "75.2%", left: "0.2%"},
    {pos: "42", movable: false, clear: false, top: "75.2%", left: "25.2%"},
    {pos: "43", movable: true, clear: false, top: "75.2%", left: "50.2%"},
    {pos: "44", movable: false, clear: true, top: "75.2%", left: "75.2%"},
];


var clear = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true];

function clearPos() {
//    posClear[pos1] = true;
//    posClear[pos2] = false;
    console.log(clear[3]);
    console.log(clear[15]);
}

clearPos();
var x = document.getElementById("p11").style.top;
console.log(x);
console.log("aaa"+x+"bbb");
console.log(typeof(x));
document.getElementById("p11").style.top = "1.4%";
console.log(x);
}