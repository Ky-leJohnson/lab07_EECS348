function button_pressed() {
    var paragraph =  document.getElementById("paragraph");
    var brR = document.getElementById("brR").value;
    var brG = document.getElementById("brG").value;
    var brB = document.getElementById("brB").value;
    var Width = document.getElementById("bwidth").value;
    var bgR = document.getElementById("bgR").value;
    var bgG = document.getElementById("bgG").value;
    var bgB =  document.getElementById("bgB").value;

    paragraph.style.borderColor = "rgb("+ brR + "," + brG + "," + brB + ")";
    paragraph.style.borderWidth = Width + "px";
    paragraph.style.backgroundColor = "rgb(" + bgR + "," + bgG + "," + bgB + ")";


}