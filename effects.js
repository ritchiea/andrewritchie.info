$(function () { // do this and protect scope rather than doc ready
  
  $("#dev").hover(

     function() { //devColorChange
    $(".top").animate({
              backgroundColor: "#ABAB65"
          }, 500 );
    $(".second").animate({
              backgroundColor: "#CCCCCC"
          }, 500 );
    $(".third").animate({
              backgroundColor: "#ABAB65"
          }, 500 );          
    $(".bottom").animate({
                 backgroundColor: "#CCCCCC"
          }, 500 );          
  } ); // end of hover dev

   $("#write").hover(

     function() {  // whiteColorChange
    $(".top").animate({
              backgroundColor: "#CCCCCC"
          }, 500 );
    $(".second").animate({
              backgroundColor: "#521019"
          }, 500 );
    $(".third").animate({
              backgroundColor: "#CCCCCC"
          }, 500 );         
    $(".bottom").animate({
                 backgroundColor: "#521019"
          }, 500 );    

     }); // end of hover write

   $("#design").hover(

     function() {   //designColorChange
    $(".top").animate({
              backgroundColor: "#333745"
          }, 500 );
    $(".second").animate({
              backgroundColor: "#CCCCCC"
          }, 500 );
    $(".third").animate({
              backgroundColor: "#333745"
          }, 500 );         
    $(".bottom").animate({
                 backgroundColor: "#CCCCCC"
          }, 500 );
     }); // end of hover design

}); // end of jquery
