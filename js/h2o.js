var oxygen = document.getElementById("oxygen-marker"),
    hydrogen = document.getElementById("hydrogen-marker"),
    button = document.getElementById("combine");


function activate_button() {
    button.disabled = false;

    button.addEventListener("onkeyup", (e)=> {
        console.log("fuck my ass!");
    });
}

oxygen.addEventListener("markerFound", (e)=> {

    while (hydrogen.object3D.visible == true) {
        activate_button();
    }
    button.disabled = true;
});

hydrogen.addEventListener("markerFound", (e)=> {
    
    while (oxygen.object3D.visible == true) {
        activate_button();
    }
    button.disabled = true;
});


