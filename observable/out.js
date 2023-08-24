(() => {
  // observable/index.js
  function createObservableObject() {
    let observers = [];
    const observableObject = /* @__PURE__ */ Object.create(null);
    observableObject.observe = (fn) => {
      observers.push(fn);
    };
    observableObject.unobserve = (fn) => {
      observers = observers.filter((f) => f !== fn);
    };
    observableObject.notify = (...args) => {
      for (let index = 0; index < observers.length; index++) {
        const observer3 = observers[index];
        observer3(...args);
      }
    };
    return observableObject;
  }
  var observer = (...args) => console.log("hello from observer!!! ", args);
  var o1 = createObservableObject();
  o1.observe(observer);
  o1.notify("test");
  var o2 = createObservableObject();
  o2.notify("test2");
  console.log(o1, o2, o1 === o2);
  var Observable = class {
    constructor() {
      let observers = [];
      this.observe = (fn) => {
        observers.push(fn);
      };
      this.unobserve = (fn) => {
        observers = observers.filter((f) => f !== fn);
      };
      this.notify = (...args) => {
        for (let index = 0; index < observers.length; index++) {
          const observer3 = observers[index];
          observer3(...args);
        }
      };
    }
  };

  // observable/main.js
  var o = new Observable();
  var observer2 = (data) => {
    console.log("hello from observer: ", data);
  };
  o.observe(observer2);
  o.notify("hello world");
  o.unobserve(observer2);
  o.notify("hello world again");
})();
//# sourceMappingURL=out.js.map
