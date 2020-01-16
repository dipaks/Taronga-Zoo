var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function() {
	Enabler.setProfileId(10491700);
    var devDynamicContent = {};

    devDynamicContent.TarongaZooDCOPhase1_300x250 = [{}];
    devDynamicContent.TarongaZooDCOPhase1_300x250[0]._id = 0;
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].unique_id = 1;
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].reporting_label = "Default";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].logo = "logo_m.png";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].logo_end = "logo_end.png";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].bg_image = "tiger.jpg";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].bg_transition = "Slide in from left";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].end_bg_image = "bg_end.png";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].end_bg_transition = "Slide in from bottom";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].bg_color = "background: #228346;";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text1 = "The only place<br>in sydney";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text1_styles = "36px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text2 = "you can come<br>meet a tiger";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text2_styles = "36px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text3 = "SAVE UP TO 20% OFF<br>ONLINE TICKETS*";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].text3_styles = "36px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].tnc = " *Conditions apply";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].tnc_styles = "12px\/#ffffff";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].cta_text = "BUY NOW";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].cta_styles = "18px\/#ffffff\/#02543f";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].leaf_color = "green";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].exitUrl = {};
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].exitUrl.Url = "https://taronga.org.au/sydney-zoo?utm_source=%esid!&utm_medium=display&utm_term=%epid!&utm_content=%ecid!&utm_campaign=brand&dpuid=%m";
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].isDefault = true;
    devDynamicContent.TarongaZooDCOPhase1_300x250[0].isActive = true;
    Enabler.setDevDynamicContent(devDynamicContent);
	
	politeLoadImages();
	dyeElementsToTemplate();
}


function dyeElementsToTemplate() {
	var dyGlobal = dynamicContent.TarongaZooDCOPhase1_300x250[0];
	
	var assetPath = "https://s0.2mdn.net/creatives/assets/3513012/"; //Doubleclick asset library folder
	var leaf = [];
	if (dyGlobal.leaf_color == "green") {
		leaf = ['green1.png','green2.png'];
	} else if (dyGlobal.leaf_color == "blue") {
		leaf = ['blue1.png','blue2.png'];
	} else if (dyGlobal.leaf_color == "red") {
		leaf = ['red1.png','red2.png'];
	} else {
		leaf = ['_blank.png','_blank.png'];
	}
	
	bgTransition = dyGlobal.bg_transition
	endBgTransition = dyGlobal.end_bg_transition
	t1.innerHTML = dyGlobal.text1;
	t2.innerHTML = dyGlobal.text2;
	t3.innerHTML = dyGlobal.text3;
	cta_copy.innerHTML = dyGlobal.cta_text;
	tnc.innerHTML = dyGlobal.tnc;
	
	bg_leaf1.src = assetPath+leaf[0];
	bg_leaf2.src = assetPath+leaf[1];
	bg_img.src = assetPath+dyGlobal.bg_image;
	bg_end_img.src = assetPath+dyGlobal.end_bg_image;
	logo_m.src = assetPath+dyGlobal.logo;
	logo_end.src = assetPath+dyGlobal.logo_end;
	
	bg_end.style.cssText = dyGlobal.bg_color;
	t1_style = dyGlobal.text1_styles.split(/[.,\/ -]/); //Array output
	t2_style = dyGlobal.text2_styles.split(/[.,\/ -]/);
	t3_style = dyGlobal.text3_styles.split(/[.,\/ -]/);
	cta_style = dyGlobal.cta_styles.split(/[.,\/ -]/);
	tnc_style = dyGlobal.tnc_styles.split(/[.,\/ -]/);
	
	t1.style.cssText = "font-size:" + t1_style[0] + "; color:" + t1_style[1] + "; font-family:" + t1_style[2];
	t2.style.cssText = "font-size:" + t2_style[0] + "; color:" + t2_style[1] + "; font-family:" + t2_style[2];
	t3.style.cssText = "font-size:" + t3_style[0] + "; color:" + t3_style[1] + "; font-family:" + t3_style[2];
	cta_copy.style.cssText = "font-size:" + cta_style[0] + "; color:" + cta_style[1];
	cta.style.cssText = "background-color:" + cta_style[2];
	tnc.style.cssText = "font-size:" + tnc_style[0] + "; color:" + tnc_style[1];
}

var images = {
  "bg_img": "images/bg_img.jpg",
  "bg_end_img": "images/bg_end.png",
  "logo_m": "images/logo_m.png",
  "logo_end": "images/logo_end.png",
  "bg_leaf1": "images/bg_leaf1.png",
  "bg_leaf2": "images/bg_leaf2.png",
};

function politeLoadImages(){ politeLoadAllImages(images, function(){ startAnim(); });}
function politeLoadAllImages(images, onComplete) {
  var loadCount = 0;
  var imagesToLoad = 0;
  function finish(){
    loadCount++;
    if (loadCount === imagesToLoad) { onComplete(); }
  }
  for (var id in images) { imagesToLoad++; }
  for (var id in images) {
    var preloadImg = document.getElementById(id);
    preloadImg.onerror = function(){ 
      if(this == bg_leaf1 || this == bg_leaf2 ){
        images["bg_leaf1"].setAttribute("src", "images/bg_leaf1.png");
        images["bg_leaf2"].setAttribute("src", "images/bg_leaf2.png");
      }else if(this == bg_img){
        this.setAttribute("src", "images/bg_img.jpg");
      }else{
        this.setAttribute("src", "images/_blank.png");
      }
      finish(); } 
    preloadImg.onload = function(){ finish(); }
    preloadImg.setAttribute("src", images[id]);
  }
}

function exitClickHandler() {
  Enabler.exitOverride("URL Exit", copy["exitURL"]);
}

