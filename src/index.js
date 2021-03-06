class MyArray {
  constructor(...arr) {
    if (arr.length === 1 && typeof arr[0] === 'string') {
      this[0] = arr[0];
      this.length = arr.length;
    }
    else if (arr.length === 1) {
      for (let i = 0; i < arr[0]; i++) {
        this[i] = undefined;
      }
      this.length = arr[0];
    } else {
      for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
      }
      this.length = arr.length;
    }
  }

  push(...arr) {
    for (let i = 0; i < arr.length; i++) {
      this[this.length] = arr[i];
      this.length += 1;
    }

    return this.length;
  }

  toString() {
    let resultString = '';

    for (let i = 0; i < this.length - 1; i++) {
      resultString = `${resultString} + ${this[i]} + ', '`;
    }

    return resultString;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      const lastItem = this[this.length - 1];
      delete this[this.length - 1];
      this.length = this.length - 1;
      return lastItem;
    }
  }

  static from(args) {
    const newArray = new MyArray();

    for (let i = 0; i < args.length; i++) {
      newArray.push(args[i]);
    }
    return newArray;
  }

  map(callback) {
    const newArray = new MyArray();

    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  reduce(callback, startValue) {
    let accum = null;

    if (startValue === undefined) {
      accum = this[0];
    } else {
      accum = callback(startValue, this[0], 0, this);
    }

    for (let i = 1; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  }

  filter(callback, thisArg) {
    const newArr = new MyArray();

    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  }

  sort(callback) {
    const mas = this;
    let max = null;

    if (arguments.length === 1 && typeof callback === 'function') {
      for (let i = 0; i < mas.length - 1; i++) {
        for (let j = 0; j < mas.length - 1; j++) {
          if (!(callback(mas[j], mas[j + 1]) <= 0)) {
            max = mas[j];
            mas[j] = mas[j + 1];
            mas[j + 1] = max;
          }
        }
      }
    } else if (arguments.length === 0) {
      for (let i = 0; i < mas.length - 1; i++) {
        for (let j = 0; j < mas.length - i; j++) {
          if (
            !(String(mas[j]) > String(mas[j + 1]) &&
            callback(mas[j], mas[j + 1]) <= 0)) {
            max = mas[j];
            mas[j] = mas[j + 1];
            mas[j + 1] = max;
          }
        }
      }
    }
    return mas;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }
}


export default MyArray;