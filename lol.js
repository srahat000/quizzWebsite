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
                $("#result").text("At Work!");
                $("#details").text("Keep your eyes open! You will meet your special one at work."+
                " It's also possible that you've already met them but didn't realize it."+
                 "They might have tried to woo you many times before but you were oblivious to their flirting.");
            }
            if((total>=10)&&(total<=15)){
                $("#result").text("Mutual friends!");
                $("#details").text("You will meet your special person through mutual friends. "+
                "You might be introduced to them at a party or a simple friends' gathering."+
                "It's also possible that your friends might be trying to hook you up with that person now.");
            }
            if((total>15)&&(total<20)){
                $("#result").text("At your usual hangout spot!");
                $("#details").text("Don't go crazy looking for your special one. They will come to you."
                +" Whatever your go to spot is to hangout, relax, or even study is where you will bump into them."
                +" Maybe a coffee shop, a bar, or a library. All you need to do is have a little patience.");
            }
            if((total>=20)&&(total<=25)){
                $("#result").text("In a super bizarre way!");
                $("#details").text("You will meet your special person in a really random, "
                + "unexpected way. It will not be your typical interaction. you might meet them underwater or"+ 
                " be the one to rescue them from falling off a cliff.");
            }
        }

    })


});