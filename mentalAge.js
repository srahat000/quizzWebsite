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
            if((total>=5)&&(total<8)){
                $("#result").text("8 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/8.jpg");
            }
            if((total>=8)&&(total<10)){
                $("#result").text("16big years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/16.jpg");
            }
            if((total>=10)&&(total<12)){
                $("#result").text("20 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/20.jpg");
            }
            if((total>=12)&&(total<14)){
                $("#result").text("30 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/30.jpg");
            }
            if((total>=14)&&(total<16)){
                $("#result").text("50 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/50.jpg");
            }
            if((total>=16)&&(total<20)){
                $("#result").text("70 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/70.jpg");
            }
            if((total>=20)&&(total<=25)){
                $("#result").text("80 years old!");
                $("#details").attr("src", "C:Users/Ruby/Pictures/80.jpg");
            }
        }

    })


});