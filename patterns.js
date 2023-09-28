/** Factory pattern **/
/* The Factory pattern is a creational pattern 
   that provides an interface for creating objects but also 
   allows subclasses to alter the type of objects that will be created.
*/
function createShape(type) {
  if (type === "circle") {
    return new Circle();
  } else if (type === "square") {
    return new Square();
  }
}

// Circle and Square constructors
class Circle {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square {
  draw() {
    console.log("Drawing a square");
  }
}

// Usage
const myCircle = createShape("circle");
const mySquare = createShape("square");

myCircle.draw(); // Output: Drawing a circle
mySquare.draw(); // Output: Drawing a square

/** Adapter pattern **/
/* The Adapter pattern is a structural pattern
 *  that allows the interface of an existing class to be used as another interface.
 *  It is often used to make existing classes work with others without modifying their source code.
 */

// OldAudio class
class OldAudio {
  play() {
    console.log("Playing audio using the old API");
  }
}

// ModernAudio class
class ModernAudio {
  playAudio() {
    console.log("Playing audio using the modern Web Audio API");
  }
}

// AudioAdapter class
class AudioAdapter {
  constructor(oldAudio) {
    this.oldAudio = oldAudio;
  }

  playAudio() {
    this.oldAudio.play();
  }
}

// Usage
const audio = new ModernAudio();
const adaptedAudio = new AudioAdapter(new OldAudio());

audio.playAudio(); // Output: Playing audio using the modern Web Audio API
adaptedAudio.playAudio(); // Output: Playing audio using the old API
