
Object.entries = function* (obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield [key, obj[key]];
    }
  }
};
