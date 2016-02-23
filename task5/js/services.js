var taskServices = angular.module('taskServices', []);


taskServices.service('shareService', function() {
  this.text1="text1";
  this.text2="text2";

  this.setText1 = function(text1) { this.text1 = text1 }; 
  this.getText1 = function() { return this.text1 }; 

  this.setText2 = function(text2) { this.text2 = text2 }; 
  this.getText2 = function() { return this.text2 };   
  
});