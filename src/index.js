const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
import style from './main.css'
const agents = [];
const ripples = [];
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
let waterColor = 'white'
let SelectNumber;
import hamilton1 from './hamilton beach.jpg'
import hamilton2 from './hamilton2.jpg'
import hamilton3 from './hamilton3.png'
import hamilton4 from './hamilton4.png'
import sycom1 from './sycom.png'
import sycom2 from './sycom2.jpg'
import sycom3 from './sycom3.png'
import sycom4 from './sycom4.png'
import altria1 from './altria.png'
import altria2 from './altria2.jpg'
import altria3 from './altria3.png'
import altria4 from './altria4.png'
import medstar1 from './medstar.jpg'
import medstar2 from './medstar2.jpg'
import medstar3 from './medstar3.png'
import medstar4 from './hamilton beach.jpg'
import wordpress1 from './wordpress.png'
import wordpress2 from './hamilton beach.jpg'
import wordpress3 from './wordpress3.png'
import wordpress4 from './hamilton beach.jpg'


var images=[
[hamilton1,hamilton2,hamilton3,hamilton4],
[sycom1,sycom2,sycom3,sycom4],
[altria1,altria2,altria3,altria4],
[medstar1,medstar2,medstar3,medstar4],
[wordpress1,wordpress2,wordpress3,wordpress4]
]




function displayInformation(){
$('.presentation').html(presentationInformation[SelectNumber])
var image1 = $('#image1').attr('src', images[SelectNumber][0])
// console.log(image1)
$('#image2').attr('src', images[SelectNumber][1])
$('#image3').attr('src', images[SelectNumber][2])
$('#image4').attr('src', images[SelectNumber][3])
$('.presentation').css('display', 'block')
$('body').css('background-color', 'grey')
}

var download = function(){
	var link = document.createElement('a');
	link.download = 'filename.png';
	link.href = document.getElementById('canvas').toDataURL()
	link.click();
  }	// get image URI from canvas object

