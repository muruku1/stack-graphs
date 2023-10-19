  let Foo = class {
    constructor() {
      this.bar = 5;
    }
  };

  let x = new Foo();
  x.bar;
//  ^ defined: 3

let Bar = class {
  constructor(x) {
    this.field = x;
  }
}

let bar = new Bar({ baz: 5 });
bar.field.baz
//        ^ defined: 17
