(()=>{var t={427:()=>{const t=document.createElement("template");t.innerHTML="\n\x3c!-- Bulma --\x3e\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\">\n\n\x3c!-- Font awesome --\x3e\n<link rel=\"stylesheet\"\n\thref=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\"\n\tintegrity=\"sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==\"\n\tcrossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n\n<style>\n\t.navbar {\n\t\tbackground-image: url(/assets/img/backgrounds/large/purple/purple-nebula-5.jpg);\n\t}\n\t.navbar-menu {\n\t\tbackground: transparent;\n\t}\n</style>\n<header>\n\t<nav class='navbar py-3'>\n\t\t\x3c!-- Brand and burger --\x3e\n\t\t<div class='navbar-brand'>\n\t\t\t<a href='about.html' class='navbar-item'>\n\t\t\t\t\x3c!-- TODO: make a proper logo/brand --\x3e\n\t\t\t\t<i class=\"fa-brands fa-battle-net is-size-3 has-text-light mr-2\"></i>\n\t\t\t\t<h1 class='title has-text-light'>Void Break 2</h1>\n\t\t\t</a>\n\t\t\t<a class='navbar-burger has-text-light'>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</a>\n\t\t</div>\n\n\t\t\x3c!-- Nav menu --\x3e\n\t\t<div class='navbar-menu'>\n\t\t\t<div class='navbar-end'>\n\t\t\t\t<a class='navbar-item is-tab has-text-light' href='about.html' id='about'>About</a>\n\t\t\t\t<a class='navbar-item is-tab has-text-light' href='game.html' id='game'>Game</a>\n\t\t\t\t<a class='navbar-item is-tab has-text-light' href='documentation.html' id='documentation'>\n\t\t\t\t\tDocumentation</a>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</header>\n";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.burger=this.shadowRoot.querySelector(".navbar-burger"),this.menu=this.shadowRoot.querySelector(".navbar-menu"),this.burger.onclick=()=>{this.burger.classList.toggle("is-active"),this.menu.classList.toggle("is-active")}}attributeChangedCallback(t,s,e){"data-active"==t&&(s=this.shadowRoot.querySelector(`#${s}`),e=this.shadowRoot.querySelector(`#${e}`),s&&(s.classList.toggle("is-active"),s.classList.toggle("has-text-light")),e&&(e.classList.toggle("is-active"),e.classList.toggle("has-text-light")))}static get observedAttributes(){return["data-active"]}}customElements.define("nav-header",s)}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var h=s[i]={exports:{}};return t[i](h,h.exports,e),h.exports}(()=>{"use strict";function t(t,s){if((t.pos.x-s.pos.x)*(t.pos.x-s.pos.x)+(t.pos.y-s.pos.y)*(t.pos.y-s.pos.y)<=(t.radius+s.radius)*(t.radius+s.radius))return!0}e(427);class s{constructor(t,s={x:0,y:0},e=0,i){this.worldSize=i,this.pos={x:t.x,y:t.y},this.vel={x:s.x,y:s.y},this.angle=e}move(t){this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t}update(t){this.move(t),this.pos.x<0?this.pos.x+=this.worldSize:this.pos.x>this.worldSize&&(this.pos.x-=this.worldSize),this.pos.y<0?this.pos.y+=this.worldSize:this.pos.y>this.worldSize&&(this.pos.y-=this.worldSize)}}class i extends s{constructor(t,s){super(t,{x:0,y:0},0,s.worldSize),this.sounds=s.sounds,this.game=s}reset(){this.worldSize=this.game.worldSize,this.friction=this.game.defaults.player.friction,this.vel={x:this.worldSize/3,y:-this.worldSize/3},this.thrust=this.game.defaults.player.thrust,this.turnSpeed=this.game.defaults.player.turnSpeed,this.turning={cw:0,ccw:0},this.thrusting=!1,this.angle=45,this.radius=16,this.health={max:this.game.defaults.player.baseHealth,current:this.game.defaults.player.baseHealth},this.shield={max:this.game.defaults.player.baseShield,current:this.game.defaults.player.baseShield},this.damageCooldown={max:this.game.defaults.player.regenCooldown,current:0},this.regenRate=this.game.defaults.player.regenRate,this.projectiles=this.game.defaults.player.baseProjectiles,this.bullet=this.game.defaults.player.baseBullet,this.bullets=[],this.firing=!1,this.startFiring=!1,this.bulletLimit=this.game.defaults.player.bulletLimit}draw(){const t=this.game.canvas,s=this.game.ctx;s.save(),s.translate(t.width/2,t.height/2),s.rotate(this.angle*(Math.PI/180)),s.scale(8,8),s.fillStyle="white",s.beginPath(),s.moveTo(0,-2),s.lineTo(1.5,2),s.lineTo(0,1),s.lineTo(-1.5,2),s.closePath(),s.fill(),this.thrusting&&(s.fillStyle="rgba(180,180,255, 0.8)",s.beginPath(),s.moveTo(0,1),s.lineTo(-1.2,3),s.lineTo(0,5),s.lineTo(1.2,3),s.closePath(),s.fill()),s.restore(),s.save(),s.translate(t.width/2,t.height-50),s.scale(3,1),s.fillStyle="#3f3f3f",s.beginPath(),s.rect(-this.health.max/2,10,this.health.max,20),s.fill(),s.fillStyle="#cf0000",s.beginPath(),s.rect(-this.health.current/2,10,this.health.current,20),s.fill(),s.fillStyle="#3f3f3f",s.beginPath(),s.rect(-this.shield.max/2,-20,this.shield.max,20),s.fill(),s.fillStyle="#0000cf",s.beginPath(),s.rect(-this.shield.current/2,-20,this.shield.current,20),s.fill(),s.restore()}update(t){for(this.angle+=this.turnSpeed*t*(this.turning.cw-this.turning.ccw),this.vel.x*=1-this.friction*t,this.vel.y*=1-this.friction*t,this.vel.x*this.vel.x+this.vel.y*this.vel.y<.01&&(this.vel.x=0,this.vel.y=0),this.thrusting&&(this.vel.x+=this.thrust*t*Math.sin(this.angle*(Math.PI/180)),this.vel.y-=this.thrust*t*Math.cos(this.angle*(Math.PI/180))),super.update(t),this.damageCooldown.current-=t,this.projectiles.cooldown-=t,this.startFiring&&this.projectiles.cooldown<=0&&(this.startFiring=!1,this.firing=!0,this.projectiles.cooldown=0);this.firing&&this.projectiles.cooldown<=0;)this.shoot();this.shield.current<this.shield.max&&this.damageCooldown.current<=0&&(this.shield.current+=this.shield.max/this.regenRate*t,this.shield.current>this.shield.max&&(this.shield.current=this.shield.max)),this.bullets.forEach((s=>{s.update(t)})),this.bullets=this.bullets.filter((t=>t.lifetime>0))}checkCollisions(){this.game.asteroids.forEach((s=>{if(t(this,s)){let t={x:s.pos.x-this.pos.x,y:s.pos.y-this.pos.y};s.vel.x+=t.x*(this.health.max/20),s.vel.y+=t.y*(this.health.max/20);let e=s.radius;e>30&&(e=30),this.vel.x-=e/3*t.x,this.vel.y-=e/3*t.y,this.damage(e),s.damage(this.health.max)}})),this.bullets.forEach((t=>{t.checkCollisions()}))}shoot(){this.bullets.length<this.bulletLimit&&this.bullets.push(new a(this)),this.projectiles.cooldown+=1/this.projectiles.rate,this.sounds.shoot1.play()}damage(t){this.damageCooldown.current=this.damageCooldown.max,this.shield.current-=t,this.shield.current<0&&(this.health.current+=this.shield.current,this.shield.current=0,this.health.current<=0&&(this.game.state="game over"))}}class a extends s{constructor(t){super({x:t.pos.x+t.vel.x*t.projectiles.cooldown,y:t.pos.y+t.vel.y*t.projectiles.cooldown},{x:t.vel.x+t.bullet.speed*Math.sin(t.angle*(Math.PI/180)),y:t.vel.y-t.bullet.speed*Math.cos(t.angle*(Math.PI/180))},t.angle,t.worldSize),this.parent=t,this.radius=4*this.parent.bullet.size,this.lifetime=t.bullet.lifetime,this.update(-t.projectiles.cooldown)}draw(){this.parent.game.canvas;const t=this.parent.game.ctx;t.save(),t.translate(this.pos.x,this.pos.y),t.rotate(this.angle*(Math.PI/180)),t.scale(2*this.parent.bullet.size,2*this.parent.bullet.size),this.parent.bullet.enemy?t.fillStyle="red":t.fillStyle="white",t.beginPath(),t.moveTo(0,-2),t.lineTo(1.5,2),t.lineTo(0,1),t.lineTo(-1.5,2),t.closePath(),t.fill(),t.restore()}update(t){super.update(t),this.lifetime-=t}checkCollisions(){this.parent.game.asteroids.forEach((s=>{t(this,s)&&(s.damage(this.parent.bullet.damage),this.lifetime=0)}))}}class h extends s{constructor(t,s,e,i,a){super(s,{x:0,y:0},360*Math.random(),e),this.points=[],this.radius=t;let h,l=this.radius/3,o=this.radius-l/2,n=0,r=o+Math.random()*l;for(this.points.push({x:0,y:-r}),n+=5+20*Math.random();n<360;)h=o+Math.random()*l,this.points.push({x:h*Math.sin(n*(Math.PI/180)),y:-h*Math.cos(n*(Math.PI/180))}),n+=5+20*Math.random();this.health=t,this.sounds=i,this.asteroids=a;let c=20+Math.random()*(2e3/this.radius);this.vel={x:c*Math.sin(this.angle*(Math.PI/180)),y:c*Math.cos(this.angle*(Math.PI/180))}}draw(t){t.save(),t.strokeStyle="white",t.fillStyle="#404040",t.translate(this.pos.x,this.pos.y),t.rotate(this.angle*(Math.PI/180)),t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y);for(let s=1;s<this.points.length;s++)t.lineTo(this.points[s].x,this.points[s].y);t.closePath(),t.fill(),t.stroke(),t.restore()}damage(t){if(!(this.health<=0)&&(this.health-=t,this.sounds.hit1.play(),this.health<=0&&(this.sounds.hit2.play(),this.radius>20))){let t=Math.floor(this.radius/10);t>5&&(t=5);let s=Math.floor(2+Math.random()*(t-1));for(let t=0;t<s;t++)this.asteroids().push(new h(this.radius/s,this.pos,this.worldSize,this.sounds,this.asteroids))}}}const l=document.createElement("template");l.innerHTML="\n<style>\ncanvas {\n\theight: 100%;\n\twidth: 100%;\n}\n:host {\n\toverflow: hidden;\n}\n</style>\n<canvas>\n";class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0)),this.canvas=this.shadowRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.resolution=1080,document.defaultView.onresize=()=>{this.canvas.width=this.offsetWidth/this.offsetHeight*this.resolution,this.canvas.height=this.resolution},this.canvas.onmousemove=t=>{const s=this.canvas.width/this.canvas.offsetWidth,e=this.canvas.height/this.canvas.offsetHeight;this.mousePos={x:t.clientX*s,y:(t.clientY-this.canvas.offsetTop)*e}},this.canvas.onmousedown=this.canvas.onmouseup=t=>{this.mouseState=t.buttons},this.canvas.oncontextmenu=t=>{t.preventDefault()},document.onkeydown=t=>{switch(t.keyCode){case 87:this.player.thrusting=!0;break;case 65:this.player.turning.ccw=1;break;case 68:this.player.turning.cw=1;break;case 32:this.player.firing||(this.player.startFiring=!0)}},document.onkeyup=t=>{switch(t.keyCode){case 87:this.player.thrusting=!1;break;case 65:this.player.turning.ccw=0;break;case 68:this.player.turning.cw=0;break;case 32:this.player.firing=!1}},this.tutorials={ui:{activate(){this.time=15},time:0,draw(t){const s=t.canvas,e=t.ctx;e.save(),e.translate(s.width/2,s.height-50),e.globalAlpha=this.time/2,e.textAlign="center",e.font="40px Futura";let i=t.player.health.max<t.player.shield.max?3*t.player.shield.max:3*t.player.health.max;e.fillStyle="white",e.strokeStyle="#cf0000",e.fillText("Health",-i/2-65,35),e.strokeText("Health",-i/2-65,35),e.strokeStyle="#0000cf",e.fillText("Shield",-i/2-65,0),e.strokeText("Shield",-i/2-65,0),e.strokeStyle="white",e.fillStyle="rgba(255,255,255,0.1)",e.lineWidth=4,e.beginPath(),e.rect(-i/2,-30,i,80),e.stroke(),e.fill(),e.restore()}},controls:{activate(){this.time=5,this.turnLeft=!1,this.turnRight=!1,this.thrust=!1,this.shoot},time:0,draw(t){const s=t.canvas,e=t.ctx;e.save(),e.translate(100,s.height/2),e.globalAlpha=this.time/2,e.font="50px Futura",e.strokeStyle="white",e.save(),e.lineWidth=5,e.fillStyle="rgba(255,255,255,0.05)",e.beginPath(),e.rect(0,-s.height/4,300,300),e.stroke(),e.fill(),e.restore(),e.save(),e.translate(50,-s.height/4+50),e.scale(6,6),e.save(),e.rotate(Math.PI/180*45),e.fillStyle="white",e.beginPath(),e.moveTo(0,-2),e.lineTo(1.5,2),e.lineTo(0,1),e.lineTo(-1.5,2),e.closePath(),e.fill(),e.restore(),e.beginPath(),e.arc(0,0,4.2,Math.PI/180*180,Math.PI/180*270),e.stroke(),e.beginPath(),e.arc(0,0,4.2,Math.PI/180*0,Math.PI/180*90),e.stroke(),e.beginPath(),e.moveTo(0,-4),e.lineTo(-1,-3.5),e.lineTo(-1,-4.5),e.closePath(),e.stroke(),e.beginPath(),e.moveTo(0,4),e.lineTo(1,3.5),e.lineTo(1,4.5),e.closePath(),e.stroke(),e.restore(),e.save(),e.translate(50,-s.height/4+150),e.rotate(Math.PI/180*45),e.scale(6,6),e.fillStyle="white",e.beginPath(),e.moveTo(0,-2),e.lineTo(1.5,2),e.lineTo(0,1),e.lineTo(-1.5,2),e.closePath(),e.fill(),e.fillStyle="rgba(180,180,255, 0.8)",e.beginPath(),e.moveTo(0,1),e.lineTo(-1.2,3),e.lineTo(0,5),e.lineTo(1.2,3),e.closePath(),e.fill(),e.restore(),e.save(),e.translate(50,-s.height/4+250),e.rotate(Math.PI/180*45),e.fillStyle="white",e.save(),e.scale(6,6),e.beginPath(),e.moveTo(0,-2),e.lineTo(1.5,2),e.lineTo(0,1),e.lineTo(-1.5,2),e.closePath(),e.fill(),e.restore(),e.scale(2,2),e.beginPath(),e.moveTo(0,-13),e.lineTo(1.5,-9),e.lineTo(0,-10),e.lineTo(-1.5,-9),e.closePath(),e.fill(),e.beginPath(),e.moveTo(0,-19),e.lineTo(1.5,-15),e.lineTo(0,-16),e.lineTo(-1.5,-15),e.closePath(),e.fill(),e.restore(),e.fillStyle="white",e.lineWidth=2,e.lineJoin="round",e.fillText("A",120,-s.height/4+70),e.beginPath(),e.rect(113,-s.height/4+30,50,50),e.stroke(),e.fillText("D",200,-s.height/4+70),e.beginPath(),e.rect(193,-s.height/4+30,50,50),e.stroke(),e.fillText("W",120,-s.height/4+170),e.beginPath(),e.rect(117,-s.height/4+128,50,50),e.stroke(),e.fillText("Space",120,-s.height/4+260),e.beginPath(),e.rect(117,-s.height/4+220,130,58),e.stroke(),e.restore()}}},document.defaultView.onresize(),this.mousePos={x:0,y:0},this.worldSize=3e3,this.mouseState=0,this.lastMouseState=0,this.sounds={},this.player=new i({x:0,y:0},this),this.state="loading",this.loading=0,this.lastFrameTime=window.performance.now()/1e3,this.loop()}drawLoading(t,s){this.ctx.save(),this.ctx.fillStyle="white",this.ctx.strokeStyle="white",this.ctx.textAlign="center",this.ctx.font="30px Comic Sans MS",this.ctx.fillText("Loading...",this.canvas.width/2,this.canvas.height/2-20),this.ctx.beginPath(),this.ctx.rect(this.canvas.width/3,this.canvas.height/2,this.canvas.width/3,30),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.rect(this.canvas.width/3,this.canvas.height/2,this.canvas.width/3*(t/100),30),this.ctx.fill(),this.ctx.lineWidth=5,this.ctx.beginPath(),this.ctx.arc(this.canvas.width/2+100,this.canvas.height/2-30,20,2*Math.PI*(s%1/1),2*Math.PI*(s%1/1)+2/3*Math.PI),this.ctx.stroke(),this.ctx.restore()}loop(){requestAnimationFrame((()=>this.loop()));const t=window.performance.now()/1e3,s=t-this.lastFrameTime;switch(this.lastFrameTime=t,this.ctx.fillStyle="black",this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fill(),this.state){case"loading":this.drawLoading(this.loading,t);break;case"main menu":this.ctx.save(),this.ctx.save();let a=this.resolution/1024;this.canvas.width>this.canvas.height&&(a=this.canvas.width/1024),this.ctx.scale(a,a),this.ctx.drawImage(this.images.purple6,0,0),this.ctx.restore(),this.ctx.save(),this.ctx.fillStyle="red",this.ctx.strokeStyle="white",this.ctx.textAlign="center",this.ctx.font="300px Futura",this.ctx.fillText("VOID",this.canvas.width/2,this.canvas.height/2-300),this.ctx.strokeText("VOID",this.canvas.width/2,this.canvas.height/2-300),this.ctx.fillText("BREAK",this.canvas.width/2,this.canvas.height/2-80),this.ctx.strokeText("BREAK",this.canvas.width/2,this.canvas.height/2-80),this.ctx.restore(),this.ctx.save(),this.ctx.fillStyle="red",e={x:this.mousePos.x,y:this.mousePos.y,w:0,h:0},i={x:this.canvas.width/2-90,y:this.canvas.height/2+130,w:185,h:75},e.x+e.w>i.x&&e.x<i.x+i.w&&e.y+e.h>i.y&&e.y<i.y+i.h&&(this.mouseState%2==1?this.ctx.fillStyle="darkRed":this.lastMouseState%2==1&&this.mouseState%2==0?(this.worldSize=this.defaults.worldSize,this.background=this.defaults.background,this.asteroidSpawning=this.defaults.asteroidSpawning,this.player.reset(),this.tutorials.ui.activate(),this.tutorials.controls.activate(),this.asteroids=[],this.score=0,this.state="game"):this.ctx.fillStyle="coral"),this.ctx.strokeStyle="white",this.ctx.textAlign="center",this.ctx.font="100px Futura",this.ctx.fillText("Start",this.canvas.width/2,this.canvas.height/2+200),this.ctx.strokeText("Start",this.canvas.width/2,this.canvas.height/2+200),this.ctx.restore(),this.ctx.restore();break;case"game":this.player.update(s),this.asteroids.forEach((t=>{t.update(s)})),this.asteroids=this.asteroids.filter((t=>t.health>0||(this.score++,!1)));for(const t in this.tutorials)this.tutorials[t].time-=s;for(;this.asteroids.length<this.asteroidSpawning.minLimit+this.score/this.asteroidSpawning.scorePerLimit;){let t=360*Math.random();this.asteroids.push(new h(this.asteroidSpawning.minSize+this.score/this.asteroidSpawning.scorePerSize,{x:this.player.pos.x+this.worldSize/2*Math.sin(t*(Math.PI/180)),y:this.player.pos.y+this.worldSize/2*Math.cos(t*(Math.PI/180))},this.worldSize,this.sounds,(()=>this.asteroids)))}this.player.checkCollisions(),this.ctx.save(),this.ctx.save(),this.ctx.translate(this.canvas.width/2-this.player.pos.x,this.canvas.height/2-this.player.pos.y);for(let t=-1;t<2;t++)for(let s=-1;s<2;s++)this.ctx.save(),this.ctx.translate(this.worldSize*t,this.worldSize*s),this.ctx.drawImage(this.images[this.defaults.background],0,0,this.worldSize,this.worldSize),this.ctx.restore();for(let t=-1;t<2;t++)for(let s=-1;s<2;s++)this.ctx.save(),this.ctx.translate(this.worldSize*t,this.worldSize*s),this.player.bullets.forEach((t=>{t.draw()})),this.asteroids.forEach((t=>{t.draw(this.ctx)})),this.ctx.restore();this.ctx.restore();for(const t in this.tutorials)this.tutorials[t].time>0&&this.tutorials[t].draw(this);this.player.draw(),this.ctx.fillStyle="white",this.ctx.font="40px Futura",this.ctx.fillText("Score: "+this.score,10,50),this.ctx.restore()}var e,i;this.lastMouseState=this.mouseState}}customElements.define("void-break",o);const n=document.querySelector("void-break"),r={purple5:"/assets/img/backgrounds/large/purple/purple-nebula-5.jpg",purple6:"/assets/img/backgrounds/large/purple/purple-nebula-6.jpg"};n.sounds.shoot1=new Howl({src:["/assets/sounds/shoot1.wav"]}),n.sounds.shoot1.volume(.3),n.loading+=100/6,n.sounds.hit1=new Howl({src:["/assets/sounds/hit1.wav"]}),n.sounds.hit1.volume(.5),n.loading+=100/6,n.sounds.hit2=new Howl({src:["/assets/sounds/hit2.wav"]}),n.sounds.hit2.volume(.5),n.loading+=100/6,fetch("/assets/data/defaults.json").then((t=>t.json())).then((t=>{n.loading+=100/6,n.defaults=t,n.loading>=99.9&&(n.images=r,n.state="main menu")}));for(let t in r){let s=new Image;s.src=r[t],r[t]=s,s.onload=function(){n.loading+=100/6,n.loading>=99.9&&(n.images=r,n.state="main menu")},s.onerror=function(){console.log("ERROR: image named '"+t+"' at "+this.src+" did not load!")}}})()})();