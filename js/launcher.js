class launcher {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.02,
            length : 50
        }
        this.launcher = new Constraint.create (options);
        World.add(world,this.launcher);
    }

    display () {
        if(this.launcher.bodyA != null){
            var point1 = this.launcher.bodyA.position;
            var point2 =  this.launcher.pointB;
            strokeWeight(5);
            line(point1.x,point1.y,point2.x,point2.y);

        }
        
    }

    fly()  {

     this.launcher.bodyA = null;

    }

    attach(body) {

        this.launcher.bodyA = body;
      }
  }