var jack,jakeImage,pathImage,path,block1
function preload(){
pathImage=loadAnimation('path.png')
jakeImage=loadAnimation('Runner1.png')


}
function setup(){
  background('black')
path=createSprite(200,200,200,200)
path.addAnimation('blah','path.png')
path.scale=1
path.velocityY=3
 block1=createSprite(60,200,20,400)
jack = createSprite(200,350,20,20)



}
function draw(){
jack.x=World.mouseX
jack.collide(block1)

drawSprites()
}