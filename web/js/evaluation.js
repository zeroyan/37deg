/**
 * Created by zeroyan on 15/7/21.
 */

var overlay = function(modal_id){
    var e1 = document.getElementById(modal_id);
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
};

var drawSector = function(id){
    var canvas = document.getElementById(id);
    if (canvas == null){
        return false;
    }
    var context = canvas.getContext("2d");
    //color_list = ["rgb(251,71,64)","rgb(250，95，53)","rgb(252，122，43)","rgb(253，146，40)",
    //              "rgb(200,212,49)","rgb(180，222，49)","rgb(123，122，67)","rgb(51，216，119)",
    //              "rgb(36，217，139)","rgb(37，215，138)"];
    outline = new Image;
    outline.src = "./images/sector_outline.png";
    outline.onload = function(){
        drowImage(context, outline);
    };
    start_angle = 0.9*Math.PI;
    for(var i=0; i<10; i+=1){
        context.beginPath();
        context.arc(150,150,90,start_angle,start_angle+0.121*Math.PI,false);
        context.lineWidth = 1;
        context.strokeStyle = "#cccccc";
        context.stroke();
        context.closePath();
        start_angle += 0.121*Math.PI;
    }
    context.beginPath();
    context.arc(150,150,105,0.9*Math.PI,2.11*Math.PI,false);
    context.lineWidth = 1;
    context.strokeStyle = "#cccccc";
    context.stroke();
    context.closePath();
    start_angle = 0.9*Math.PI;
    var draw_result_line = setInterval(function(){
        context.beginPath();
        context.arc(150,150,105,start_angle,start_angle+0.01*Math.PI,false);//终点需要改变
        context.lineWidth = 5;
        context.strokeStyle = "rgb(40,196,149)";
        context.stroke();
        context.closePath();
        start_angle += 0.01*Math.PI;
        if(start_angle > 1.5*Math.PI){
            clearInterval(draw_result_line);
        }
    },10);
};

var drowImage = function(context, img){
    context.drawImage(img,10,3,280,200);
};

$(function(){
    drawSector("sector_diagram");

    $("#consult").click(function(e){
        e.stopPropagation();
        var e1 = document.getElementById("consult_modal");
        e1.style.visibility = "visible";
        //alert("btn");
    });
    $("#consult_modal").click(function(e){
        e.stopPropagation();
        overlay("consult_modal");
        //alert("big")
    });
    $(".am-icon-wechat").click(function(e){
        e.stopPropagation();
        alert("微信");
    });
    $(".am-icon-phone").click(function(e){
        e.stopPropagation();
        alert("电话");
    });
});