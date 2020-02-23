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
                    position="0.4 0.7 -1"
                    scale="2 2 2">
                </a-marker>
            `;
        }
    }
}