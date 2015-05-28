var main = function () {
  "use strict";
  // hier komt je code
}
	$("img").on("mouseover", function(){
		$(this).closest(".logo").css("opacity","0.8");
		
	});
	$("img").on("mouseout", function(){
		$(this).closest(".logo").css("opacity","1");
		
	});
$("document").ready(main);