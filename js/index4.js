/*
* @Author: diaoqi
* @Date:   2017-03-15 10:29:15
* @Last Modified by:   diaoqi
* @Last Modified time: 2017-03-15 16:49:58
*/
var projPrice = data.price;
$("#read-kaola-alert").hide();
addDomFunction3();
$("#tobuy-book-list a").on("click",function(e){
    var isChecked = $("#agree-kaola:checked").val();
    if(!isChecked){
        $("#read-kaola-alert").show();
        e.preventDefault();
    }else{
    	$("[data-toggle='modal']").attr("data-target","#myModal");
    	$(".modal-body").html("成功支付："+$("#all-prise").html()+"元"+"<br/>"+
    	        "支付方式："+$(this).attr("payment")+"<br/>"+
    	        "感谢您的购买！");
        //alert("成功支付："+$("#all-prise").html()+"元"+"\n"+
        //"支付方式："+$(this).attr("payment")+"\n"+
        //"感谢您的购买！");
    }
})

function addDomFunction3(){
    var bookNumarray = localStorage.getItem("bookNumarray");
    bookNumarray = strToJson(bookNumarray);
    var totalPrice = 0;
    for( var i in bookNumarray){
        totalPrice += projPrice[i] * bookNumarray[i];
        alert(projPrice[i]);
    }
    if(getJsonLength(bookNumarray) < 6){
        totalPrice += 10;
    }
    $("#all-prise").html(totalPrice);
}



function strToJson(str){
    return JSON.parse(str);
}
function strToArray(str){
    ss = str.split(",");
    return ss;
}
function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
        jsonLength++;
    }
    return jsonLength;
}