var group1 = document.getElementById("planet-group-1");
var group2 = document.getElementById("planet-group-2");
var group3 = document.getElementById("planet-group-3");
var button = document.getElementById("orbit");

var isOrbit = false;

function orbit_toggle() {

    if (isOrbit != true) {
        group1.innerHTML = 
        `
        <a-entity
            gltf-model="#sun"
            position="0 0 0"
            scale="3 3 3">
        </a-entity>
        <a-entity
            gltf-model="#mercury"
            position="1.2 0 0"
            scale="0.5 0.5 0.5">
        </a-entity>
        <a-entity
            gltf-model="#uranus"
            position="0 0 8"
            scale="1 1 1">
        </a-entity>

        <a-animation attribute="rotation" dur="12000" easing="linear" repeat="indefinite" to="0 360 0"></a-animation>
        `;

        group2.innerHTML = 
        `
        <a-entity
            gltf-model="#venus"
            position="2 0 0"
            scale="0.5 0.5 0.5">
        </a-entity>
        <a-entity
            gltf-model="#mars"
            position="0 0 4"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#saturn"
            position="-6 0 0"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#pluto"
            position="9 0 0"
            scale="1 1 1">
        </a-entity>

        <a-animation attribute="rotation" dur="10000" easing="linear" repeat="indefinite" to="0 360 0"></a-animation>
        `;

        group3.innerHTML = 
        `
        <a-entity
            gltf-model="#earth"
            position="0 0 -3.4"
            scale="0.6 0.6 0.6">
        </a-entity>
        <a-entity
            gltf-model="#jupiter"
            position="5 0 0"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#neptune"
            position="7 0 0"
            scale="1 1 1">
        </a-entity>

        <a-animation attribute="rotation" dur="8000" easing="linear" repeat="indefinite" to="0 360 0"></a-animation>
        `;
        isOrbit = true;
    }
    else {
        group1.innerHTML = 
        `
        <a-entity
            gltf-model="#sun"
            position="0 0 0"
            scale="3 3 3">
        </a-entity>
        <a-entity
            gltf-model="#mercury"
            position="1.2 0 0"
            scale="0.5 0.5 0.5">
        </a-entity>
        <a-entity
            gltf-model="#uranus"
            position="0 0 8"
            scale="1 1 1">
        </a-entity>
        `;

        group2.innerHTML = 
        `
        <a-entity
            gltf-model="#venus"
            position="2 0 0"
            scale="0.5 0.5 0.5">
        </a-entity>
        <a-entity
            gltf-model="#mars"
            position="0 0 4"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#saturn"
            position="-6 0 0"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#pluto"
            position="9 0 0"
            scale="1 1 1">
        </a-entity>
        `;

        group3.innerHTML = 
        `
        <a-entity
            gltf-model="#earth"
            position="0 0 -3.4"
            scale="0.6 0.6 0.6">
        </a-entity>
        <a-entity
            gltf-model="#jupiter"
            position="5 0 0"
            scale="1 1 1">
        </a-entity>
        <a-entity
            gltf-model="#neptune"
            position="7 0 0"
            scale="1 1 1">
        </a-entity>
        `;
    }

}