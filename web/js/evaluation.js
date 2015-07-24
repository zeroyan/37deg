/**
 * Created by zeroyan on 15/7/21.
 */
function getObjSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var overlay = function(modal_id){
    var e1 = document.getElementById(modal_id);
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
};

var drawImage = function(context, img, x, y, w, h){
    context.drawImage(img,x,y,w,h);
};
var writeText = function(context, text, x, y, algin, font, color){
    context.font = font;
    context.fillStyle = color;
    context.textAlign = algin;
    context.fillText(text,x,y);
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
        drawImage(context,outline,2,1,297,200);

        start_angle = 0.9*Math.PI;
        for(var i=0; i<10; i+=1){
            context.beginPath();
            context.arc(150,150,84,start_angle,start_angle+0.121*Math.PI,false);
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
        writeText(context,"BETA",canvas.width/2,canvas.height-120,"center","10px Calibri", "white");
        writeText(context,"86",canvas.width/2,canvas.height-70,"center","40px Calibri","green");
        writeText(context,"保障良好",canvas.width/2,canvas.height-50,"center","2px Calibri","green");
        writeText(context,"评估时间:2015-07-07",canvas.width/2,canvas.height-30,"center","2px Calibri","gray");
        start_angle = 0.9*Math.PI;
        var draw_result_line = setInterval(function(){
            context.beginPath();
            context.arc(150,150,105,0.9*Math.PI,start_angle+0.01*Math.PI,false);//终点需要改变
            context.lineWidth = 5;
            context.strokeStyle = "rgb(40,196,149)";
            context.stroke();
            context.closePath();


            var point_x = 150+105*Math.cos(start_angle);
            var point_y = 150+105*Math.sin(start_angle);
            context.clearRect(point_x-9,point_y-9,18,18);
            context.beginPath();
            context.arc(point_x,point_y,3,2*Math.PI,false);//终点需要改变
            //context.arc(150,150,5,2*Math.PI,false);//终点需要改变
            //context.lineWidth = 1;
            context.strokeStyle = "rgb(40,196,149)";
            context.stroke();
            context.closePath();
            context.fillStyle = "#EDEDED";
            context.fill();

            start_angle += 0.009*Math.PI;
            if(start_angle > 1.78*Math.PI){
                clearInterval(draw_result_line);
            }
        },10);
    };
};

