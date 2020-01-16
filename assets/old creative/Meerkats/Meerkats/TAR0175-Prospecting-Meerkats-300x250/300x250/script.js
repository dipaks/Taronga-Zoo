window.onload = function() {
    init();
};

function init() {

    // load tweenmax - then start anim
    loadScript("https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js", politeLoadImages);    }

// function lo load external js library

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { // ie
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// get elements
var mainTl;
var fadeTime;
var animTimeIn;
var animTimeOut;
var delayOffset;
var animTypeIn;
var animTypeOut;
var animOffsetDist;

function politeLoadImages() {
    console.log("politeLoadImages");
    // Call the function
    politeLoadAllImages(images, function () {
        console.log("politeLoadDemImages");
        // Do whatever you need to do when all images are loaded and assigned to their img tags....
        console.log("allImagesAreLoaded");
        startAnim();
    });
}

// Object with img ids and urls
// Add each image id and the url that you want the image tag to point too
var images = {

        "bg_img": "images/bg_img.jpg",
        "bg_leaf1": "images/bg_leaf1.png",
        "bg_leaf2": "images/bg_leaf2.png",
        "m_logo": "images/mini_logo.png",
        "t1a": "images/t1a.png",
        "t1b": "images/t1b.png",
        "t2": "images/t2.png",
        "end_bg": "images/end_bg.gif",
        "end_logo": "images/end_logo.png",
        "end_txt": "images/end_txt.png",
        "end_cta": "images/end_cta.png",
        "end_cta_arrow": "images/end_cta_arrow.png",
        "end_tc": "images/end_tc.png"

};

function politeLoadAllImages(images, onComplete) {

    // Vars to keep track of load count
    var loadCount = 0;
    var imagesToLoad = 0;
    // Determine how many images are to be loaded
    for (var id in images) {
        imagesToLoad++;
    }

    console.log("imagesToLoad : " + imagesToLoad);

    // Iterate through the images to be loaded and load the url to an image object
    for (var id in images) {
        var preloadImgTag = new Image();
        // The on load handler for each image object
        preloadImgTag.onload = function () {
            // Increment the load count
            loadCount++;
            if (loadCount === imagesToLoad) {
                for (var id in images) {
                    // assign image to their associated img id src
                    document.getElementById(id).setAttribute("src", images[id]);
                }
                // Call the on complete call back if theres one to call
                if (onComplete) onComplete();
            }
        }
        // Initiate the load by setting the src on each image object
        preloadImgTag.src = images[id];
    }
}

function startAnim() {
    fadeTime = 2;
    animTimeIn = 1;
    animTimeOut = 1;
    delayOffset = 0.2;
    animTypeIn = Power1.easeIn
    animTypeOut = Power1.easeOut
    animOffsetDist = -10;
	mainTl = new TimelineMax();

    frame1();
}

function frame1(){
    console.log("frame1");

	mainTl
	.set( bg_img, { x:0, y:-30 })
	.set( [bg_img, bg_leaf1, bg_leaf2], { alpha: 1 })
	.set( [t2,t1a,t1b], { y: 10 })
	.set( [end_logo, end_txt, cta ], { y: 20 })
	
	
	
	.add('start', 0 )
	.from( bg_img, 8, { y:0, x:0, transformOrigin:'0% 0%'  }, "start")
	.from( bg_leaf1, 2, { y:50, x:-150, rotation:60, ease:Power2.easeOut, transformOrigin:'0% 100%' }, "start+=0.5")
	.from( bg_leaf2, 2, { y:50, x:150, rotation:-60, ease:Power2.easeOut, transformOrigin:'100% 100%' }, "start+=0.5")
	.to( m_logo, 1, { alpha: 0.75 }, "start")
	
	
	.add( "t1", "start+=1.5" )
	.to( t1a, 1, { alpha: 1, y:0 }, "t1")
	.to( t1b, 1, { alpha: 1, y:0 }, "t1+=0.25")
		
		
	.add( "t2", "t1+=2.5" )
	.to( t1a, 1, { alpha: 0, y:animOffsetDist }, "t2")
	.to( t1b, 1, { alpha: 0, y:animOffsetDist }, "t2")
	.to( t2, 1, { alpha: 1, y:0 }, "t2+=0.5")
	
	
	.add( "endFade", "t2+=3" )
	.to( t2, 1, { alpha: 0, y:animOffsetDist }, "endFade")
	
	
	.add( "endframe", "endFade+=0.5" )
	.to( end_bg, 1, { alpha: 1 }, "endframe")
	.add( "endframetxt", "endframe" )
	.to( end_logo, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframetxt+=0.5")
	.to( end_txt, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframetxt+=0.75")
	.to( cta, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframetxt+=1")
	.to( end_tc, 1, { alpha: 1 }, "endframetxt+=1.5")
	
	;

	
	
	clickthrough.onmouseover = function(){
		TweenMax.to(end_cta_arrow ,0.2,{x:3});		
		TweenMax.set(end_cta, {
		  '-webkit-filter': 'brightness(110%)',
		  'filter': 'brightness(110%)'
		});
	}
	
	clickthrough.onmouseout = function(){
		TweenMax.to(end_cta_arrow ,0.2,{x:0});		
		TweenMax.set(end_cta, {
		  '-webkit-filter': 'brightness(100%)',
		  'filter': 'brightness(100%)'
		});
	}

}



