class Wand{
    constructor(bodyA,pointB){
      
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.wand1=loadImage("sprites/sling1.png")
    this.wand2=loadImage("sprites/sling2.png")
    this.wand3=loadImage("sprites/sling3.png")
    this.pointB=pointB;
this.wand=Constraint.create(options)
World.add(world,this.wand);
    }
    attach(body){
        this.wand.bodyA=body;
    }
    fly(){
        this.wand.bodyA=null;
    }
    display(){
        image(this.wand1,200,20);
        image(this.wand2,170,20);
        if(this.wand.bodyA){
        var pointA=this.wand.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(4);
        stroke(114, 78, 78);
        if(pointA.x<220){
            strokeWeight(7)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.wand3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(3)
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.wand3,pointA.x+25,pointA.y-10,15,30);
        }
        pop();
        }
    }
}