var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  this.medicalIssue = medicalIssue;

}


Doctor.prototype.getDoctors = function(medicalIssue, listDoctors) {
  var medicalIssue = this.medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     var medics = response.data;
     listDoctors(medicalIssue, medics);
     console.log(response);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;



// 08b0839620e548c802aa07e96f29fb1c