var drawSemiCircle = function(id, arr){
    var canvas = document.getElementById(id);
    if (canvas == null){
        return false;
    }
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    outline = new Image;
    outline.src = "./images/semi_legend.jpg";
    outline.onload = function(){
        drawImage(context, outline, width-120, height/2 - 35, 100, 70);
    };
    writeText(context,"住院",35,20,"center ","1pt SimSun","black");
    writeText(context,"门诊",90,20,"center ","1pt SimSun","black")
    context.beginPath();
    context.arc(70,80,55,0.47*Math.PI,1.53*Math.PI,false);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#cccccc";
    context.stroke();
    context.beginPath();
    context.arc(70,80,55,0.47*Math.PI,(0.47+arr[0])*1.04*Math.PI,false);
    //var point_x = 70+55*Math.cos((0.47+arr[0])*1.04*Math.PI);
    //var point_y = 80+55*Math.sin((0.47+arr[0])*1.04*Math.PI);
    context.lineTo(75, 80+55*Math.sin((0.47+arr[0])*1.04*Math.PI));
    //context.quadraticCurveTo(point_x + 10*arr[0], point_y - 10*arr[0], 70-point_x, point_y);
    //context.quadraticCurveTo(70-point_x + 10*arr[0], point_y + 10*arr[0], 75, point_y);
    //context.quadraticCurveTo();
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#cccccc";
    context.fillStyle = "rgb(252,137,162)";
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(85,80,55,1.47*Math.PI,0.53*Math.PI,false);
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#cccccc";
    context.fillStyle = "rgb(176,51,78)";
    context.stroke();
    context.fill();
    context.beginPath();
    context.arc(85,80,55,1.47*Math.PI,(1.47+arr[1])*1.04*Math.PI,false);
    //context.arc(85,80,55,1.47*Math.PI,2*Math.PI,false);
    //var point_x = 85+55*Math.cos((1.47+arr[1])*1.04*Math.PI);
    //var point_y = 80+55*Math.sin((1.47+arr[1])*1.04*Math.PI);
    //context.quadraticCurveTo(point_x - 10*arr[1], point_y + 10*arr[1], (85+point_x)/2, point_y);
    //context.quadraticCurveTo((85+point_x)/2, point_y, 85, 80);
    context.lineTo(80, 80+55*Math.sin((1.47+arr[1])*1.04*Math.PI));
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = "#cccccc";
    context.fillStyle = "#ffffff";
    context.stroke();
    context.fill();
};
var drawColumn = function(id, dict){
    var canvas = document.getElementById(id);
    if (canvas == null){
        return false;
    }
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    //console.log(dict);
    var dict_len = getObjSize(dict);
    //console.log(dict_len);
    var sum = 0;
    var i = 1;
    for(var key in dict){
        //console.log(key);
        val = dict[key];
        if(typeof(val) == "number"){
            sum += val;
            x = i * (width/dict_len)-40;
            context.fillStyle = "rgb(253,137,161)";
            context.fillRect(x-10,height-20,20,-(90*val/80));
            context.beginPath();
            context.moveTo(5, height-19.5);
            context.lineTo(width-5, height-19.5);
            context.closePath();
            context.lineWidth = 1;
            //context.strokeStyle = "rgb(253,137,161)";
            context.strokeStyle = "#cccccc";
            context.stroke();
            writeText(context,key,x-25,height-5,"center ","10px sans-serif","black");
            writeText(context,val.toString()+"万",x-13,height-(90*val/80)-25,"center ","10px SimSun","black");
        }else if(typeof(val) == "object"){
            //console.log(val[0])
            sum = sum + val[0] + val[1];
            x = i * (width/dict_len)-40;
            context.fillStyle = "rgb(253,137,161)";
            context.fillRect(x-15,height-20,15,-(90*val[0]/20));
            writeText(context,val[0].toString()+"万",x-25,height-(90*val[0]/20)-25,"center ","10px SimSun","black");
            context.fillStyle = "rgb(176,51,78)";
            context.fillRect(x,height-20,15,-(90*val[1]/20));
            writeText(context,val[1].toString()+"万",x,height-(90*val[1]/20)-25,"center ","10px SimSun","black");
            context.beginPath();
            context.moveTo(5, height-19.5);
            context.lineTo(width-5, height-19.5);
            context.closePath();
            context.lineWidth = 1;
            //context.strokeStyle = "rgb(253,137,161)";
            context.strokeStyle = "#cccccc";
            context.stroke();
            writeText(context,key,x-25,height-5,"center ","10px sans-serif","black");
            //writeText(context,val.toString()+"万",x-13,height-105,"center ","10px SimSun","black");
        }
        i += 1;
    }
    writeText(context,"一共需要"+sum+"万",5,15,"center ","10px SimSun","black");
    //for(var i=1; i<5; i++){
    //    console.log(dict[i]);
    //    x = i * (width/4)-40;
    //    context.fillStyle = "rgb(253,137,161)";
    //    context.fillRect(x-10,height-20,20,-80);
    //    context.beginPath();
    //    context.moveTo(5, height-19.5);
    //    context.lineTo(width-5, height-19.5);
    //    context.closePath();
    //    context.lineWidth = 1;
    //    //context.strokeStyle = "rgb(253,137,161)";
    //    context.strokeStyle = "#cccccc";
    //    context.stroke();
    //    writeText(context,"子女教育",x-25,height-5,"center ","10px sans-serif","black")
    //    writeText(context,"10万",x-13,height-105,"center ","10px SimSun","black")
    //}

};
$(function(){
    drawSector("sector_diagram");
    drawSemiCircle("semicircle_diagram",[0.4,0.7]);
    drawColumn("column_diagram", {"子女教育":[5,17],"子女抚养":49,"父母赡养":60,"房屋贷款":50});

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