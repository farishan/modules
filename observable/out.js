(() => {
  // observable/index.js
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
          const observer2 = observers[index];
          observer2(...args);
        }
      };
    }
  };

  // observable/main.js
  var o = new Observable();
  var observer = (data) => {
    console.log("hello from observer: ", data);
  };
  o.observe(observer);
  o.notify("hello world");
  o.unobserve(observer);
  o.notify("hello world again");
})();
//# sourceMappingURL=out.js.map
