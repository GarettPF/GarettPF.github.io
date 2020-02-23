var oxygen = document.getElementById("oxygen-marker"),
    hydrogen = document.getElementById("hydrogen-marker"),
    button = document.getElementById("combine");


function combine_molecules() {
    if (hydrogen.object3D.visible == true) {
        if (oxygen.object3D.visible == true) {

            hydrogen.innerHTML = "";
            oxygen.innerHTML = `
                <a-entity
                    gltf-model="#molecule"
                    position="0 1.5 0"
                    scale="2 2 2">
                    <a-animation attribute="rotation" dur="5000" easing="linear" repeat="indefinite" to="0 360 0"></a-animation>
                </a-marker>
            `;

            
        }
    }
}