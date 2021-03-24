const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, maxDepth = 1) {
    return arr.find((el) => Array.isArray(el))
      ? this.calculateDepth(arr.flat(1), maxDepth + 1) : maxDepth;
  }
};