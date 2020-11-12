function clearMe() {
    magFac.graphs = [];
    //phaseAng.graphs = [];
    relTrans.graphs = [];
}

function runPage3() {
    background(255);
    image(bg, 0, 0);

    stroke(0);
    stroke(0);
    fill(255);
    textStyle(BOLD);

    push();
    textSize(36);
    textFont("Century Gothic");
    text('KINEMATSKA POBUDA', 210, 50);

    textSize(16);
    text("KONTROLA", 647.5, 420); //controls
    text("PROMENLJIVE", 642.5, 110); //variables
    pop();

    push();
    stroke(0, 100);
    for (let i = 20; i < 591; i++) {
        point(i, 505);
        i += 4;
    }
    for (let i = 510; i < 570; i++) {
        point(300, i);
        i += 4;
    }
    pop();

    textSize(14);
    fill(231,114,43); //fill() to set the font color 
    textStyle(BOLD);
    text('ω = ' + (spring1.wn).toFixed(3) + " rad/s", 310, 520);
    text('ψ = ' + (_w.inp / spring1.wn).toFixed(3), 310, 535);
    text('z = ' + z.inp, 310, 550);

    //magFac.draw();
    relTrans.draw();

    button3.draw();
    //button4.draw();

    k.draw();
    m.draw();
    z.draw();
    _w.draw();
    y.draw();

    push();
    strokeWeight(7.5);
    point(395, 250);
    strokeWeight(0)
    fill(0);
    textStyle(NORMAL);
    text("Vrednost frekv. Odnosa", 405, 255)
    pop();

    clear.mousePressed(clearMe);
}
