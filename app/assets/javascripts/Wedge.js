
    
class Wedge {
    
    
  constructor(startAngle, stopAngle, shadowWedgeMultiplier, proximityBandFactor) {
      
    this.shadowWedgeMultiplier = shadowWedgeMultiplier || 2;
    this.proximityBandFactor = proximityBandFactor || 6; 
    this.completed = false;
    this.attempted = false;
    this.awake = false;
    
    this.distance = function (start,stop){
	  	    if (start <= stop){
	        return stop - start;
	    } else {
	        return stop - start + 360;
	    }  
	    
	}  // measure distance between two points on a circle
	this.isBetweenOnCircle = function(start,stop, position) {
	    start+=360;
	    start = start % 360;
	    if (start <= stop){
	        if (position >= start && position <= stop){
	            return true;
	        } else {
	            return false;
	        }
	        
	    } else {
	        if (position >= stop && position <= start){
	            return false;
	        } else {
	            return true;
	        }	        
	        
	    }
	} //test if position is between start and stop
    this.startAngle = startAngle;
    this.stopAngle = stopAngle;
    this.thickness = this.distance(startAngle,stopAngle); //wedge thickness
    this.proximityBand = Math.round(this.thickness/this.proximityBandFactor); //thickness of the band in which the user is to tap/release
    this.wedgeShape = new createjs.Shape(); 
    //this.runUpToTestWedge = (this.startAngle - shadowWedgeMultiplier * Math.abs(this.startAngle - this.stopAngle) + 360) % 360; //preventing negative values
    
    this.checkTapProximity = function(arrowRotation){
      	if (this.isBetweenOnCircle((this.startAngle - this.proximityBand + 360) % 360,this.startAngle + this.proximityBand, arrowRotation % 360) ) {
    	       return true;
	    } else{
	           return false;
	    }
    }
	this.checkReleaseProximity = function(arrowRotation){
	   if (arrowRotation % 360 > (this.stopAngle - this.proximityBand) && arrowRotation % 360 <  (this.stopAngle + this.proximityBand) ) {
	        	    //debugtext.text = (testWedgeStart - proximityBand) + " " + (testWedgeStart + proximityBand) ;
    	       return true;
	    }  else {
	      
	      return false;
	    }
	}
	this.drawWedge=function(container){
	    
	//testWedge.graphics.f(createjs.Graphics.getRGB(Math.random()*0xFFFFFF)); // assign random wedge colour
    this.wedgeColor = this.wedgeShape.graphics.f("LightSeaGreen").command;
    this.wedgeShape.graphics.beginStroke("#000");
    this.wedgeShape.graphics.setStrokeStyle(1);
    this.wedgeShape.graphics.moveTo(0,0);
    this.wedgeShape.graphics.arc(0,0,150, this.startAngle * Math.PI/180, this.stopAngle * Math.PI/180);
    this.wedgeShape.graphics.lineTo(0, 0);
    container.addChild(this.wedgeShape);
    container.setChildIndex(this.wedgeShape,2); 
	    
	    
	}
	this.shadowStartPoint = function() {
 	    return (this.startAngle - this.shadowWedgeMultiplier * this.thickness + 360 ) % 360;
	} //calculate where to start the wedge fade in
    this.normalizePosition = function(start,stop, position) {
	    if (start <= stop){
	        if (position >= start && position <= stop){
	            return (position - start)/(stop - start);
	        } else {
	            return 0;
	        }
	        
	    } else {
	        start -= 360;
	        if (position > stop){
	            position -= 360;
	        }
	        if (position >= start && position <= stop){
	            return (position - start)/(stop - start);
	        } else {
	            return 0;
	        }	        
	        
	    }
	} //normalize start...stop to 0...1 with position as a decimal
    this.shadowWedgeAlpha = function(arrowRotation){
            
        	    if (this.isBetweenOnCircle(this.shadowStartPoint(),this.startAngle,arrowRotation % 360)) {//arrow.rotation % 360 <= testWedgeStart && arrow.rotation % 360 >= runUpToTestWedge) {
        	      return this.normalizePosition(this.shadowStartPoint(),this.startAngle,arrowRotation % 360);//(arrow.rotation % 360 - runUpToTestWedge)/(testWedgeStart - runUpToTestWedge); //normalize to 0-1 values
        	    } else{
        	        return 0;
        	    }
        	    
        	    
	
  } //calculate alpha during fade-in in relation to where the arrow is
  }
	
	set color(col) {
    this.wedgeColor.style = col;
  }

	set alpha(alph) {
    this.wedgeShape.alpha=alph;
  }
  
	
}