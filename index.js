window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = innerWidth;
    const height = innerHeight;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
    );

    camera.position.set(0, 0, 1000);

    const geometry = new THREE.BoxGeometry(500,500,500);

    const material = new THREE.MeshStandardMaterial({
        color: 'rgb(20, 20,20)'
    });

    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    const light = new THREE.PointLight(0xFFFFFF, 3, 1000, 1.0);
    scene.add(light);

    const mouse = new THREE.Vector2();

    document.addEventListener("mousemove", (event) => {
        mouse.x =event.clientX-width/2;
        mouse.y = -event.clientY+height/2;

        light.position.set(mouse.x, mouse.y, 800);
    });

    tick();

    function tick() {
        requestAnimationFrame(tick);
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
}