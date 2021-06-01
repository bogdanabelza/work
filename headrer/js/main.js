$(function(){
   $('.offer-content a').click(function(){
   	$('.triangles').css('width','300px');
   });
   $('.menu li a').click(function(){
   	$(this).toggleClass('active');
   });
});