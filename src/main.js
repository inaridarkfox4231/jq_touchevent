$(function(){
  var box = $('#touchBox')[0];
  box.addEventListener("touchstart", touchHandler, false);
  box.addEventListener("touchmove", touchHandler, false);
  box.addEventListener("touchend", touchHandler, false);
  function touchHandler(e){
    e.preventDefault();  // デフォルトのイベント（コピーなど）を防ぐ
    var touch = e.touches[0];
    if(e.type == "touchstart"){
      $('#txt').text("タッチされました");
    }
    if(e.type == "touchmove"){
      $('#txt').text("フリックしています");
    }
    if(e.type == "touchend"){
      $('#txt').text("フリックが終わりました");
    }
    $('#x_pos').text("(" + touch.pageX + ", " + touch.pageY + ")");
  }
})
