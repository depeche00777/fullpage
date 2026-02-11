/*
var myFullpage = new fullpage("#fullpage", {
  responsiveWidth: 768,

  // Uncomment to use a breakpoint based on height instead
  // responsiveHeight: 900,  

  // Optional
  anchors: ["s1", "s2", "s3", "s4", "s5"],
  menu: "#menu",
  scrollBar: true,

  // Navigation for horizontal slides
  slidesNavigation: true,
  slidesNavPosition: 'bottom', // Default

  navigation: true,
  navigationPosition: 'left', // Default -right
  navigationTooltips: ['First Section', 'Second Section', 'Third Section', '이력서', '연락처'],

  //화면을 중간에 놔도 섹션별로 꽉 차게
  fitToSection: true,
  fitToSectionDelay: 600,


  
  // callback
  afterResponsive: function (isResponsive) {
    console.log("After Responsive");
  },
});
*/

new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    
    anchors: ["s1", "s2", "s3", "s4", "s5"],

    navigation:true,
    navigationPosition:'left',
    navigationTooltips:['Home','WebPages','Photos','Resume','Contact'],

    controlArrows: false,
    slidesNavigation:true,
    slidesNavPosition:'bottom',
    menu: '#menu',
    scrollingSpeed: 1000,

    //responsiveWidth:800,  //너비 800이하에선 일반 스크롤 바
    scrollBar: true,
});
