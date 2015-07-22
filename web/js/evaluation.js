/**
 * Created by zeroyan on 15/7/21.
 */

var drawSector = function(id){
    var canvas = document.getElementById(id);
    if (canvas == null){
        return false;
    }
    var context = canvas.getContext("2d");
    //color_list = ["rgb(251,71,64)","rgb(250，95，53)","rgb(252，122，43)","rgb(253，146，40)",
    //              "rgb(200,212,49)","rgb(180，222，49)","rgb(123，122，67)","rgb(51，216，119)",
    //              "rgb(36，217，139)","rgb(37，215，138)"];
    //start_angle = 0.75*Math.PI;
    //for(var i=0; i<10; i+=1){
    //    context.beginPath();
    //    context.arc(150,150,100,start_angle,start_angle+0.15*Math.PI,false);
    //    context.lineWidth = 15;
    //    context.strokeStyle = color_list[i];
    //    context.stroke();
    //    context.closePath();
    //    start_angle += 0.15*Math.PI;
    //}
    outline = new Image;
    outline.src = "./images/sector_outline.png";
    outline.onload = function(){
        drowImage(context, outline);
    }
};

var drowImage = function(context, img){
    context.drawImage(img,10,0,280,200);
};

$(function(){
    drawSector("sector_diagram");
});