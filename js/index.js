!function() {
		var a = {
				window: $(window),
				page: $(".page"),
				page1: $("#page1"),
				page2: $("#page2"),
				page3: $("#page3"),
				scroll: $(".scroll"),
				navbar: $(".navbar"),
				feedbackbtn: $("#feedbackbtn"),
				name: $("#nickname"),
				email: $("#email"),
				msg: $("#msg"),
				myModal: $("#myModal")
			},
			e = {
				pageResize: function() {
					a.window.resize(o.pageResize)
				},
				goPage: function() {
					a.scroll.on("click", o.goPage)
				},
				pageScroll: function() {
					a.window.scroll(o.pageScroll)
				},
				feedback: function() {
					a.feedbackbtn.on("click", o.saveFeedback)
				}
			},
			o = {
				pageResize: function() {
					$$.getBrowser(),
						n.setPageHeight(),
						n.setBLogBKHeight()
				},
				goPage: function(a) {
					a.preventDefault(),
						$("html,body").animate({
								scrollTop: $(this.hash).offset().top
							},
							500)
				},
				pageScroll: function(e) {
					a.window.scrollTop() > 950 ? a.navbar.addClass("navbar-default") : a.navbar.removeClass("navbar-default")
				},
				saveFeedback: function() {
					var e = a.name.val(),
						o = a.email.val(),
						n = a.msg.val();
					if (e || o || n) {
						if (o) {
							if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(o)) return a.myModal.find("#myModalInfo").html("Email格式错误，谢谢！"),
								void a.myModal.modal()
						}
						$.post("/boui/api/feedback/save.htm", {
								name: e,
								email: o,
								msg: n
							},
							function(e) {
								e = JSON.parse(e),
									1 * e.status == 200 ? (a.name.val(""), a.email.val(""), a.msg.val(""), a.myModal.find("#myModalInfo").html("您的留言已提交，谢谢！"), a.myModal.modal()) : (a.myModal.find("#myModalInfo").html("报错啦，英雄请重新来过"), a.myModal.modal())
							})
					} else a.myModal.find("#myModalInfo").html("英雄请输入内容"),
						a.myModal.modal()
				}
			},
			n = {
				setPageHeight: function() {
					a.page1.css("height", $$.browser.cHeight)
				},
				setSomeWord: function() {
					var e = parseInt(5 * Math.random()) + 1,
						o = ["我若不勇敢，谁替我坚强", "唯一的希望在于自强不息", "一个人的态度，决定他的高度", "当你停止尝试时，就是失败的时候", "优秀之处并非原创，原创之处并非优秀"];
					a.page1.find("#someWords").html(o[e])
				},
				setBLogBKHeight: function() {
					var e = a.page3.find(".imgs");
					if (e.length > 0) {
						var o = 9 * e.width() / 16;
						e.height(o)
					}
				}
			};
		!function() {
				n.setPageHeight(),
					n.setSomeWord(),
					n.setBLogBKHeight(),
					e.pageResize(),
					e.goPage(),
					e.pageScroll(),
					e.feedback()
			} ()
	} ();