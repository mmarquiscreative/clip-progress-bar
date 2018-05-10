

var formApp = angular.module('formApp', [])

.controller('chartController', ['$scope', function ($scope){
    var chart = this;
    
    chart.score = 0;
    
   chart.rotateFill = function(){
       
        
    
   
      var fillRotation = 0;
       var halfRotation = 0;
        var rotation = percentToDegree(chart.score);
       
       if(rotation >= 180){
           fillRotation = 180;
           halfRotation = (rotation - 180);
       } else {
           fillRotation = rotation;
       };

       
       

       
       console.log(rotation);
       console.log(fillRotation);
       console.log(halfRotation);
       
       
  document.querySelector('.circle .fill').style.transform = ('rotate(' + fillRotation + 'deg)');
       
       // negative
      //  document.querySelector('.mask.full').style.transform = ('rotate(' + rotation + 'deg)');
       
       // positive
       document.querySelector('.mask.half').style.transform = ('rotate(' + halfRotation + 'deg)');
       
       //document.querySelector('.circle .fill.fix').style.transform = ('rotate(' + fix_rotation + 'deg)');
    };
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 360;
        return returnDegree;
    }
} ])