const presentationInformation=[

	`<div><h2>Helpdesk - Hamilton Beach </h2>
	<img id='image1'></img>
	<img id='image2' ></img>
    <p>Hamilton Beach is a large manufacturer of home appliances in the United States. They have their major warehouse in Baylia, MS</p>
    <p>They use three data management systems to maintain and monitor their operation </p>
	<img id='image3'style='height:600px' ></img>
    <p>they are :</p>
    <ul>
        <li>HighJump</li>
        <li>Epicore</li>
        <li>Atlassian Jira</li>
    </ul>
    <h3>Responsibilities</h3>
	<img id='image4' style='height:600px'></img>
    <ul>
        <li>
           respond to employee technical issues through phone and Atlassian Jira
        </li>
        <li>
            assess the issue and collect clear and relevant information from the client
         </li>
        <li>
            using existing knowledge base and google to solve issue using trouble-shooting procedure      
        </li>
        <li>
            redirect higher-level issues to the relevant higher-tier technician
        </li>
        <li>
            record successful solutions into a instructional document and add to existing knowledge-base 
        </li>

    </ul>
    <h3>Achievements</h3>
    <ul>
        <li>
           successfully responded to more than 300 tickets, solving client issues.
        </li>

    </ul>
</div> `
,


`<div><h2>Networking and Server Monitoring - Sycom </h2>
<img id='image1'></img>
<img id='image2'style="height:400px; margin-top:50px"></img>
<p>Sycom is a IT service company active throughout the United States. They manage the information infrastructure for many medium to large organizations</p>

<p>They use a variety of moniroting tools for physical and virtual devices that they manage </p>
<img id='image3' style='height:600px'></img>
<p>they are :</p>


<ul>
	<li>Solar Winds</li>
	<li>Ninja</li>
	<li>Meraki</li>

</ul>
<img id='image4' style='height:600px'></img>

<p>these tools constantly communicates with the monitored devices and networks, keeps track of the traffic, and alerts the administrator of high-traffic events and device outages</p>
<h3>Responsibility</h3>
<p>the administrator's main task is to keep everything in good running order</p>
<p> this involves running maintenance and regular updates on devices, restarting downed servers, and logging significant but non-actionable events to generate reports which add into big-data </p>
<p> the various technologies that are involved are (other than the ones listed above):</p>

<ul>
	<li>
	   basic command-line tools such as ping and tracert to assess device connectivity
	</li>
	<li>
		Remote Desktop to perform operations on remote devices
	 </li>
	 <li>
		Windows Server tools and devices such as the Hypervisor, to remotely control virtual devices
	 </li>
	<li>
		tools such as Winstat to assess device health
	</li>
  
</ul>
<h3>Achievements</h3>
<ul>
	<li>
	   successfully responded to more than 20 device-down incidents 
	</li>
	
	
</ul>


</div>
`,
`
<div><h2>Cybersecurity - Altria Group </h2>
<img id='image1'></img>
<img id='image2'></img>

    <p>Altria is the former Philip Morris. They are one of the largest corporations in the world; and is certainly its biggest and most influential tobacco and tobacco-related product producer</p>

    <p>to manage the security of their digital information, they employ MAXXPotential to screen reported emails and to keep their information secure</p>
    <p>The tools we use are:</p>
	<img id='image3' style = "height:500px"></img>

    <ul>
        <li>Microsoft Excel
            <ul>
                <li>to record and categorize emails into malicious, legitimate and spam - this gets fed into big data to train pattern recognition</li>
                <li>to use scripting to generate organized reports of the screened email</li>
            </ul>
        </li>
        <li>Various URL Scanning tools to see if links in email have domains that has been black-listed or leads to suspicious locations</li>
        <li>email headers  - SPF and DKIM authentication status gives more insight into the veracity of the sender of email</li>

    </ul>
	<img id='image4' style='height:500px'></img>

    <h3>Responsibilities</h3>
    <p>categorize each email and log the status of each email into a database</p>
    <p>validate the concerned employee on discovery of a malicious email, or that the suspicious email was either legitimate or spam</p>
    <p>generate reports of monthly records that organizes the information into easily understandable graphs</p>
    
      <h3>Achievements</h3>
    <ul>
        <li>
           successfully classified more that 1000 emails
        </li>
        
        
    </ul>


</div>

`,
`
<div><h2>Web Content Creation - Medstar </h2>
<img id='image1'></img>
<img id='image2'></img>

    <p>MedStar is a large system of hospitals active in the DC Maryland and Virginia area. </p>

    <p>They employed MAXXPotential as part of their team to migrate their entire website, consisting of hundreds of individual pages, to a new design, using a completely new content management system. from Wordpress to Sitecore</p>
    <p>We now perform constant content update and stylistic adjustments for the newly migrated website</p>
    <p>The tools we use are:</p>
	<img id='image3'style='height:500px'></img>

    <ul>
        <li>Sitecore</li>
        <li>basic web development tools such as CSS, and HTML</li>

    </ul>
    <h3>Responsibilities</h3>
    <p>Migrating all information of a large website from Wordpress to Sitecore</p>
    <p>Make on-going stylistic and content adjustments and updates</p>
    <img id='image4' style="display:none"></img>

      <h3>Achievements</h3>
    <ul>
        <li>
           Was part of the successful migration of the large website
        </li>
        <li>
        completed the migration of Georgetown Surgical Pavilion site</li>
        
        
    </ul>


</div>

`,

`

<div><h2>Website Maintenance and Development - Support </h2>
<img id='image1'></img>
<img id='image2' style='display:none'></img>

    <p>MAXXPotential supports and manages the digital infrastructure of a large number of businesses and organizations</p>
    <p>The vast majority of these clients use Wordpress to create their website. We use our thorough understanding of Wordpress to make adjustments and updates to these websites</p>
    <p>The tools we use are:</p>
	<img id='image3' style='height:500px'></img>

    <ul>
        <li>Wordpress and its various libraries, add-ons and frameworks</li>
        <li>basic web development tools such as CSS, Javascript and HTML</li>
        <li>WinSCP to access website repositories</li>


    </ul>
	<img id='image4' style='display:none'></img>

    <h3>Responsibilities</h3>
    <p>trouble-shooting for errors that frequently occur in client websites</p>
    <p>make visual and content updates and changes</p>
    
    
      <h3>Achievements</h3>
    <ul>
        <li>
            <a href='https://janiemolster.com/product/book/'>successfully launched Janie Molster's book campaign</a>
          
        </li>
        <li>
            <a href='https://sweetpeawow.com/linkinbio'>made extensive changes and content creation for SweetPea </a>
            </li>
        <li>
            was part of the team to launch the new MAXXPotential website</li>
        
    </ul>


</div>



`,
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
// console.log('mouae move')
pebbleFollow(event)

})


$('#canvas2').click((event)=>{
event.preventDefault();
event.stopPropagation();
console.log('pondclick')
if(lureSelection=='on'){
dropPebble();

}

})

function dropPebble(){

var picked = $('.picked')
$(picked).addClass('picked2')
$(picked).removeClass('picked')
$(picked[0]).css('animation', 'fall both .5s ease-in')	
for (let i = 0; i < agents.length; i++) {
	const agent = agents[i];
     agent.stalk(mousePos)
		}
var pickedColor = $(picked[0]).css('background-color')
var picked = $('.picked2')

setTimeout(() => {
$(picked).css('height', '')
$(picked).css('width', '')
$(picked).css('animation', '')
lureSelection='off'

$(picked).removeClass('picked2')
SelectNumber = $(picked).attr('name')
console.log(SelectNumber)
waterColor=pickedColor;
setTimeout(() => {
	displayInformation()

}, 500);
}, 500);

}



function selectPebble(event){
lureSelection='on';
var currentPebble = event.target;
let height = $(currentPebble).innerHeight();
let width = $(currentPebble).innerWidth()
// console.log(height)
// console.log(width)
// console.log($(event.target))
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
// console.log('select pebble')
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
		// console.log(context)
		// console.log(ripples)
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
// console.log(i)
// console.log(agents)
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

		context.lineWidth = 2;
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
	// console.log(waterColor)
context.fillStyle=waterColor
context.fillRect(0, 0, canvas.width, canvas.height);
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


$("#draw").click((e)=>{
e.preventDefault();
e.stopPropagation();

waterColor='rgba(0,0,0,0)';

})



$("#download").click((e)=>{
	e.preventDefault();
	e.stopPropagation();
	
	download();
	
	})

$('.presentation').click((e)=>{
	e.preventDefault();
	e.stopPropagation();
	
	$('.presentation').css('display','none')
	$('body').css('background-color','white')



})

