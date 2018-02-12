class Fraction {

constructor(num, den) {
    var top = new createjs.Text(num, "Bold 13px Arial", "#494949");
    top.textAlign = "center";
    top.x = 0;
    top.y = -7;
    var middle = new createjs.Text("-", "Bold 13px Arial", "#494949");
    middle.textAlign = "center";
    middle.scaleX = 2 * den.toString().length;
    middle.x = 0;
    middle.y = 0;
    var bottom = new createjs.Text(den, "Bold 13px Arial", "#494949");
    bottom.textAlign = "center";
    bottom.x = 0;
    bottom.y = 10;
    var frCont = new createjs.Container();
    frCont.addChild(top, middle, bottom);
    
    return frCont;

    // Container.addChild(number, frCont);
    // stage.addChild(Container);
    // stage.update();
}

   
    
}