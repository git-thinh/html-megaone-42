function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },
 countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<ul class="count_down"><li><p class="days">'+day+'</p> <p class="days_ref">days</p></li>';
   timer += '<li><p class="hours">'+hour+'</p> <p class="hours_ref">hours</p></li>';
   timer += '<li> <p class="minutes">'+this.addZero(min)+'</p> <p class="minutes_ref">minutes</p></li> <li><p class="seconds">'+this.addZero(sec)+'</p><p class="seconds_ref">seconds</p></li></ul>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );

  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function edufaircd(){

 // Set countdown limit
 var tl = new Date('2020/08/01 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('countdowntimer',tl,'<div class="col-md-3 countdown-single"> Time is up! </div>');
 timer.countDown();
}
window.onload=function(){
 edufaircd();
}