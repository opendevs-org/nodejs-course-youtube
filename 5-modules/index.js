/** Module in NodeJS?
 * Module in Node. js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node. js application.
 * Each module in Node. js has its own context, so it cannot interfere with other modules or pollute global scope. (IIFE pattern) -> Before code execute nodejs wraps with function wrapper to provide module scope
 * In NodeJs, each file is treated as separate module.
 */

/** Types of Modules?
 * Local modules - Modules that we create in our app.
 * Built-In modules - Modules that NodeJs ship with out of box.
 * Third Party modules - Modules written by other developer.
 */


// Local Modules

console.log('Local Module - 1')
require('./math1.js')

console.log('Local Module - 2')
const math2 = require('./math2');
console.log(math2(5))
// console.log(module);

console.log('Local Module - 3')
const math3 = require('./math3');
const { square, cube } = math3;
console.log(square(5))
console.log(cube(5))

/** CommonJS vs ESM
 * Node.js supports the CommonJS module format by default. CommonJS modules load using require(), and variables and functions export from a CommonJS module with "module.exports".
 * The ES module format is the official standard format to package JavaScript code for reuse and most modern web browsers natively support the modules.
 * The ES module format was introduced in Node.js v8.5.0 as the JavaScript module system was standardized. Being an experimental module, the --experimental-modules flag was required to successfully run an ES module in a Node.js environment. However, starting with version 13.2.0, Node.js has stable support of ES modules.
 */
