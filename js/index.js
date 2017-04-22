!function () {
	// var b = document.documentElement.clientHeight;
	// var c = document.documentElement.scrollHeight;
	// var d = document.documentElement.scrollWidth;
	$('.scroll').on("click",function (a) {
		a.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top},1000);
	});
	var b = document.documentElement.clientHeight;
	$("#page1").css("height",b);
}();
