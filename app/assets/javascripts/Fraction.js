class Fraction {

constructor(num, den, x, y) {

    var top = new createjs.Text(num, "Bold 16px Arial", "Black");
    top.textAlign = "center";
    top.x = 0;
    top.y = -9;
    var middle = new createjs.Text("-", "Bold 16px Arial", "Black");
    middle.textAlign = "center";
    middle.scaleX = 2 * den.toString().length;
    middle.x = 0;
    middle.y = 0;
    var bottom = new createjs.Text(den, "Bold 16px Arial", "Black");
    bottom.textAlign = "center";
    bottom.x = 0;
    bottom.y = 12;
    var frCont = new createjs.Container();
    frCont.addChild(top, middle, bottom);
    frCont.x = x;
    frCont.y = y;
    return frCont;

    // Container.addChild(number, frCont);
    // stage.addChild(Container);
    // stage.update();
}


};