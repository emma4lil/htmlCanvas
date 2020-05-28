console.log('Running...');
let width
let height

function resizeCanvas() {
    setTimeout(function() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        mouseX = canvas.width / 2;
        mouseY = canvas.height * 0.8;
        ctx.globalCompositeOperation = "lighter"
    }, 0);
}

let fire = new Fire()
let particles = []
setInterval(function(){
    
    for (var i = 0; i < 40; i++) {
        const fire = new Fire()
        particles.push(fire)
    }
    
}, 10)

let ctx

function init() {
    let canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    resizeCanvas()
    ctx.globalCompositeOperation = "xor"
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, width, height)

    particles.forEach(function(p, index) {
        if (p.life >= 20) {
            particles.splice(index, 2)
        } else {
            p.update()
        }

    })

}

init()
animate()