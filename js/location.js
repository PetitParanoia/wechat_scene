//记录当前页
var nowpage = 1;

$(document).ready(function() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(3 * height);

	$(".page").width(width);
	$(".page").height(height);
	//添加滑动监听事件
	$(".content").swipe({
		//当监听到滑动时执行下面方法
		//event事件，direction方向，distance距离，duration事件，fingerCount触屏点数
		swipe: function(event, direction, distance, duration, fingerCount) {
			if(direction == "up" && nowpage < 3) {
				nowpage += 1;
			} else if(direction == "down" && nowpage > 1) {
				nowpage -= 1;
			}
			var page = 1 - nowpage;
			$(".content").animate({
				top: page * 100 + "%"
			}, 1000, animationOfPage());
		}
	})
})

function buttonClickThis(obj) {
	obj.src = "img/bookOn.png";
	$(".page1-door").fadeIn(2000, function() {
		$(".page1-text1").fadeIn(1400, function() {
			$(".page1-text2").fadeIn(1400, function() {
				$(".page1-text3").fadeIn(1400, function() {
					$(".page1-text4").fadeIn(1400, function() {
						$(".page1-school").fadeIn(2000);
					});
				});
			});
		});
	});
}

function animationOfPage() {
	if(nowpage == 2) {

		$(".page2-spring").fadeIn(3000, function() {
			$(".page2-springWord").fadeIn(3000, function() {

				$(".page2-summer").fadeIn(3000, function() {
					$(".page2-summerWord").fadeIn(3000, function() {
						
						$(".page2-autumn").fadeIn(3000, function() {
							$(".page2-autumnWord").fadeIn(3000, function() {
								
								$(".page2-winter").fadeIn(3000, function() {
									$(".page2-winterWord").fadeIn(3000);
								});
							});
						});
					});
				});
			});
		});
	}
}

function buttonClick(obj) {
	obj.src = "img/bookOff.png";
	$(".page3-read").fadeIn(2000, function() {
		$(".page3-graduate").fadeIn(2000, function() {
			$(".page3-away1-1").fadeIn(200, function() {
			$(".page3-away1-2").fadeIn(200, function() {
			$(".page3-away1-3").fadeIn(200, function() {
			$(".page3-away1-4").fadeIn(200, function() {
			$(".page3-comma1").fadeIn(200, function()  {
			$(".page3-away1-5").fadeIn(200, function() {
			$(".page3-away1-6").fadeIn(200, function() {
			$(".page3-away1-7").fadeIn(200, function() {
			$(".page3-away1-8").fadeIn(200, function() {
			$(".page3-period1").fadeIn(200, function() {

				$(".page3-away2-1").fadeIn(200, function() {
				$(".page3-away2-2").fadeIn(200, function() {
				$(".page3-away2-3").fadeIn(200, function() {
				$(".page3-away2-4").fadeIn(200, function() {
			    $(".page3-away2-5").fadeIn(200, function() {
				$(".page3-comma2").fadeIn(200, function() {
				$(".page3-away2-6").fadeIn(200, function() {
				$(".page3-away2-7").fadeIn(200, function() {
				$(".page3-away2-8").fadeIn(200, function() {
				$(".page3-away2-9").fadeIn(200, function() {
				$(".page3-away2-10").fadeIn(200, function() {
				$(".page3-comma3").fadeIn(200, function() {
					
					$(".page3-away3-1").fadeIn(200, function() {
	                $(".page3-away3-2").fadeIn(200, function() {
	                $(".page3-away3-3").fadeIn(200, function() {
	                $(".page3-away3-4").fadeIn(200, function() {
	                $(".page3-away3-5").fadeIn(200, function() {
	                $(".page3-away3-6").fadeIn(200, function() {
	                $(".page3-away3-7").fadeIn(200, function() {
	                $(".page3-ellipsis").fadeIn(200, function() {
	                	
	                    $(".page3-away4-1").fadeIn(400, function() {
	                    $(".page3-away4-2").fadeIn(400, function() {
	                    $(".page3-away4-3").fadeIn(400, function() {
	                    $(".page3-period2").fadeIn(200);
				           });
				           });
				           });
				       });	
				       });	
				       });	
				       });	
				       });	
				       });	
				       });
				       });

				    });
					});
                    });
				    });
				    });
				    });
					});
                    });
   		     		});
				    });
				    });
					});
					
			    });		
			    });
	     		});
		    	});
			    });
			    });
			    });
			    });
			    });
			    });
		});
	});

}

function musicBtnClick(obj) {
	var myMusic = document.getElementById("myMusic");
	//当播放器暂停时
	if(myMusic.paused) {
		myMusic.play();
		obj.src = "img/musicBtn.png";
	} else {
		myMusic.pause();
		obj.src = "img/musicBtnOff.png";
	}
}