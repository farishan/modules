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
          const observer = observers[index];
          observer(...args);
        }
      };
    }
  };

  // atom/index.js
  var Atom = class extends Observable {
    constructor(initialValue) {
      super();
      let _value = initialValue;
      this.set = (value) => {
        _value = value;
        this.notify({
          action: "set",
          data: value
        });
        return this;
      };
      this.get = () => {
        this.notify({
          action: "get",
          data: _value
        });
        return _value;
      };
    }
  };

  // atom/main.js
  var atom = new Atom();
  var atomWatcher = (...args) => {
    console.log("atom watcher says:", args);
  };
  atom.observe(atomWatcher);
  atom.set("game is started");
  console.log(atom);
  console.log(atom.get());
  atom.set("game is stopped");
  console.log(atom.get());
  atom.unobserve(atomWatcher);
  console.log(atom.set("good bye").get());
})();
//# sourceMappingURL=out.js.map
