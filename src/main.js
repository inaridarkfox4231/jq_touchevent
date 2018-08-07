$(function(){
  var box = $('#touchBox')[0];
  box.addEventListener("touchstart", touchHandler, false);
  box.addEventListener("touchmove", touchHandler, false);
  box.addEventListener("touchend", touchHandler, false);
  function touchHandler(e){
    e.preventDefault();  // デフォルトのイベント（コピーなど）を防ぐ
    if(e.type == "touchstart"){
      $('#txt').text("タッチされました");
    }
    if(e.type == "touchmove"){
      $('#txt').text("フリックしています");
      $('#x_pos').text(e.pageX);
      $('#y_pos').text(e.pageY);
    }
    if(e.type == "touchend"){
      $('#txt').text("フリックが終わりました");
    }
  }
})
