const fs = require('fs')
const { createCanvas } = require('canvas')
// yarn add hashids
const Hashids = require('hashids');

// set your canvas width
const width = 630
const height = 630


let hashids = new Hashids('your seed phrse', 10);

let randomArray = [];


function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

for (let i = 0; i < 1000; i++) {

  let canvas = createCanvas(width, height)
  let context = canvas.getContext('2d')
  context.clearRect(0, 0, width, height)

  let text = hashids.encode(i);
  randomArray.push(text);

  context.font = '600 41pt Arial'
  context.textAlign = 'center'
  context.fillStyle = '#000'
  context.fillText(text, 322, 590)

  let buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./images/`+ text +`#1.png`, buffer)
}

console.log( 'dupes?', hasDuplicates(randomArray));




