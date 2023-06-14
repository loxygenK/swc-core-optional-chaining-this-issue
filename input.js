function returnThis() {
  return this;
}

const obj = {
  b: {
    c: returnThis
  }
}

console.log(obj?.b.c())