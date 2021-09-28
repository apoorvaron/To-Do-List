// jshint esversion:6
// console.log(module);
// module.exports = "hiii ";
module.exports.getDate = getDate;
function getDate() {
  var today = new Date();
  var options = {
    weekdate: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
}

module.exports.getDay = getDay;
function getDay() {
  var today = new Date();
  var options = {
    weekdate: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
console.log(module.exports);
