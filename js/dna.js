var parts = document.getElementById("parts-marker"),
    helix = document.getElementById("helix-marker"),
    button = document.getElementById("combine");


function combine_molecules() {
    if (helix.object3D.visible == true) {
        if (parts.object3D.visible == true) {

            parts.innerHTML = "";
            helix.innerHTML = `
                <a-entity
                    gltf-model="#DNA"
                    position="0 0.3 0"
                    scale="3 3 3">
                    <a-animation attribute="rotation" dur="20000" easing="linear" repeat="indefinite" to="0 360 0"></a-animation>
                </a-marker>
            `;
        }
    }
}