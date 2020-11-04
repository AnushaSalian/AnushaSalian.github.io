function resetGraphs() {
    y1_graph.delete();
    y2_graph.delete();
}

function runPage1() {
    background(255);
    image(bg, 0, 0)
    stroke(0);
    fill(255);
    textStyle(BOLD);
    strokeWeight(0);

    textSize(32);

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

    spring1.initialise(k.inp, m.inp, z.inp, y.inp, _w.inp);
    spring1.update(t, factor);
    spring1.show(0, 0, 0);

    y1_graph.update(spring1.y);
    y1_graph.draw(0, 0, 255)
    y2_graph.update(spring1.y_base);
    y2_graph.draw(255, 0, 0)

    textSize(14);
    textStyle(BOLD);
    fill(231,114,43); //fill() to set the font color 
    text('ωn = ' + (spring1.wn).toFixed(3)  + " rad/s", 310, 520);
    text('η = ' + (_w.inp / spring1.wn).toFixed(3), 310, 535);
    text('z = ' + z.inp, 310, 550);

    fill(0);
    textSize(24);
    textStyle(NORMAL);
    text("Harmonic Exitation", 62.5, 495);

    k.draw();
    m.draw();
    z.draw();
    y.draw();
    _w.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
