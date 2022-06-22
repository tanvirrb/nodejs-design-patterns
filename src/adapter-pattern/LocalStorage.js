var { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {
  constructor() {
    if (existsSync(`${__dirname}/localStorage.json`)) {
      console.info('Loading items from localStorage.json');
      const txt = readFileSync(`${__dirname}/localStorage.json`);
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile(
      `${__dirname}/localStorage.json`,
      JSON.stringify(this.items),
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  }

  clear() {
    this.items = {};
    unlink(`${__dirname}/localStorage.json`, () => {
      console.info('localStorage file removed');
    });
  }
}

module.exports = new LocalStorage();