function startAnim(){

  mainTl = new TimelineMax();
  
  var animTime = 1,
      linear = linear,
      animTypeOut = Power2.easeOut,
      animTypeIn = Power2.easeIn,
      offsetDist = 10,
      bannerLength = bannerContainer.clientWidth,
	  bannerHeight = bannerContainer.clientHeight,
      bgImageLength = bannerLength - bg_img.width,
	  bgImageHeight = bannerHeight - bg_img.height,
	  endImageLength = bannerLength - bg_end_img.width,
	  endImageHeight = bannerHeight - bg_end_img.height,
      startPosX, 
      endPosX,
	  startPosY,
      endPosY;
  
  var st1 = new SplitText(t1, {type:"lines"}),
      st2 = new SplitText(t2, {type:"lines"}),
      st3 = new SplitText(t3, {type:"lines"});
	
	var bgImg = {};
	var endImg = {};
	bgImg.pan = bgTransition;
	endImg.pan = endBgTransition;

	  if(bgImg.pan == "Slide in from bottom" ){
		bgImg.startPosY = bgImageHeight;
		bgImg.endPosY = 0;
	  } else if( bgImg.pan == "Slide in from top" ){
		bgImg.startPosY = 0;
		bgImg.endPosY = bgImageHeight;
	  } else if( bgImg.pan == "Slide in from left" ){
		bgImg.startPosX = 0;
		bgImg.endPosX = bgImageLength;
	   } else if( bgImg.pan == "Slide in from right" ){
		bgImg.startPosX = bgImageLength;
		bgImg.endPosX = 0;
	  } else{
		bgImg.startPosX = 0; bgImg.startPosY = 0; bgImg.endPosX = 0; bgImg.endPosY = 0;
	  }
	
	 if(endImg.pan == "Slide in from bottom" ){
		endImg.startPosY = endImageHeight+40;
		endImg.endPosY = 0;
	  } else if( endImg.pan == "Slide in from top" ){
		endImg.startPosY = -40;
		endImg.endPosY = endImageHeight;
	  } else if( endImg.pan == "Slide in from left" ){
		endImg.startPosX = -40;
		endImg.endPosX = endImageLength;
	   } else if( endImg.pan == "Slide in from right" ){
		endImg.startPosX = endImageLength+40;
		endImg.endPosX = 0;
	  } else{
		endImg.startPosX = 0; endImg.startPosY = 0; endImg.endPosX = 0; endImg.endPosY = 0;
	  }

	mainTl
    .add( 'setup', 0 )
    .set( bg_img, { x:bgImg.startPosX, y:bgImg.startPosY })
    .set( [bg_img, bg_end_img, bg_leaf1, bg_leaf2, t1, t2, t3], { alpha: 1  })
    .set( [st1.lines,st2.lines], { y: 10 })
    .set( [logo_end, st3.lines, cta ], { y: 20 })
    .set( [bg_end_img], { x:endImg.startPosX, y: endImg.startPosY })
    .set( cta , { x:'-50%' })
    .set( [bg_img, bg_end_img, bg_leaf1, bg_leaf2, t1, t2, t3, st1.lines, st2.lines, logo_end, st3.lines, cta, bg_end_img ], { force3D:true , z: 0.01, rotationZ:0.01 })
    
  
    .add('start', 0 )
  	.from( bg_img, 8, { x:bgImg.endPosX, y:bgImg.endPosY }, "start")
  	.from( bg_leaf1, 2, { y:50, x:-150, rotation:60, ease:Power2.easeOut, transformOrigin:'0% 100%' }, "start+=0.5")
  	.from( bg_leaf2, 2, { y:50, x:150, rotation:-60, ease:Power2.easeOut, transformOrigin:'100% 100%' }, "start+=0.5")
  	.to( logo_m, 0.5, { alpha: 1 }, "start")
  	
  	.add( "t1", "start+=1.5" )
  	.staggerTo( st1.lines, 1, { alpha: 1, y:0, ease:animTypeOut }, 0.2, "t1")
  		
  	.add( "t2", "t1+=3" )
  	.staggerTo( st1.lines, 0.5, { alpha: 0, y:-offsetDist, ease:animTypeIn }, 0.1, "t2-=0.5")
  	.staggerTo( st2.lines, 1, { alpha: 1, y:0, ease:animTypeOut }, 0.2, "t2")

  	.add( "endFade", "t2+=2.5" )
  	.staggerTo( st2.lines, 0.5, { alpha: 0, y:-offsetDist, ease:animTypeIn }, 0.1, "endFade")
  	
  	.add( "endframe", "endFade+=0.5" )
  	.to( bg_end, 1, { alpha: 1 }, "endframe")
  	.to( bg_end_img, 3, { x:endImg.endPosX, y:endImg.endPosY, ease: animTypeOut }, "endframe")
  	.to( logo_end, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframe+=0.5")
    .staggerTo( st3.lines, 1, { alpha: 1 , y:0, ease: animTypeOut }, 0.25,  "endframe+=0.75")
  	.to( cta, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframe+=1.25")
  	.to( tnc, 1, { alpha: 1 }, "endframe+=1.5")
	;

  clickthrough.onmouseover = function(){
    cta.classList.add("hover");
  }
	clickthrough.onmouseout = function(){
    cta.classList.remove("hover");
  }
}

//for different styling
function checkAlternative(){
//  copy.leaf = "capybara_design";
  if( copy.leaf == "capybara_design"){
    capybara_design();
  }
}

function capybara_design(){
  images.bg_end_img = "images/bg_end_capybara.png";
  document.getElementById("bannerContainer").classList.add("capybara");
  copy.leaf = "none";
}

window.onload = function () {
	boilerplate.loadFunction();
}