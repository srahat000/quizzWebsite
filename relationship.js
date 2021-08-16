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
            if((total>=5)&&(total<10)){
                $("#result").text("Single!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/singleR.jpg");
            }
            if((total>=10)&&(total<15)){
                $("#result").text("Dating/In a relationship!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/datingR.jpg");
            }
            if((total>=15)&&(total<18)){
                $("#result").text("Married!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/marriedR.jpg");
            }
            if((total>=18)&&(total<=20)){
                $("#result").text("Married with kids!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/marriedkidsR.jpg");
            }
            
        }

    })


});