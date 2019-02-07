document.getElementById("p34").onclick = function() {
    this.style.transition = "all 0.4s";
    this.style.left = "75.2%";
    this.style.top = "75.2%";
    var x = document.getElementById("p44");
    x.id = this.id;
    console.log(x.id);
    this.id = "p44";
    console.log(this.id);
    x.style.top = "50.2%";
    x.style.left = "75.2%";
}

document.getElementById("p44").onclick = function() {
    this.style.transition = "all 0.4s";
    this.style.left = "75.2%";
    this.style.top = "50.2%";
    var x = document.getElementById("p34");
    x.id = this.id;
    console.log(x.id);
    this.id = "p34";
    console.log(this.id);
    x.style.top = "75.2%";
    x.style.left = "75.2%";
}