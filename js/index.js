!function () {
	var b = document.documentElement.clientHeight;
	var c = document.documentElement.scrollHeight;
	var d = document.documentElement.scrollWidth;
	// console.log(b,c,d);
	$('.scroll').on("click",function (a) {
		a.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top},1000);
	});
	$("window").resize(function () {
		console.log(b);
		$("page1").css("height",b);
	});
}();