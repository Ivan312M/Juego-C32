class Floor {
    constructor(x, y, w, h){
      let option = {
          isStatic: true
      };
      this.body = Bodies.rectangle(x, y, w, h, option);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
    show(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148, 127, 146);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
        
    }
}