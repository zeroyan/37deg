/**
 * Created by zeroyan on 15/7/19.
 */


var isCheckedBox = function(radio, box_children){
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
}

var overlay = function(modal_id){
    var e1 = document.getElementById(modal_id);
    e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
};

$(function(){
    isCheckedBox('user_child_is18', ['user_child_num','user_child_gender']);
    isCheckedBox('user_has_paycheck', ['user_paycheck_info']);
    isCheckedBox('need_support_parents', ['support_parents_info','parents_insurance_info']);
    $("#submit_form").click(function(){
        location.href = "evaluation.html";
    });
});