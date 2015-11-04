// initial positioning of folder tab
function folderHeight() {
    screenHeight = window.innerHeight;
    $(".top-folder").css("margin-top", screenHeight / 2);
    
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
	margin = height / 4;
	$(target).css("margin-top", margin / 2);
	$(target).css("margin-bottom", margin / 2);
}

function elasticPlacing() {
	var width = window.innerWidth;
	console.log(window.innerWidth);
	paragraphGrid(".pdp-1", 800);
	paragraphGrid(".pdp-2", 800);
	paragraphGrid(".pdp-3", 800);
	if (772 <= width && width < 1200) {
		$(".container").css("width", "90%");
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "50%");
		paragraphGrid("#introduction-paragraph", window.innerHeight);
		// $(".company-page").css("height", "50%");
	} else if (width < 772) {
		paragraphGrid("#introduction-paragraph", window.innerHeight);
		$(".project-picture").css({"width": "100%", "height": window.innerHeight / 2 });
		$(".project-description").css({"width": "100%", "height": window.innerHeight / 2});
	    $(".project-description-paragraph").css("padding-top", 0);
	    $(".project-description-paragraph").css("padding-bottom", 0);
		$(".project-page").css("height", "100%");
		// $(".company-page").css("height", "75%");

	} else if (1200 <= width) {
		$(".container").css("width", "70%");
		paragraphGrid("#introduction-paragraph", window.innerHeight);
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "400px");
		// $(".company-page").css("height", "50%");

	}	
}

function heightPlacing() {
	var height = window.innerHeight;
	if (height <= 650) {
		$(".introduction").css("display", "none");
	} else if (height > 650) {
		$(".introduction").css("display", "block");
	}
}

$(document).ready(function() {
	folderHeight();
	footerGrid(".links", screenHeight / 2);
});

$(window).resize(function() {
    folderHeight();
    footerGrid(".links", screenHeight / 2);
    heightPlacing();
    elasticPlacing();

});

// project picture holder