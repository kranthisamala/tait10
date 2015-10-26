$(document).ready(function(){	
for(var i=0;i<63;i++)
{	number = (Math.floor(Math.random()*63)%63 );
	$("#bx"+number).hide(1);
}
var loding_remove=setInterval(function() {
$("body").css("background-color","#ffffff");
$("body").css("background-image","url('')");
$("._black,#middle").fadeIn(2000);
clearInterval(loding_remove); 
}, 5000);
$(".video_choice").click(function(){ 
    $('video').trigger('pause');
	var url=$(this).attr("url");
    $('#vid_source').attr('src', url+'.webm');   
    $('video').load();
    $('video').attr('poster', url+'.jpg'); //Change video poster   
  });
  $("video").click(function()
  {
	  var video = $(this);
	  var videoElement = video.get(0);
		if (!videoElement.paused) {$(this).trigger('pause');}else{$(this).trigger('play');} 
	  
  }).dblclick( function(){
	 document.getElementsByTagName('video')[0].webkitEnterFullscreen();
  });
  $('video').on('ended',function(){
     var check_video=$(this).attr("poster");
	 if(check_video=="tait.jpg"){
		 $('#vid_source').attr('src','icit.webm');
		 $('video').attr('poster', 'icit.jpg');
		 $('video').load();
	 }else
	 {
		 $('#vid_source').attr('src','tait.webm');
		 $('video').attr('poster', 'tait.jpg');
		 $('video').load();
	 }
    });
//resize alterations
var w1=0,w=screen.width;
var h=screen.height;
if(w>1200)
{
	alteration();
}
function alteration(){
	w1=(w-1200)/2;
	$("._black").css("width",w+"px");
	$("#top_block").css("left",((w-1200)/2)+"px");
	$("#middle").css("left",(((w-1200)/2)-5)+"px");
	$("._black p").css("left",(((w-1200)/2)+540)+"px");
	$("#back_black").css("width",w+"px");
}
/*for(var j=0;j<8;j++)
{	var l = (Math.floor(Math.random()*1300)%1300);
	var t =	(Math.floor(Math.random()*700)%650);
	alert(l+" "+t);
	if(t<480&&t>240&&l<1200&&l>400){j--;}
	else{
	$("body").append("<div style='top:"+t+"px;left:"+l+"px;position:absolute;opacity:0.5;color:black;'>try to touch the blocks</div>");
	}
}	var i=0;
	for(i=0;i<64;i++)
	{
		var colr = (Math.floor(Math.random()*63)%5);
		if(colr==0)
			$("#bx"+i).css('backgroundColor','#4fff4f');
		else if(colr==1)
			$("#bx"+i).css('backgroundColor','#ffff51');
		else if(colr==2)
			$("#bx"+i).css('backgroundColor','#ff5151');
		else if(colr==3)
			$("#bx"+i).css('backgroundColor','#4f4fff');
		else
			$("#bx"+i).css('backgroundColor','#ff48a4');
	}*/
$('.blocks').mouseover(function(){
	$(this).animate({height:"60px",width:"60px"},250);
	$(this).toggle('slow');
    $(this).animate({height:"50px",width:"50px"},1);
});
var prev,next=1,number;
setInterval(function() {
	number = (Math.floor(Math.random()*63)%63 );
	$("#bx"+number).toggle(2000);
}, 1000);
var savetop=0;
$("h3").mouseover(function(){
	$(this).animate({top:"+=3px"},50);
	for(i=0;i<3;i++)
	{
		$(this).animate({top:"-=6px"},30);
		$(this).animate({top:"+=6px"},30);
	}
	$(this).animate({top:"-=3px"},10);
});
var side;
/*$(".hexa").mouseover(function(){
	var nxt=$(this).attr("next");
	if(nxt=="what_new")
		$(this).css('backgroundColor','#4fff4f');
	else if(nxt=="pastevent")
		$(this).css('backgroundColor','#ffff51');
	else if(nxt=="gallery")
		$(this).css('backgroundColor','#ff5151');
	else if(nxt=="results")
		$(this).css('backgroundColor','#4f4fff');
	else
		$(this).css('backgroundColor','#ff48a4');
}).mouseout(function(){
	$(this).css('backgroundColor','');
});*/
var nxt;
$(".hexa").click(function(){
	$( "html,body" ).scrollTop( -500 ).scrollLeft(0);
	nxt=$(this).attr("next");
	side=$("#"+nxt).css('left');
	$("#"+nxt).css('display','block');
$("#"+nxt).animate({left:'55px',opacity:'1'},750);
$("#back_black").fadeIn(2);
$("#"+nxt+" .close").attr("direc",""+side);
});
$(document).keyup(function(e) {
  if (e.keyCode == 27) {close();}   // esc
});
$("#back_black,.slide").click(function (e) { //Default mouse Position 
       close();
});
$(".close").click(function(){
	nxt=$(this).attr("next");
	side=$(this).attr("direc");
	close();});
function close(){
	$("#back_black").css("background-color","#000000");
	$('video').trigger('pause');
	if(nxt=="pastevent")
	{
			$("#pastevent").css('display','block');
			$("#event_containt").css("display","none");
	}
	$("#back_black").fadeOut(2);
	if(side=="-1500px")
	{
		$("#"+nxt).animate({left:'1500px',opacity:'0'},750)
		var inti=setInterval(function() {
	$("#"+nxt).hide();
	nxt="";
	 clearInterval(inti); 
}, 650);
	}
    else
	{
		$("#"+nxt).animate({left:'-1500px',opacity:'0'},750);
				inti=setInterval(function() {
	$("#"+nxt).hide();
	nxt="";
	clearInterval(inti);
}, 650);
	}
	
	
}
$("#event").click(function(){
	var div=$(this).attr("next");
	alert(div);
});
$(".event_list li a").click(function(){
	$("#back_black").css("background-color","#ffffff");
	$("#pastevent").fadeOut(1200);
	$("#event_containt").fadeIn(1200);
	var event_name=$(this).attr("href");
	var event_file_name=event_name.substring(1, event_name.length);
	$.get( "event/"+event_file_name, function( data ) {
  $( "#event_containt #containt" ).html( data );
});
});
$(".event_result").click(function(){
	$("#back_black").css("background-color","#ffffff");
	$("#pastevent").fadeOut(1200);
	$("#event_containt").fadeIn(1200);
	var event_name=$(this).attr("href");
	var event_file_name=event_name.substring(1, event_name.length);
	$.get( "results/"+event_file_name, function( data ) {
  $( "#event_containt #containt" ).html( data );
});
});
$("#event_close").click(function(){
	$("#back_black").css("background-color","#000000");
	$("#pastevent").fadeIn(1200);
	$("#event_containt").fadeOut(1200);
	$( "#event_containt #containt" ).html( "" );
});
/*var slide=0;
setInterval(function(){ 
if(slide==0)
{
	$("#home").animate({left:'-=10px'},2000);
	slide=1;
}
else{$("#home").animate({left:'+=10px'},2000);slide=0}
}, 1000);*/
});