$(function(){
  var box = $('#touchBox')[0];
  box.addEventListener("touchstart", touchHandler, false);
  function touchHandler(e){
    alert("Touch!!!");
  }
})
