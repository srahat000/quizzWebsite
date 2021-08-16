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
            if(total<14){
                $("#result").text("Prey!");
                $("#details").text("You made some very poor choices and now you are dead!");
            }
            if((total>=14)&&(total<20)){
                $("#result").text("Prey but a smart one!");
                $("#details").text("You made some good choices. You will be a "
                + "prey in the jungle but you won't get eaten so easily!");
            }if((total>=20)&&(total<24)){
                $("#result").text("Predator!");
                $("#details").text("You made some great choices and you survived. "+
                "You will be doing the hunting in the jungle.");
            }
        }

    })


});