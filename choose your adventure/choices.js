

var sceneData;
var currentScene = 0;
var scenes = [];

function preload() 
{
  sceneData = loadJSON('scenes.json');

}

function setup() {
  createCanvas(1200, 700);
  CreateScenesFromData(sceneData.scenes);
}

function draw() {
  background(63, 94, 2);
  scenes[currentScene].display();
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes))
  }
}


function Scene(sceneText, options, nextScenes,positions) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.positions = positions;


  this.display = function() 
  {
    fill(255);
    ellipse(this.positions, 200, 50,50);

    textSize(42);
    text(this.sceneText, 100, 100);


    for (var i = 0; i < options.length; i++) {
      text('OPTION ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
  }
}


function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}