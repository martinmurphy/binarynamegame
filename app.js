$( document ).ready(function() {
  init();
});


function init(){
    $( ".bit" ).click(function( event ) {
        var elem = $(this);
        if(elem.text() === "0") {
            elem.text("1");
        } else {
            elem.text("0");
        }
    });
    $( "#zero" ).click(function( event ) {
        $("#bit7").text("0");
        $("#bit6").text("0");
        $("#bit5").text("0");
        $("#bit4").text("0");
        $("#bit3").text("0");
        $("#bit2").text("0");
        $("#bit2").text("0");
        $("#bit1").text("0");
        $("#bit0").text("0");
    });

    $("#add").click(function(event) {
        var nameElem = $("#name");
        var name = nameElem.text();
        var numberElem = $("#number");
        var numText = numberElem.text().replace(/\s+/g, "");
        var num = parseInt(numText,2);
        console.log("in add.click() - name: " + name + ", numText:" + numText + ", number: " + num);
        nameElem.text(name + String.fromCharCode(num));
    });
    $("#erase").click(function(event) {
        var nameElem = $("#name");
        var name = nameElem.text();
        console.log("in erase.click() - name: " + name)
        nameElem.text(nameElem.text().slice(0,-1));
    });
}
