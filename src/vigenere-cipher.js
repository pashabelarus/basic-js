const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let x = 0;
    let y = '';
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        
        y += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(x % key.length) - 130) % 26 + 65);
        x++;
      }
      else y += message[i];
    }
    if (this.direction) return y;
    else return y.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let x = 0;
    let y = '';
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        y += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(x % key.length)) % 26 + 65);
        x++;
      }
      else y += message[i];
    }
    if (this.direction) return y;   
    else return y.split('').reverse().join('');
  }
  }

module.exports = VigenereCipheringMachine;
