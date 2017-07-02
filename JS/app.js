
$(function(){

   var input = $('#input');
   var list = $('#list');
   input.keypress(function(ev){
    if(ev.which === 13 && ev.target.value !==""){
           var appended = $(`<li  >${ev.target.value}</li>`).click(function(){appended.detach()}).addClass(" list-group-item list-group-item-action");
           list.append(appended);
           ev.target.value ="";
       }
   })

})


