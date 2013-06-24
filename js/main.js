$(document).ready(function() {

	$(".bg-image").fullScreenImage(2040, 1409);
	$("html, body, .frame").height($(window).height());

	// Disable the tab key

	$('body').on('keydown', function(e) {
		if (e.keyCode == 9)
			e.preventDefault()
	});

	var firstName;
	var currentSectionClass;

	setSiteSize();

	$(window).resize(function() {
		setSiteSize();
	});

	if ($(".characterframe").hasClass("currentelement")) {
		$("html, body").scrollTop($(window).height());
	} else if ($(".professionscontainer").hasClass("currentelement")) {
		$("html, body").scrollTop($(window).height() * 2);
	}

	//------ speech bubble ---------------

	$(".wrapspeachbubble ul").each(function() {
		function InOut(elem) {
			elem.fadeIn(300).delay(4000).fadeOut(function() {
				//console.log(elem.next().length);
				if (elem.next().length > 0)// if there is a next element
				{
					InOut(elem.next());
				}// use it
				else {
					InOut(elem.siblings(':first'));
				} // if not, then use go back to the first sibling
			});
		}


		$(this).children().hide();
		InOut($(this).children(":first"));
	});

	//----- slider values ----------------

	$(function() {
		$(".slider-range-min-s1").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s1.amount").val(ui.value + "%");
				$("#s1.amount").attr("value", ui.value + "%");
				$("#persona1_label").addClass("ui-state-active");
			}
		});
		$("#s1").val($(".slider-range-min-s1").slider("value") + "%");
	});

	$(function() {
		$(".slider-range-min-s2").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s2.amount").val(ui.value + "%");
				$("#s2.amount").attr("value", ui.value + "%");
				$("#persona2_label").addClass("ui-state-active");
			}
		});
		$("#s2").val($(".slider-range-min-s2").slider("value") + "%");
	});

	$(function() {
		$(".slider-range-min-s3").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s3.amount").val(ui.value + "%");
				$("#s3.amount").attr("value", ui.value + "%");
				$("#persona3_label").addClass("ui-state-active");
			}
		});
		$("#s3").val($(".slider-range-min-s3").slider("value") + "%");

	});

	$(function() {
		$(".slider-range-min-s4").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s4.amount").val(ui.value + "%");
				$("#s4.amount").attr("value", ui.value + "%");
				$("#persona4_label").addClass("ui-state-active");
			}
		});
		$("#s4").val($(".slider-range-min-s4").slider("value") + "%");
	});

	$(function() {
		$(".slider-range-min-s5").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s5.amount").val(ui.value + "%");
				$("#s5.amount").attr("value", ui.value + "%");
				$("#persona5_label").addClass("ui-state-active");
			}
		});
		$("#s5").val($(".slider-range-min-s5").slider("value") + "%");
	});

	$(function() {
		$(".slider-range-min-s6").slider({
			range : "min",
			value : 50,
			min : 0,
			max : 100,
			slide : function(event, ui) {
				$("#s6.amount").val(ui.value + "%");
				$("#s6.amount").attr("value", ui.value + "%");
				$("#persona6_label").addClass("ui-state-active");
			}
		});
		$("#s6").val($(".slider-range-min-s6").slider("value") + "%");
	});

	//----- welcome form ----------------------------------------------------------

	$("#startbtn").on("click", function() {
		var firstName = $("input[id=fName]").val();
		//alert(firstName);

		$("#welcomepage").fadeOut(200);
		$(".choosecharacter").fadeIn(200);

		//add fName value into text and to form input field
		$(".firstnameintext").append(firstName);
		$("#fNameFilled").val(firstName);
	});

	//----- character choice page character nav ----------------------------------

	$(".characternav ul li").click(function(e) {
		e.preventDefault();

		currentSectionClass = $(this).find('a').attr('href');
		if ($("#foldup").is(":visible")) {
			$("#foldup").animate({
				top : -500 + "px"
			}, 400, 'easeInExpo');
		}

		if ($(".horisontalpointer").is(":hidden")) {
			$(".horisontalpointer").fadeIn(100);
		}

		$(".characterintro, .characterframe").hide();
		$(".characternav").animate({
			top : 0
		}, 300, 'easeOutExpo');
		//$(".characternav ul li.activeguy img.spotlight").fadeOut(300);
		if ($("html").hasClass("lt-ie9")) {
			$(".characternav ul li.activeguy img.spotlight").css("display", "none");
		} else {
			$(".characternav ul li.activeguy img.spotlight").fadeOut(300);
		}
		$($(".characterintro" + currentSectionClass)).show();
		$(".characternav ul li").removeClass("activeguy");
		$(this).addClass("activeguy");
		$(this).find('span').css({
			'background-position' : '0 0'
		});
		$(".characternav ul li").not('.activeguy').css('width', '15%');
		$(".characternav ul li.activeguy").css('width', '32.50%');
		//$(".characternav ul li.activeguy img.spotlight").fadeIn(300);
		if ($("html").hasClass("lt-ie9")) {
			$(".characternav ul li.activeguy img.spotlight").css("display", "block");
		} else {
			$(".characternav ul li.activeguy img.spotlight").fadeIn(300);
		}

		/* horisontal pointer*/
		setTimeout(function() {
			var activequyPos = $(".characternav ul li.activeguy").offset().left;
			var containerPos = $(".characternav ul").offset().left;
			var activeguyWidth = $(".characternav ul li.activeguy").width() / 2 - 50;
			$(".horisontalpointer").animate({
				'left' : activequyPos - containerPos + activeguyWidth
			}, 300, 'easeOutExpo');
		}, 350);

		$(".quitbtn").hide();
		$(".finishedbtn").show();

		$(".slidercontainer_wrapper").css({
			"top" : 0
		});
	});

	//----- character name bubble hover ----------------------------------

	$(".characternav ul li").hover(function() {
		$(this).not(".activeguy").find('span').css({
			'background-position' : '0 -59px'
		});
	}, function() {
		$(this).not(".activeguy").find('span').css({
			'background-position' : '0 0'
		});
	});

	//----- scroll to character description ----------------------------------

	$(".scrolldownbtn").click(function(e) {
		e.preventDefault();
		$(".viewcharactersbtn, .backbtn").show();
		$($(".characterframe" + currentSectionClass)).css({
			"display" : "block",
			"top" : $(window).height()
		});
		$(".choosecharacter").animate({
			top : -1500
		}, 800, 'easeOutExpo');
		$($(".characterframe" + currentSectionClass)).animate({
			top : 0
		}, 800, 'easeOutExpo');
	});

	//----- loading professions htmls --------------------------------------------

	$(".optionscontainer li a, .relatedareas li a").on("click", function(e) {
		e.preventDefault();
		$(".optionscontainer li a, .relatedareas li a").removeClass("clicked");
		$(this).addClass("clicked");
		var professionPage = $(this).attr('href');
		$(".professionscontainer").css({
			"display" : "block",
			"top" : $(window).height()
		});
		$(".loadprofession").load(professionPage, null, function() {
			if ($(".clicked").parents(".doercareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-doer.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/doer-panel.jpg") no-repeat scroll left top');
			} else if ($(".clicked").parents(".creatorcareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-creator.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/creator-panel.jpg") no-repeat scroll left top');
			} else if ($(".clicked").parents(".thinkercareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-thinker.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/thinker-panel.jpg") no-repeat scroll left top');
			} else if ($(".clicked").parents(".helpercareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-helper.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/helper-panel.jpg") no-repeat scroll left top');
			} else if ($(".clicked").parents(".persuadercareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-persuader.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/persuader-panel.jpg") no-repeat scroll left top');
			} else if ($(".clicked").parents(".organizercareer").length == 1) {
				$(".loadprofession #intro-stats img").replaceWith('<img src="appfiles/placeholder-organizer.jpg" alt="" />');
				$("#promo-area").css('background', 'url("appfiles/organiser-panel.jpg") no-repeat scroll left top');
			}
		});
		$(".characterframe").animate({
			top : -1500
		}, 800, 'easeOutExpo');
		$(".professionscontainer").animate({
			top : 0
		}, 800, 'easeOutExpo');
		$(".frame").removeClass("currentelement");
		$(".professionscontainer").addClass("currentelement");
		$(".backbtn").removeClass("stepbackone").addClass("stepbacktwo");
	});

	$(".loadprofession").on("click", ".green-button", function(e) {
		e.preventDefault();
		$(".characterframe").animate({
			top : 0
		}, 800, 'easeOutExpo');
		$(".professionscontainer").scrollTop($(".professionscontainer").offset().top);
		$(".professionscontainer").animate({
			top : 1500
		}, 800, 'easeOutExpo', function() {
			$(this).hide()
		});

		$(".backbtn").removeClass("stepbacktwo");
		$(".backbtn").addClass("stepbackone");
	})
	//----- back btn on characters ----------

	$(".backbtn").click(function(e) {
		e.preventDefault();

		if ($(this).hasClass("stepbackone")) {
			$(".slidercontainer_wrapper").animate({
				"top" : 0
			}, 500, 'easeOutExpo');
			$(".backbtn").removeClass("stepbackone");
			$(".loadprofession").html("");
		} else if ($(this).hasClass("stepbacktwo")) {
			$(".characterframe").animate({
				top : 0
			}, 800, 'easeOutExpo');
			$(".professionscontainer").scrollTop($(".professionscontainer").offset().top);
			$(".professionscontainer").animate({
				top : 1500
			}, 800, 'easeOutExpo', function() {
				$(this).hide()
			});
			$(".backbtn").removeClass("stepbacktwo");
			$(".backbtn").addClass("stepbackone");
			$(".frame").removeClass("currentelement");
			$(".characterframe").addClass("currentelement");
		} else {
			$(".choosecharacter").animate({
				top : 0
			}, 800, 'easeOutExpo');
			$($(".characterframe" + currentSectionClass)).animate({
				top : 1500
			}, 800, 'easeOutExpo', function() {
				$(this).hide()
			});
			$(".viewcharactersbtn, .backbtn").hide();
		}
	});

	$(".backfromhelpbtn").click(function(e) {
		e.preventDefault();

		if ($(this).hasClass("stepbackone")) {
			$(".slidercontainer_wrapper").animate({
				"top" : 0
			}, 500, 'easeOutExpo');
			$(".backbtn").removeClass("stepbackone");
		}
	});

	$(".viewcharactersbtn").click(function(e) {
		e.preventDefault();
		$(".choosecharacter").animate({
			top : 0
		}, 800, 'easeOutExpo');
		$($(".characterframe" + currentSectionClass)).animate({
			top : 1500
		}, 800, 'easeInExpo').hide();
		$(".professionscontainer").animate({
			top : 1500
		}, 800, 'easeOutExpo', function() {
			$(this).hide()
		});
		$(".viewcharactersbtn, .backbtn").hide();
	});

	//----- scroll to career options ----------------------------------

	$(".careeroptionsbtn").click(function(e) {
		e.preventDefault();
		$(".slidercontainer_wrapper:visible").animate({
			top : -$(".options:visible").position().top
		}, 500, 'easeOutExpo');
		$(".viewcharactersbtn, .backbtn").show();
		$(".backbtn").addClass("stepbackone");
	});

	//----- need help fading ----------------------------------

	$(".needhelpbtn").click(function(e) {
		e.preventDefault();
		$("#needhelp").fadeIn(300);
		$(".needhelp_characters").height($(".needhelp_characters img").height() * 0.8);
		$("#helpheader").show();
		$(".backfromhelpbtn").show();
	});

	$(".backfromhelpbtn").click(function(e) {
		e.preventDefault();
		$("#needhelp").fadeOut(300);
		$("#helpheader").hide();
		$(".backfromhelpbtn").hide();
	});

	//-----the checkboxes ------------------------------------------

	$(function() {
		$("#shelvespage").buttonset();
	});

	//----- setup the form data into an array ---------------------

	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	};

	//----- slider control ----------------------------------------

	$(".finishedbtn").click(function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop : 0
		}, 10);
		$(".frame").fadeOut(200);
		$(".sliderwrapper").fadeIn(300);
		$(".finishedbtn").hide();
		$(".quitbtn").show();
		$("#sliderheader").show();
		$(".sliderhelpbtn").show();
	});

	$(".sendmemypicbtn").click(function(e) {
		e.preventDefault();
		if ($("label.ui-state-active").length < 1) {
			$("#alert").fadeIn(200);
		} else {
			$(".slider").animate({
				"left" : $(".slider").offset().left - $("#formpage").offset().left
			}, 500, 'easeOutExpo');
			$(".slideritem").removeClass("activeslide");
			$(".slideritem").removeClass("activeslide");
			$("#formpage").addClass("activeslide");
			$(".sliderbackbtn").removeClass("closeslider hidden").addClass("backfromform");
		};
	});

	$("#email").on('blur', function() {
		if (!isValidEmailAddress($("#email").val())) {
			$("#alert h3").html("Please check your email address");
			$("#alert").fadeIn();
		}
	});

	$("#finalformsubmit").click(function(e) {
		e.preventDefault();
		var scrollEndSide = $("#lastpage").offset().left
		$(".slider").animate({
			"left" : $(".slider").offset().left - scrollEndSide
		}, 500, 'easeOutExpo');
		$(".slideritem").removeClass("activeslide");
		$("#lastpage").addClass("activeslide");
		$(".sliderbackbtn").removeClass("backfromform").addClass("backfromlastpage");
		$(".sliderbackbtn").hide();

		//----- send data to Unitec Database -----------------------------------------

		// Get the date

		function ISODateString(d) {
			function pad(n) {
				return n < 10 ? '0' + n : n
			}

			return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + ' ' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds())
		}

		var d = new Date();
		$("#date").val(ISODateString(d));

		// tidy up the % marks :(

		$("#s6").attr('value').replace("%", '');

		// gather all the form data

		var dataToSend = JSON.stringify($('form').serializeObject());
		var url = 'http://staging.designworks.co.nz/unitec-api/unitec-api.php';

		//console.log(dataToSend);

		$.post(url, dataToSend, function(data, textStatus) {
			//data contains the JSON object
			//textStatus contains the status: success, error, etc

		}, "jsonp");

		//----- hide guys on last page ----------------------------------------------------

		$(".guysonlastpage").hide();

		// set up an array of the sliders
		var sliderVals = new Array();

		sliderVals[0] = $("#s1").val();
		sliderVals[1] = $("#s2").val();
		sliderVals[2] = $("#s3").val();
		sliderVals[3] = $("#s4").val();
		sliderVals[4] = $("#s5").val();
		sliderVals[5] = $("#s6").val();

		// sort the arrau so we pick the three highest
		sliderVals.sort().reverse();

		for ( i = 1; i < 7; i++) {

			if ($("#persona" + i + "_label").hasClass("ui-state-active")) {

				if ($("#s" + i).val() == sliderVals[0]) {
					$(".guysonlastpage:eq(" + (i - 1) + ")").addClass("finalthree");
				}
				if ($("#s" + i).val() == sliderVals[1]) {
					$(".guysonlastpage:eq(" + (i - 1) + ")").addClass("finalthree");
				}
				if ($("#s" + i).val() == sliderVals[2]) {
					$(".guysonlastpage:eq(" + (i - 1) + ")").addClass("finalthree");
				}
			}
		}

		// show the three highest
		$(".finalthree").show();

	});

	$(".sliderbackbtn").click(function(e) {
		e.preventDefault();
		if ($(this).hasClass("closeslider")) {
			$(".sliderwrapper").fadeOut(200);
			$("#sliderheader").hide();
			$(".choosecharacter").css({
				"top" : 0,
				"display" : "block"
			});
			$($(".characterframe" + currentSectionClass)).animate({
				top : 1500
			}, 800, 'easeOutExpo', function() {
				$(this).hide()
			});
			$(".viewcharactersbtn, .backbtn, .quitbtn").hide();
			$(".finishedbtn").show();
		} else if ($(this).hasClass("backfromform")) {
			$(".slider").animate({
				"left" : $(".slider").offset().left - $("#shelvespage").offset().left
			}, 500, 'easeOutExpo');
			$(".sliderbackbtn").removeClass("backfromform").addClass("closeslider");
			$("#formpage").removeClass("activeslide");
			$("#shelvespage").addClass("activeslide");
		}
	});

	$(".okbtn").click(function(e) {
		e.preventDefault();

		$("#alert").fadeOut(200);
	});

	//----- resizing elements with window ----------------------------------------

	function setSiteSize() {
		if ($(window).height() >= 750) {
			$(".frame").height($(window).height());
			$(".frame:not('.professionscontainer, #needhelp')").css("overflow-y", "hidden");
		} else {
			$(".frame").height($(window).height());
			$(".frame").css("overflow-y", "scroll");
		};

		if ($(window).width() < 768) {
			$(".sliderwrapper, .slideritem").width(768);
		} else {
			$(".sliderwrapper, .slideritem").width($(window).width());
		}
		$(".sliderwrapper, .slideritem").height($(window).height());
		$(".slider").width($(".slideritem").length * $(window).width());
		if ($(".slider").is(":visible")) {
			var scrollEndSide = $(".activeslide").offset().left
			$(".slider").css({
				"left" : $(".slider").offset().left - scrollEndSide
			});
		};

	}; //end of setSiteSize function

});
//end of $(document).ready(function()