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
            if(total<8){
                $("#result").text("Merida");
                $("#details").attr("src", "C:Users/Ruby/Pictures/merida.jpg");
            }
            if((total>=8)&&(total<10)){
                $("#result").text("Tiana");
                $("#details").attr("src", "C:Users/Ruby/Pictures/tiana.jpg");
            }
            if((total>=10)&&(total<12)){
                $("#result").text("Belle");
                $("#details").attr("src", "C:Users/Ruby/Pictures/Belle.jpg");
            }
            if((total>=12)&&(total<15)){
                $("#result").text("Rapunzel");
                $("#details").attr("src", "C:Users/Ruby/Pictures/rapunzel.jpg");
            }
            if((total>=15)&&(total<18)){
                $("#result").text("Mulan");
                $("#details").attr("src", "C:Users/Ruby/Pictures/mulan.jpg");
            }
            if((total>=18)&&(total<20)){
                $("#result").text("Ariel");
                $("#details").attr("src", "C:Users/Ruby/Pictures/ariel.jpg");
            }
            if((total>=20)&&(total<23)){
                $("#result").text("Snow White");
                $("#details").attr("src", "C:Users/Ruby/Pictures/snow.jpg");
            }
            if((total>=23)&&(total<25)){
                $("#result").text("Cinderella");
                $("#details").attr("src", "C:Users/Ruby/Pictures/cinderella.jpg");
            }
        }

    })


});