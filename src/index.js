// const MyArray = Array;
// export default MyArray;

class MyArray {
  constructor() {
    // + добавить проверку на пустое значение - возвращать undefined
    for (let i = 0, argLength = arguments.length; i < argLength; i += 1) {
      this[i] = arguments[i];
    }

    return;
  }

  get length() {
    let counter = 0;
    for (let key in this) {
      counter = this.hasOwnProperty(key) ? counter + 1 : counter;
    }
    return counter;
  }

  *[Symbol.iterator]() {
    for (let key in this) {
      if (this.hasOwnProperty(key)) yield this[key];
    }
  }
}

// ===================== PUSH =====================
MyArray.prototype.push = function() {
  let i = 0;
  for (i = 0, argLength = arguments.length; i < argLength; i += 1) {
    this[String(this.length)] = arguments[i];
  }
  return this.length;
};

// ===================== POP =====================
MyArray.prototype.pop = function() {
  const lastItem = this[String(this.length - 1)];
  delete this[String(this.length - 1)];
  return lastItem;
};

// ===================== FROM =====================
MyArray.from = function(arrayLike, callback, thisArg) {
  const newArray = new MyArray();

  if (thisArg) {
    for (let i = 0, argLength = arrayLike.length; i < argLength; i += 1) {
      newArray[i] = callback.call(thisArg, arrayLike[i], i, arrayLike);
    }
  }

  if (callback && !thisArg) {
    for (let i = 0, argLength = arrayLike.length; i < argLength; i += 1) {
      newArray[i] = callback(arrayLike[i], i, arrayLike);
    }
  }

  if (!callback && !thisArg) {
    for (let i = 0, argLength = arrayLike.length; i < argLength; i += 1) {
      newArray[i] = arrayLike[i];
    }
  }

  return newArray;
};

// ===================== MAP =====================
MyArray.prototype.map = function(callback, thisArg) {
  const newArray = new MyArray();

  if (thisArg) {
    for (let i = 0, argLength = this.length; i < argLength; i += 1) {
      newArray.push(callback.call(thisArg, this[i], i, this));
    }
  } else {
    for (let i = 0, arrLength = this.length; i < arrLength; i++) {
      newArray.push(callback(this[i], i, this));
    }
  }

  return newArray;
};

// =================== forEach ===================
MyArray.prototype.forEach = function(callback, thisArg) {
  if (thisArg) {
    for (let i = 0, argLength = this.length; i < argLength; i += 1) {
      callback.call(thisArg, this[i], i, this);
    }
  } else {
    for (let i = 0, arrLength = this.length; i < arrLength; i++) {
      callback(this[i], i, this);
    }
  }
  return undefined;
};

// =================== REDUCE ====================
MyArray.prototype.reduce = function(callback, initValue) {
  // + проверка, чтобы аргумент был функцией, и только один
  // + как поступает оригинальный REDUCE, когда не может обработать элемент
  let accumulator = initValue ? initValue : 0;
  const arrLength = this.length;
  if (arrLength > 0) {
    for (let i = 0; i < arrLength; i++) {
      console.log(i);
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

// ===================== FILTER =====================
MyArray.prototype.filter = function(callback, thisArg) {
  const newArray = new MyArray();

  if (thisArg) {
    for (let i = 0, argLength = this.length; i < argLength; i += 1) {
      if (callback.call(thisArg, this[i], i, this)) newArray.push(this[i]);
    }
  } else {
    for (let i = 0, arrLength = this.length; i < arrLength; i++) {
      if (callback(this[i], i, this)) newArray.push(this[i]);
    }
  }

  return newArray;
};

// =================== SORT ===================
MyArray.prototype.sort = function(callback) {
  let arrLength = this.length;
  let buffer = this[String(0)];

  switch (callback) {
    case undefined:
      for (let j = 0; j < arrLength; j++) {
        let flag = 0;

        for (let i = 0; i < arrLength - 1; i++) {
          if (String(this[i]) > String(this[String(i + 1)])) {
            buffer = this[i];
            this[i] = this[String(i + 1)];
            this[String(i + 1)] = buffer;
            flag++;
          }
        }
        if (flag == 0) break;
      }
      return this;
      break;

    default:
      for (let j = 0; j < arrLength; j++) {
        let flag = 0;

        for (let i = 0; i < arrLength - 1; i++) {
          if (callback(this[i], this[String(i + 1)]) < 0) {
            buffer = this[i];
            this[i] = this[String(i + 1)];
            this[String(i + 1)] = buffer;
            flag++;
          }
        }
        if (flag == 0) break;
      }
      return this;
  }
};

// ===================== toString =====================
MyArray.prototype.toString = function() {
  const arrLength = this.length;
  if (arrLength === 0) return "";

  let newString = String(this[String(0)]);
  for (let i = 1; i < arrLength; i++) {
    newString = newString + "," + this[i];
  }

  return newString;
};

export default MyArray;
