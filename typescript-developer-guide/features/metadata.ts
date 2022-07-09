import "reflect-metadata";

// Reflect.defineMetadata("note", "hi", plane);
// Reflect.defineMetadata("apple", "delicious", plane);
// Reflect.defineMetadata("water", "cool", plane);

// const note = Reflect.getMetadata("note", plane);
// const apple = Reflect.getMetadata("apple", plane);

// console.log(note);
// console.log(apple);

// Reflect.defineMetadata("note", "hi", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");

// console.log(note);
@controller
class Plane {
  color: string = "red";
  @get("heyhey")
  fly(): void {
    console.log("vrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);

    router.get(path, middleware, target.prototype[key]);
  }
}
