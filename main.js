var canvas=new fabric.Canvas("myCanvas");
var width=document.getElementById("width").value;
var height=document.getElementById("height").value;
var playerX=10;
var playerY=10;
var playerObject="";
var blockImg="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
top:playerY,
left:playerX
        });
        canvas.add(playerObject);
    });
} 
function newImage(getImage){
fabric.Image.fromURL(getImage,function(Img){
    blockImg=Img;
    blockImg.scaleToWidth(150);
    blockImg.scaleToHeight(140);
    blockImg.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImg);   
});
}