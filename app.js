

var formApp = angular.module('formApp', [])

.controller('chartController', ['$scope', function ($scope){
    var chart = this;
    
    chart.score = 0;
    
   chart.rotateFill = function(){
       
        
    
   
 var rotation = percentToDegree(chart.score);
       var fix_rotation = rotation * 2;
 console.log(rotation);
  document.querySelector('.circle .fill, .circle .mask.full, .circle .mask.half').style.transform = ('rotate(' + rotation + 'deg)');
       
       document.querySelector('.circle .fill.fix').style.transform = ('rotate(' + fix_rotation + 'deg)');
    };
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 180;
        return returnDegree;
    }
} ])