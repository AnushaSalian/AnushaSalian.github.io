function clearMe() {
    magFac.graphs = [];
   // phaseAng.graphs = [];
}

function runPage2() {
    background(255);
    image(bg, 0, 0);

    stroke(0);
    fill(255);
    textStyle(BOLD);

    push();
    textSize(36);
    textFont("Century Gothic")
    text('BASE EXCITATION', 255, 50);

    textSize(16);
    text("VARIABLES", 655, 108.5);
    text("CONTROLS", 655, 418.5);
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
    textStyle(BOLD);
    fill(231,114,43); //fill() to set the font color 
    text('ωn = ' + (spring1.wn).toFixed(3) + " rad/s", 310, 520);
    text('η = ' + (_w.inp / spring1.wn).toFixed(3), 310, 535);
    text('z = ' + z.inp, 310, 550);

    magFac.draw();
    //phaseAng.draw();

    button3.draw()

    k.draw();
    m.draw();
    z.draw();
    _w.draw();
    y.draw();

    clear.mousePressed(clearMe)
}
