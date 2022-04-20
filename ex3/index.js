// Load the moment package as a module
const moment = require("moment");

// Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// Compute the number of years since Nov 26 1976
console.log(moment("1976-11-26").fromNow());