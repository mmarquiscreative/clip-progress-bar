

var formApp = angular.module('formApp', [])

.controller('chartController', [function ($scope, $state, resultsObj){
    var chart = this;
    
    chart.score = 0;
    
// numbers that add up to 360
    var data = [chart.score];
    
    
// colors for each section
var colors = ["#FFDAB9", "#E6E6FA", "#E0FFFF"];
    
    
    canvas = document.getElementById("piechart");
var context = canvas.getContext("2d");
/* for (var i = 0; i < data.length; i++) {
    data[i] = percentToAngle(data[i]);
    drawSegment(canvas, context, i);
}*/
    chart.update = function(){
        var newAngle = (percentToAngle(chart.score));
        console.log("update chart run");
        
    drawSegment(canvas, context, newAngle);
    }
    function percentToAngle(percentNum){
        var returnAngle = ((percentNum/100) * 360);
        return returnAngle;
    }
    
    function drawSegment(canvas, context, i) {
        // Save state for restore
        context.save();
        console.log(i);
        
        // find center of canvas
    var centerX = Math.floor(canvas.width / 2);
    var centerY = Math.floor(canvas.height / 2);
    
        // radius of circle
        radius = Math.floor(canvas.width / 2);

        // starting angle is the total of all numbers in data
    var startingAngle = degreesToRadians(270);
        
        // arc size of this section in radians
    var arcSize = degreesToRadians(i);
        
        // ending angle is the total of the two
    var endingAngle = startingAngle + arcSize;

    // begin drawing like putting the pencil tip down on the paper    
    context.beginPath();
        
    // draw first line from starting pt on circumference to center    
    context.moveTo(centerX, centerY);
        
    // draw the arc from startingAngle to endingAngle in the false direction    
    context.arc(centerX, centerY, radius, 
                startingAngle, endingAngle, false);
    
    // close the shape
        context.closePath();

    // fill color to be used with this segment
        context.fillStyle = colors[i];
        
    // actually fill the segment    
    context.fill();

    context.restore();

}
    
    function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}
    
    function sumTo(a, i) {
    var sum = 0;
    for (var j = 0; j < i; j++) {
      sum += a[j];
    }
    return sum;
}
    
    
} ])