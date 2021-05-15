class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.2,
        
           
        }
        this.ra = 10;
        this.body = Bodies.circle(x, y, this.ra, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.ra,this.ra);
        pop();
    }

};