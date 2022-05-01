const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
import style from './main.css'
const agents = [];
const ripples = [];
let pondcolor = 'blue'
let dotsmove='on'
const pond = document.getElementById('pond')
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const canvas2 = document.getElementById('canvas2')
const context2 = canvas2.getContext('2d')
const canvasHeight = pond.clientHeight;
const canvasWidth = pond.clientWidth;
let fpsInterval
let then;
let now
let startTime
let elapsed
let mouseEnter = 'off'
let mousePos = {x:0, y:0}
import gsap from "gsap";
import $ from "./Jquery"
let lure ='on'
let rippleTrottle='on'
let lureSelection = 'off'

const presentationInformation=[
{
title:'HelpDesk',
pages:[
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
]
},
{
title:'HelpDesk',
pages:[
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
]
},
{
title:'HelpDesk',
pages:[
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
]
},
{
title:'HelpDesk',
pages:[
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
]
},
{
title:'HelpDesk',
pages:[
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
{title:"tasks",
description:"ddfd",
image:''
},
]
},
]
//  gsap.to(teaset.children[8].rotation,{duration:1,x:Math.PI*.25})
//    gsap.to(teaset.children[8].position,{duration:1,z:1.5})
//    gsap.to(teaset.children[8].position,{duration:1,y:.4})

function getMousePos(canvas2, evt) {
// console.log("gettingmouse pos")
  var rect = canvas.getBoundingClientRect();
	// console.log(rect)
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };

}


function initPebbles(){
$('.foodContainer').html('')
for (var i=0; i<presentationInformation.length; i++){
castPebbles(i)
}
}

const castPebbles = (i)=>{
let pebbleContainer = $('<div>')
pebbleContainer.addClass('pebblecontainer')

let pebbleColor ='#'+ Math.floor(Math.random()*16777215).toString(16);
pebbleContainer.attr('name', i)
pebbleContainer.css('background-color', pebbleColor)
$('.foodContainer').append(pebbleContainer)
}
initPebbles()


function pebbleFollow(event){
var selectedPebbles = $('.picked');

if(selectedPebbles.length>0){

$(selectedPebbles[0]).css("top", event.clientY+30)
$(selectedPebbles[0]).css('left', event.clientX+30)


}

}
$('body').on('mousemove',(event)=>{
console.log('mouae move')
pebbleFollow(event)

})


function selectPebble(event){
lureSelection='on';
var currentPebble = event.target;
let height = $(currentPebble).innerHeight();
let width = $(currentPebble).innerWidth()
// console.log(height)
// console.log(width)
console.log($(event.target))
$(currentPebble).css("top", event.clientY+30)
$(currentPebble).css('left', event.clientX+30)
$(currentPebble).css("animation",'raise .3s both');

setTimeout(() => {
$(currentPebble).css('height', height+'px')
$(currentPebble).css('width', width+ 'px')
$(currentPebble).addClass("picked")
}, 300);


}
$('body').on('click','.pebblecontainer',(event)=>{
console.log('select pebble')
selectPebble(event)

})

const movePixles=(e)=>{
mousePos = getMousePos(canvas, e)

for (let i = 0; i < agents.length; i++) {
	const agent = agents[i];
const dist = agent.getDistance(mousePos);
	if (dist > 200) continue;
		agent.moveBit()
		}	
}





canvas.height=canvasHeight;
canvas.width=canvasWidth;

canvas2.height=canvasHeight;
canvas2.width=canvasWidth;

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true
};


class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getDistance(v) {
		const dx = this.x - v.x;
		const dy = this.y - v.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
}


class ripple{

constructor(x, y) {
		this.pos = new Vector(x, y);
		this.radius = 2;
		this.lifeSpan = 0;
	}

draw() {
		console.log(context)
		console.log(ripples)
		context2.save();
		context2.translate(this.pos.x, this.pos.y);
		context2.fillStyle ="rgba(0,0,0,.2)";


		context2.lineWidth=1;

		context2.beginPath();
		context2.arc(0, 0, this.radius, 0, Math.PI * 2);
		context2.stroke();
		// context2.fill();
		context2.restore();
}

count(){
this.lifeSpan+=1
}

grow() {

this.radius+=1

}

}


function 
createRipple(){
if (rippleTrottle == "on"){
var rip = new ripple(mousePos.x, mousePos.y)
ripples.push(rip)
rippleTrottle='off'
setTimeout(() => {
rippleTrottle='on'	
}, 300);
}
}



function rippleGrow(){

for(let i=0; i<ripples.length;i++){
console.log(i)
console.log(agents)
ripples[i].grow();
ripples[i].draw();
}
}

class Agent {
	constructor(x, y, fillStyle) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
		this.radius = random.range(4, 12);
		this.fillStyle = fillStyle
	}

	bounce(width, height) {
		if (this.pos.x <= 0 || this.pos.x >= width)  this.vel.x *= -1;
		if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
	}

	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	
	}

	draw(context) {
		context.save();
		context.translate(this.pos.x, this.pos.y);

		context.lineWidth = 4;
		context.fillStyle=this.fillStyle
		context.beginPath();
		context.arc(0, 0, this.radius, 0, Math.PI * 2);
 		context.stroke();
		context.fill()

		context.restore();
	}


    stalk(mousePos){
		var random1 = random.range(-150, 150)
		var random2 = random.range(-150, 150)
		gsap.to(this.pos,{duration:.75,x:mousePos.x+random1, y:mousePos.y+random2})


		// this.pos.x = mousePos.x+random1
		// this.pos.y = mousePos.y+random2;
	
   }
	 shake(){
		var random1 = random.range(-.1, .1)
		var random2 = random.range(-.1, .1)
		this.pos.x = mousePos.x+random1
		this.pos.y = mousePos.y+random2;
   }
}

const animate = () => {
	// console.log('domestika');
	requestAnimationFrame(animate);
};

const stalk=(e)=>{
mousePos = getMousePos(canvas, e)

if(lure=='on'&&lureSelection=='on'){
		lure='off'

for (let i = 0; i < agents.length; i++) {
	const agent = agents[i];
     agent.stalk(mousePos)
		}
	setTimeout(() => {
			lure='on'
		}, 50);
		}	
}

pond.addEventListener('mouseover', ()=>{mouseEnter="on"})
pond.addEventListener('mousemove', (event)=>{
stalk(event);
createRipple();

})

// animate();

const sketch = (width, height ) => {

	for (let i = 0; i < 40; i++) {
		const x = random.range(0, width);
		const y = random.range(0, height);
		const color ='#'+ Math.floor(Math.random()*16777215).toString(16);
		agents.push(new Agent(x, y, color));
	}

};
sketch(settings.dimensions[0],settings.dimensions[1])


function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    tick();
}

const tick = () =>{
if(ripples.length>0){
context2.clearRect(0, 0, canvas.width, canvas.height);

for(let i = 0; i<ripples.length;i++){
if(ripples[i].lifeSpan<200){
ripples[i].count()
ripples[i].grow()
ripples[i].draw()
} 	 	
}
}

if(agents.length>0&&dotsmove=='on'){
context.clearRect(0, 0, canvas.width, canvas.height);
for(let i = 0; i<agents.length;i++){

agents[i].update()
agents[i].draw(context)
agents[i].bounce(1000, 1000)


}
}
     window.requestAnimationFrame(tick)

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);
   
    
}
}

startAnimating(5)