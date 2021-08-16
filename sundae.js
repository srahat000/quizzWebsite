$(document).ready(function(){

    var total=0;
    var strVal;
    $(".answer").click(function(){
        strVal= $(this).attr("value");
        total+= parseInt(strVal);
        console.log(total);
        $("div.questionGroup").addClass("questionGroupHideC");
        $("div.questionGroup").remove();
       

        if($("div").hasClass("questionGroupHide")){
        $("div.questionGroupHide:eq(0)").css("display", "block")
            .addClass("questionGroup").removeClass("questionGroupHide");
        $("div.startQuestionHide:eq(0)").css("display", "block")
            .addClass("startQuestion").removeClass("startQuestionHide");
        $("div.answerGroupHide:eq(0)").css("display", "block")
            .addClass("answerGroup").removeClass("answerGroupHide");
        }
        else{
            $("div.finalResult").css("display", "block");
            if(total<10){
                $("#result").text("You care deeply for people");
                $("#details").text("You're a simple person. You're not too concerned with "
                +"what happens to you and instead you focus more on your loved ones. "+
                "You're really attached to the people around you and you try to make things easy "+
                "and safe for them");
            }
            if((total>=10)&&(total<15)){
                $("#result").text("You're a deep thinker");
                $("#details").text("You're thinking all the time because you'd like to play it safe. "+
                "You always weigh the pros and cons before making your decision on anything. "+
                "You don't want to be hurt so you calculate your every step");
            }
            if((total>=15)&&(total<20)){
                $("#result").text("You're very accepting");
                $("#details").text("You're a strong-minded individual. You know what you want and you "+
                "know what you have to do to get that but you don't block out others and their opinions."+
                " You keep an open mind and accept all other views with open arms");
            }
            if((total>=20)&&(total<=25)){
                $("#result").text("You're a risk taker");
                $("#details").text("You're pretty fearless and you like trying new things."+
                " You're not afraid of the outcomes. You're confident in your decisions and "+
                "comfortable with the results.");
            }
        }

    })


});