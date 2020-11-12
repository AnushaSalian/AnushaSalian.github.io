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

    spring1.initialise(k.inp, m.inp, z.inp, y.inp, _w.inp);
    spring1.update(t, factor);
    spring1.show(0, 0, 0);

    y1_graph.update(spring1.y);
    y1_graph.draw(0, 0, 255)
    y2_graph.update(spring1.y_base);
    y2_graph.draw(255, 0, 0)

    textSize(14);
    fill(231,114,43); //fill() to set the font color 
    textStyle(BOLD);
    text('ω = ' + (spring1.wn).toFixed(3) + " rad/s", 310, 520);
    text('ψ = ' + (_w.inp / spring1.wn).toFixed(3), 310, 535);
    text('z = ' + z.inp, 310, 550);

    textSize(16);
    fill(0);
    textStyle(BOLD);
    text("Harmonijska prinudna sila", 70, 495);

    k.draw();
    m.draw();
    z.draw();
    y.draw();
    _w.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
