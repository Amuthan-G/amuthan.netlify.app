
$("button").click(function(){
    var bGColor = $(".subjects").css("background-color");
    if(bGColor == "rgb(0, 0, 255)")
    $(".subjects").css("background-color","orange");
else
$(".subjects").css("background-color","blue");
    });

$(document).keypress(function(event){
     
       var k = (event.key);
     
       $(".info").text(k);
     
      })

  
   
      $(".subject"+1).on("mouseover", function(){
       
        $(".subjects").css("color","yellow");
        $(".subject"+1).css("color","white");
        $(".subject"+1).animate({fontSize: "+=1px"});
          });
  
        $(".subject"+2).on("mouseover", function(){
            $(".subjects").css("color","yellow");
            $(".subject"+2).css("color","white");
            $(".subject"+2).animate({fontSize: "+=1px"});});

            $(".subject"+3).on("mouseover", function(){
                $(".subjects").css("color","yellow");
                $(".subject"+3).css("color","white");
                $(".subject"+3).animate({fontSize: "+=1px"});});
          
                $(".subject"+4).on("mouseover", function(){
                    $(".subjects").css("color","yellow");
                    $(".subject"+4).css("color","white");
                    $(".subject"+4).animate({fontSize: "+=1px"});});
        


                    $(".subject"+5).on("mouseover", function(){
                        $(".subjects").css("color","yellow");
                        $(".subject"+5).css("color","white");
                        $(".subject"+5).animate({fontSize: "+=1px"});});
                  
                        $(".subject"+6).on("mouseover", function(){ 
                            $(".subjects").css("color","yellow");
                            $(".subject"+6).css("color","white");
                            $(".subject"+6).animate({fontSize: "+=1px"});});
                