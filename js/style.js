// initial positioning of folder tab
function folderHeight() {
    screenHeight = window.innerHeight;
    $(".top-folder").css("margin-top", screenHeight / 2);
    
}

// paragraph gridding
function paragraphGrid(target, height) {
    paragraphHeight = $(target).height();
    padding = (height / 2) - paragraphHeight
    padding = padding / 2
    if (padding <= 30) {
    	padding = 50
    }
    $(target).css("padding-top", padding);
    $(target).css("padding-bottom", padding);
}

//company gridding
function companyGrid(target, height) {
	padding = height / 2;
    $(target).css("padding-top", padding / 2);
    $(target).css("padding-bottom", padding / 2);
    $(target).css("height", height - padding);
}

//footer gridding
function footerGrid(target, height) {
	linkHeight = $(target).height();
	margin = height - linkHeight;
	$(target).css("margin-top", margin / 2);
	$(target).css("margin-bottom", margin / 2);
}

function projectSelection() {
	$(".project-picture-holder").mouseenter(function() {
		TweenMax.to(this, 0.3, {
			borderColor: "black"
		});
	});
	$(".project-picture-holder").mouseleave(function() {
		TweenMax.to(this, 0.3, {
			borderColor: "transparent"
		});
	});
}

function elasticPlacing() {
	var width = window.innerWidth;
	paragraphGrid(".pdp-1", 800);
	paragraphGrid(".pdp-2", 800);
	paragraphGrid(".pdp-3", 800);
	if (772 <= width && width < 1200) {
		$(".container").css("width", "90%");
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "50%");
		paragraphGrid("#introduction-paragraph", window.innerHeight);
	} else if (width < 772) {
		paragraphGrid("#introduction-paragraph", window.innerHeight);
		$(".project-picture").css({"width": "100%", "height": window.innerHeight / 2 });
		$(".project-description").css({"width": "100%", "height": window.innerHeight / 2});
	    $(".project-description-paragraph").css("padding-top", 0);
	    $(".project-description-paragraph").css("padding-bottom", 0);
		$(".project-page").css("height", "100%");

	} else if (1200 <= width) {
		$(".container").css("width", "70%");
		paragraphGrid("#introduction-paragraph", window.innerHeight);
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "400px");
	}	
}

function redirect() {
	$(".voyager-picture").click(function() {
		window.location.href = "http://www.voyagerconsulting.org"
	});
	$(".decal-picture").click(function() {
		window.location.href = "http://decal.herokuapp.com"
	});
	$(".mousehunt-picture").click(function() {
		window.location.href = "https://github.com/felixitous/automation"
	});
	$(".fa-linkedin").click(function() {
		window.location.href = "https://www.linkedin.com/in/felixwenshanliu"
	});
	$(".fa-facebook-official").click(function() {
		window.location.href = "https://www.facebook.com/DenimJacketsArentDeceiving"
	});
	$(".fa-github").click(function() {
		window.location.href = "https://github.com/felixitous"
	});
	$(".fa-envelope").click(function() {
		window.location.href = "mailto:felixmbx@gmail.com"
	});
}

function footerHover() {
	var target = $(".custom-link")

	$(target).mouseenter(function() {
		TweenMax.to(this, 0.5, {
			color: '#74AFAB'
		});
	});

	$(target).mouseleave(function() {
		TweenMax.to(this, 0.5, {
			color: "#FFFDEF"
		});
	});
}


function heightPlacing() {
	var height = window.innerHeight;
	if (height <= 650) {
		$(".introduction").css("display", "none");
	} else if (height > 650) {
		$(".introduction").css("display", "block");
	}
}

// main page arrow down animation
$(window).load(function() {
    var target = $(".custom-arrow");
    TweenMax.to(target, 1, {
        bottom: 10,
        opacity: 1,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to(".loading-background", 0.3, {
    	opacity: 0,
    	display: "none"
    });
	elasticPlacing();
	heightPlacing();
});

$(document).ready(function() {
	redirect();
	folderHeight();
	footerGrid(".links", 200);
	projectSelection();
	footerHover();
});

$(window).resize(function() {
    folderHeight();
    footerGrid(".links", 200);
    heightPlacing();
    elasticPlacing();

});

function containerAnimation(target) {
	TweenMax.to(target, 1, {
		opacity: 1
	});
};

containerSelection = $('.project-page');

function initialDisplay() {
	var scrollValue = $(window).scrollTop()
	while (containerSelection.offset().top < scrollValue) {
		containerAnimation(containerSelection.get(0));
		containerSelection = containerSelection.next()
	}
}

initialDisplay()

$(window).scroll(function() {
	var scrollValue = $(window).scrollTop();
	console.log(containerSelection.offset().top);
	if (containerSelection.offset().top - 500 < scrollValue) {
		containerAnimation(containerSelection.get(0));
		containerSelection = containerSelection.next()
	};
})





