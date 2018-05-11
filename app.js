

var formApp = angular.module('formApp', [])

.controller('chartController', ['$scope', function ($scope){
    var chart = this;
    
    chart.score = 0;
    chart.testRotate = 180;
   /*document.querySelector('.mask.full .fill').style.cssText = ('-webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180);');*/
       
       
       chart.fillRotation = 'rotate(0deg)';
    chart.halfRotation= 'rotate(0deg)';
   chart.rotateFill = function(){

      var fillRotation = 0;
       var halfRotation = 0;
        var rotation = percentToDegree(chart.score);
       
       if(rotation >= 180){
           chart.fillRotation = 'rotate(' + 180 + 'deg)';
           chart.halfRotation = 'rotate(' + (rotation - 180) + 'deg)';
       } else {
           chart.fillRotation = 'rotate(' + rotation + 'deg)';
           chart.halfRotation = 'rotate(0deg)';
       };
       

       
       console.log('base rotation: ' + rotation);
       console.log('fill rotation: ' + fillRotation);
       console.log('halfRotation: ' + halfRotation);
              console.log(document.querySelector('.fill').style);

       console.log(angular.element(document.querySelector('.mask.half'))[0].style);
       
       // positive
       
  // document.querySelector('.fill').style.cssText = ('-webkit-transform: rotate(' + fillRotation + 'deg); -ms-transform: rotate(' + fillRotation + 'deg); transform: rotate(' + fillRotation + ');');
       
       
       // document.querySelector('.mask.half').style.cssText = ('-webkit-transform: rotate(' + halfRotation + 'deg); -ms-transform: rotate(' + halfRotation + 'deg);        transform: rotate(' + halfRotation + 'deg);');
       
       /*angular.element(document.querySelector('.mask.half'))[0].style.cssText = ('-webkit-transform: rotate(' + halfRotation + 'deg); -ms-transform: rotate(' + halfRotation + 'deg);        transform: rotate(' + halfRotation + 'deg);'); */
       // negative
      //  document.querySelector('.mask.full').style.transform = ('rotate(' + rotation + 'deg)');
       
       
       //document.querySelector('.circle .fill.fix').style.transform = ('rotate(' + fix_rotation + 'deg)');
    };
    function percentToDegree(percentNum){
        var returnDegree = (percentNum/100) * 360;
        return returnDegree;
    }
} ])