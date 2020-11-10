// canvas
let width = 800;
let height = 600;
let w = 10;
let h = 10;

// counter
let t = 0.05;
let dt = 0.005;

// system
let spring1;

// graphs
let position_graph;
let force_graph;
let magFac;
//let phaseAng;
let relTrans;

// inputs
let y;
let _w;
let k;
let m;
let z;

// factor
let factor = 1;

// images
let img;
let button1;
let button2;
let button3;
let button4;
let spr;
let fwd;

// pages
let page1 = true;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// button
let clear;

function preload() {
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/graphbutton.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    fwd = loadImage("images/bluefwddulls.png");
}

function setup() {
    textFont("Century Gothic");
    fill(0);
    textStyle(NORMAL);

    createCanvas(width, height);
    spring1 = new System(170, 230, 180, 50);

    y1_graph = new Graph(345, 200, 80, 220, "Output x", "t");
    y2_graph = new Graph(345, 380, 80, 220, "Input Ysin(ωt)", "t");

    magFac = new DynamicGraph(125, 430, 230, 290, "Transmissibility", "n", 0, 2.5, 0, 7.5, System.mag_func);
    //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);
    relTrans = new DynamicGraph(125, 460, 220, 290, "Relative Transmissibility", "n", 0, 2.5, 0, 7.5, System.rel_trans);

    k = new NumberInput(620, 150, "Stiffness(N/m)", 8000, 999000, 20000, 0.5, true);
    m = new NumberInput(620, 200, "Mass(kg)", 2, 200, 32, 0.5, true);
    z = new NumberInput(620, 253, "Damping Ratio", 0.01, 1.00, 0.07, 0.01, true);
    y = new NumberInput(620, 300, "Exitation Magn-\nitude (m)", 0, 25, 20, 0.5, false);
    _w = new NumberInput(620, 350, "Exitation Freq-\nuency (rad/s)", 1, 800, 50, 0.5, false);

    button1 = new Button(645, 450, pause)
    button2 = new Button(711, 450, graph);
    button3 = new Button(645, 460, back);
    button4 = new Button(711, 460, fwd);
}

function draw() {

    if (page1) {
        runPage1();
    }

    if (page2) {
        runPage2();
    }

    if (page3) {
        runPage3();
    }
}

function mousePressed() {
    handleEvents();
}
