export default class Dudes {
    constructor(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 64;
        this.height = 96;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY = (Math.random() * 3) - 1.5;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,0,0.3)';
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fill();
        ctx.stroke();
    }

    update(canvas, ctx) {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x + this.width/2 >= canvas.width ||
            this.x - this.width/2 <= 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.height >= canvas.height+this.height/2 ||
            this.y + this.height <= this.height/2) {
            this.speedY = -this.speedY;
        }
        this.draw(ctx);
    }

}