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
            if(total<17){
                $("#result").text("You attracted them to your house!");
                $("#details").text("You were very careless and didn't take the "+
                "apocalypse seriously. The smell of your food led them to your house "+
                "and you died within the first year of the apocalypse");
            }
            if((total>=17)&&(total<20)){
                $("#result").text("From fear/hunger!");
                $("#details").text("You survived for a good couple of years but your "+
                "fear is what led to your demise. You were too scared to go outor make any noise "+
                " and you didn't eat as much as you were supposed to. So you were found dead in your "+
                "house and eaten by zombies");
            }if((total>=20)&&(total<=25)){
                $("#result").text("In combat!");
                $("#details").text("Great job picking out your meals! you survived through many years "+
                "of the apocalypse but while gathering food, you were overtaken by zombies and died "+
                "protecting yourself");
            }
        }

    })


});