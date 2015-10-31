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
});

// paragraph gridding
function paragraphGrid(target, height) {
    paragraphHeight = $(target).height();
    console.log(paragraphHeight);
    padding = height / 2 - paragraphHeight
    $(target).css("padding-top", padding / 2);
    $(target).css("padding-bottom", padding / 2);
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
	if (772 <= width && width < 1200) {
		$(".container").css("width", "90%");
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "50%");
		paragraphGrid("#introduction-paragraph", screenHeight);
		paragraphGrid(".pdp-1", screenHeight);
		paragraphGrid(".pdp-2", screenHeight);
		paragraphGrid(".pdp-3", screenHeight);
		$(".company-page").css("height", "50%");
	} else if (width < 772) {
		$(".project-picture").css({"width": "100%", "height": window.innerHeight / 2 });
		$(".project-description").css({"width": "100%", "height": window.innerHeight / 2});
	    $(".project-description-paragraph").css("padding-top", 0);
		$(".project-page").css("height", "100%");
		$(".company-page").css("height", "75%");

	} else if (1200 <= width) {
		$(".container").css("width", "70%");
		paragraphGrid("#introduction-paragraph", screenHeight);
		paragraphGrid(".pdp-1", screenHeight);
		paragraphGrid(".pdp-2", screenHeight);
		paragraphGrid(".pdp-3", screenHeight);
		$(".project-picture").css("width", "50%");
		$(".project-description").css("width", "50%");
		$(".project-page").css("height", "50%");
		$(".company-page").css("height", "50%");

	}	
}

$(document).ready(function() {
	folderHeight();
	companyGrid(".company-container", screenHeight / 2);
	footerGrid(".links", screenHeight / 2);
	elasticPlacing();
});

$(window).resize(function() {
    folderHeight();
    companyGrid(".company-container", screenHeight / 2);
    footerGrid(".links", screenHeight / 2);
    elasticPlacing();

});

// project picture holder