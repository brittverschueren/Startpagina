var main = function () {
  "use strict";
  // hier komt je code
}
	$("img").on("mouseover", function(){
		$(this).closest(".logo").css("opacity","0.8");
		$(this).closest(".logo").css("transform", "rotateY(180deg)");
		$(this).closest(".logo").css("transition-duration", "2s");
});
		

	$("img").on("mouseout", function(){
		$(this).closest(".logo").css("opacity","1");
		$(this).closest(".logo").css("transform", "rotateY(360deg)");
		$(this).closest(".logo").css("transition-duration", "2s");
	});
$("document").ready(main);