(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "08b0839620e548c802aa07e96f29fb1c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.getDoctors = function(medicalIssue, listDoctors) {
  // var medicalIssue = this.medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
     console.log(JSON.stringify(response));
    // console.log(response.data);
    listDoctors( medicalIssue, response);

  })
  .fail(function(error){
    console.log("fail");
  });
};

exports.doctorModule = Doctor;



// 08b0839620e548c802aa07e96f29fb1c

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var listDoctors = function(medicalIssue, docData) {
  console.log(docData);
$('#doctor').text(medicalIssue + docData + "hi");
};

$(document).submit(function(event) {
  event.preventDefault();

  var medicalIssue = $("#input").val();
  var newDoctor = new Doctor(medicalIssue);

  newDoctor.getDoctors(medicalIssue, listDoctors);
});

},{"./../.env":1,"./../js/doctor.js":2}]},{},[3]);
