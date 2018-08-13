$(function() {

	$('.list-box-title span').on('click', function() {
		$(this).toggleClass('dow-up');
		$(this).parents('.list-box').find('.next-list').toggle();
	})

	$('.toggle-box ul li,.tab-box-list ul li').not('.contary-list > li').click(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass("on");
		$(this).parent("ul").siblings().find("li").removeClass("on");
	})

	$('.tab-box-list1 ul li').click(function() {
		$('.menu_nav a:first-child span').text($(this).text())
	})

	$('.tab-box-list2 ul li').not('.contary-list > li').click(function() {
		$('.menu_nav a:last-child span').text($(this).text())
	})

	$('.contray-box-list ul li').click(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass("on");
		$(this).parents(".contary-list li").siblings().find('li').removeClass("on");
		$(this).parents(".tab-box-list ul").siblings().find('li').removeClass("on");
	})

	$('.menu-box .checked').click(function() {
		$('.shadow-box').toggleClass('hidden');
		$(this).parents('.menu-box').toggleClass('toggeleout')
	})
	$('#nav').click(function() {
		$('.shadow-box').toggleClass('hidden');
		$('.menu-box').toggleClass('toggeleout')
	})

	$('.column-box > ul > li').click(function() {
		$(this).toggleClass("on").siblings(".column-box > ul > li").removeClass("on");
		$(this).toggleClass("dow-up").siblings(".column-box > ul > li").removeClass("dow-up");
		$(this).next(".tab-box-list").slideToggle(300).siblings(".tab-box-list").slideUp(500);
		$('.shadow-box').removeClass('hidden');
		$('.column-box> ul> li:first-child').removeClass('linear1');

	})

	$('.contary-list > li h2 a').click(function() {
		$(this).toggleClass("up-down").siblings('.contary-list > li h2 a').removeClass("up-down");
		$(this).parents('.contary-list > li').find('.contray-box-list').toggle()
	})

	$('.search-box').click(function() {
		$('.disvisility').hide();
		$('.search-display').show()
	})

	$('.del-icon').click(function() {
		$('.poup').show()
	})
	$('.btn-cal').click(function() {
		$('.poup').hide()
	})

	$('.btn-sure').click(function() {
		$('.poup').hide();
		$('.history-box').remove()
	})
	$('.goclose').click(function() {
		$(this).parents('.search-display').hide();
		$('.disvisility').show();
	})

	$('.tab-li li').click(function() {
		$(this).addClass('on').siblings('.tab-li li').removeClass('on');
		$('.state-box .tab-box .tab-box-list-gallery').hide().eq($('.tab-li li').index(this)).show()
	})

	var menu_t = $(".menu_nav a,#form-button,#form-button1");
	var menu_c = $(".tab-box-list");
	var menu_bg = $(".shadow-box");

	menu_t.each(function(index) {
		$(this).click(function() {
			$(this).siblings("a").removeClass("on");
			$(this).addClass("on");
			$(this).find('span').toggleClass("dow-up").siblings().removeClass("dow-up");
			var m_this = menu_c.eq(index);
			m_this.siblings("div").hide();
			m_this.toggle();

			if(m_this.is(':visible')) {
				$(this).addClass("on");
			} else {
				$(this).removeClass("on");
			}

			if(menu_c.is(':visible')) {
				menu_bg.removeClass('hidden');
				$('.menu_nav a.linear1').removeClass('linear1');
				$(this).parents('.forms-box-list > ul > li div').css('border-bottom', 0)
				$("html,body").css({
					"height": "100%",
					"overflow": "hidden"
				});

			} else {
				$('.menu_nav a.frist-clild').addClass('linear1');
				$(this).parents('.forms-box-list > ul > li div:not(.forms-box-list > ul > li:last-child div)').css('border-bottom', '1px solid #CCCCCC')
				menu_bg.addClass('hidden');
				$("html,body").css({
					"height": "auto",
					"overflow": "auto"
				});
			}
		});
	});
	menu_bg.click(function() {
		$(this).addClass('hidden');
		menu_t.removeClass("on");
		menu_c.hide();
		menu_t.removeClass("dow-up");
		//down_c.hide();
		$("html,body").css({
			"height": "auto",
			"overflow": "auto"
		});
	});

	$('.poup-history .cancel-btn').click(function() {
		$(this).parents('.poup-history').hide();
	})
	$('.poup-history .ok-btn').click(function() {
		$('.history-box').remove();
		$(this).parents('.poup-history').hide()
	})

	InitLimit($("#textarea"), 140, true, function(c) {
		if(c >= 0) {
			$("#pa").html("还能输入" + c + "个字");
		} else {
			$(".textbox p").html("字数已经足够啦");
		}
	});

	function InitLimit(txt, limit, isbyte, cb) {
		txt.keyup(function() {
			var str = txt.val();
			var charLen;
			var byteLen = 0;
			if(isbyte) {
				for(var i = 0; i < str.length; i++) {
					byteLen += 2;
				}
				charLen = Math.floor((limit - byteLen) / 2);
			} else {
				byteLen = str.length;
				charLen = limit - byteLen;
			}
			cb(charLen);
		});
	}

	$('#sex').click(function() {
		$('.sex-box-shadow').css({
			'opacity': '1',
			'visibility': 'visible'
		});
		$('body,html').css({
			'height:': '100%',
			'overflow': 'hidden'
		})
	})
	$('.radio-box input[type="radio"]').click(function() {
		var vals = $('.radio-box input[type="radio"]:checked').val();
		$('#sex').val(vals);
		$('.sex-box-shadow').css({
			'opacity': '0',
			'visibility': 'hidden'
		})
		$('body,html').css({
			'height:': 'auto',
			'overflow': 'auto'
		})
	})

	$('#sign').click(function() {
		$('.overbox').show();
		$('.disvisility').hide()
	})
	$('#getindex').click(function() {
		$('.overbox').hide();
		$('.disvisility').show()
	})

	$('#save').click(function() {
		$('.overbox').hide();
		$('.disvisility').show()
		$('#sign').val($('.textbox textarea').val())
	})
	
	
	$('.forms-box .forms-box-list .tab-box-list ul li').not('.contary-list > li').click(function(){
		$(this).parents('.forms-box-list > ul > li').find('input[name="btn-down"]').val($(this).text())
		$(this).parents('.forms-box-list > ul > li').find('input[name="btn-down"]').css('background','none')
	})
	
	$('.forms-box .preview-list ul li .close-img').click(function(){
		$(this).parents('.preview-list ul li').remove()
	})
})