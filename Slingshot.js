class SlingShot {
	constructor(bodyA,bodyB){
	var options = {
	bodyA : bodyA,
    bodyB : bodyB,
    stiffness:0.04,
    length: 10,
	}

	this.sling1
	this.sling = Constraint.create(options);
	World.add(world, this.sling);

	}
}

function display(){
	var pointA = this.sling.bodyA.position;
	var pointB = this.sling.bodyB.position;
	strokeWeight(4);
	if(pointA.x < 220) {


	line(pointA.x-20, pointA.y , pointB.x ,pointB.y);
	line(pointA.x-20 , pointA.y,pointB.x,pointB.y - 5);
	
}
else {
	line(pointA.x + 25,pointA.y,pointB.x-25, pointB.y);
	line(pointA.x + 25,pointA.y,pointB.x-25,pointB.y-5);


pop();

}
}



