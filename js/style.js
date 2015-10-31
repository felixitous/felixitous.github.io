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

folderHeight();
paragraphGrid("#introduction-paragraph", screenHeight);
paragraphGrid(".project-description-paragraph", screenHeight);
companyGrid(".company-container", screenHeight / 2);
footerGrid(".links", screenHeight / 2);

$(window).resize(function() {
    folderHeight();
    paragraphGrid("#introduction-paragraph", screenHeight);
    paragraphGrid(".project-description-paragraph", screenHeight);
    companyGrid(".company-container", screenHeight / 2);
    footerGrid(".links", screenHeight / 2);

});

// project picture holder