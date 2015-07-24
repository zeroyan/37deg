/**
 * Created by zeroyan on 15/7/19.
 */
var overlay = function(modal_id){
    var e1 = document.getElementById(modal_id);
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
};

var formInteractive = {
    isCheckedBox:function(radio, box_children){
        $("input[name="+radio+"]").change(function(){
            flag = $(this).val();
            //console.log(flag);
            if(flag == 1){
                for(var i = 0; i < box_children.length; i+=1){
                    var _this = $("input[name="+box_children[i]+"]")
                    var parent_div = _this.length==0 ? $("#"+box_children[i]).parent() : _this.parent().parent().parent().parent();
                    $(parent_div).fadeIn(500)
                }
            }else{
                for(var i = 0; i < box_children.length; i+=1){
                    var _this = $("input[name="+box_children[i]+"]")
                    var parent_div = _this.length==0 ? $("#"+box_children[i]).parent() : _this.parent().parent().parent().parent();
                    $(parent_div).fadeOut(500)
                }
            }

        });
    },
    checkBoxNumber:function(clickId, changeId){
        var _that = $("input[name="+clickId+"]");
        $(_that).change(function(){
            var find_active = $("input[name="+clickId+"]:checked");
            //console.log(find_active.length);
            if(find_active.length > 1){
                var div = $("#"+changeId+"_div");
                div.empty();
                div.addClass("app-form-points").attr("id",changeId);
                var add_span = $("<span>").text('…');
                add_span.click(function(){overlay('user_child_gender_modal')});
                div.append(add_span);
            }else if(find_active.length == 1){
                var div = $("#"+changeId);
                div.empty();
                div.removeClass("app-form-points").attr("id",changeId+"_div");
                var label1 = $("<label>").addClass("am-btn am-btn-default").append(
                    $("<input type='radio'>").attr("name",changeId)
                ).text("男");
                var label2 = $("<label>").addClass("am-btn am-btn-default").append(
                    $("<input type='radio'>").attr("name",changeId)
                ).text("女");
                var label_div = $("<div id='app-form-radio' class='am-btn-group am-fr' data-am-button>").append(label1,label2);
                div.append(label_div);
            }
        });
    },
    addMoreChild:function(){
        var box = $($(this).parent()).find("#more_children");
        var label1 = $("<label>").addClass("am-btn am-btn-default").append(
            $("<input type='radio'>").attr("name","user_child_gender")
        ).text("男");
        var label2 = $("<label>").addClass("am-btn am-btn-default").append(
            $("<input type='radio'>").attr("name","user_child_gender")
        ).text("女");
        var label_div = $("<div id='app-form-radio' class='am-btn-group am-fr' data-am-button>").append(label1,label2);
        var div = $("<div class='am-g form-group'>").append(
            $("<div class='am-u-sm-5'>").text("子女3"),
            $("<div class='am-u-sm-7'>").append(label_div)
        );
        box.append(div);
    },
    toggleCheckBox:function(id){
        var buttons = $("#"+id+" button");
        //console.log(buttons);
        for(var i=0; i<buttons.length; i+=1){
            //console.log($(buttons[i]));
            //console.log(buttons[i].value);
            var b = $(buttons[i]);

            if(buttons[i].value == ""){
                b.click(function(){
                    if($(this).hasClass("app-btn-active")){
                        $(this).removeClass("app-btn-active");
                    }else{
                        $(this).addClass("app-btn-active");
                    }
                });
            }else if(buttons[i].value == "0"){
                b.click(function(ind){
                    return function(){
                        var b_toggle = $(buttons[ind]);
                        var word = b_toggle.html();
                        //console.log(word.slice(0,2));
                        if(word.slice(0,2) == "收起"){
                            b_toggle.html("更多<span class='am-icon-angle-double-up am-icon-sm'></span>");
                            b_toggle.val("1");
                            $(buttons[3]).css("display","inline");
                            $(buttons[4]).css("display","inline");
                            $(buttons[5]).css("display","inline");
                        }else{
                            b_toggle.html("收起<span class='am-icon-angle-double-down am-icon-sm'></span>");
                            b_toggle.val("0");
                            $(buttons[3]).css("display","none");
                            $(buttons[4]).css("display","none");
                            $(buttons[5]).css("display","none");
                        }
                    };
                }(i));
            }
        }
    }
};

$(function(){
    formInteractive.isCheckedBox('user_child_is18', ['user_child_num','user_child_gender']);
    formInteractive.isCheckedBox('user_has_paycheck', ['user_paycheck_info']);
    formInteractive.isCheckedBox('need_support_parents', ['support_parents_info','parents_insurance_info']);
    formInteractive.checkBoxNumber('user_child_num','user_child_gender');
    formInteractive.toggleCheckBox('app-form-checkbox');
    $(".app-add-child").click(formInteractive.addMoreChild);
    $("#submit_form").click(function(){
        location.href = "evaluation.html";
    });
    //console.log($(".modal-data>button"));

});