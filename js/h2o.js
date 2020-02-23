var oxygen = document.getElementById("oxygen-marker"),
    hydrogen = document.getElementById("hydrogen-marker")

oxygen.addEventListener("markerFound", (e)=> {
    console.log("yes");

    if (hydrogen.object3D.visible == true) {
        console.log("no");
    }
});

hydrogen.addEventListener("markerFound", (e)=> {
    console.log("yes");

    if (oxygen.object3D.visible == true) {
        console.log("no");
    }
});