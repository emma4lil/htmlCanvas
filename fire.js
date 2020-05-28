let speed = 0.2
let count = 0
let tx = 0

function Fire() {
    this.angle = (Math.random() * Math.PI * 0.2) + 1.2
    this.x = 200
    this.y = 500
    this.dx = Math.cos(this.angle) * -10
    this.dy = Math.sin(this.angle) * -17
    this.radius = 10
    this.life = (Math.random() * 10) + 1
    this.startColor = 'blue'



    this.draw = function() {
        ctx.fillStyle = 'rgba(183,71,19,' + tx + ')'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fill()
    }
    this.update = function() {
        this.draw()
        this.life += 0.30
        this.x += this.dx * speed
        this.y += this.dy * speed

        if ((count % 3000) == 0) {
            tx += 0.0005
        }
        count++

        // console.log(this.tx)

    }


}