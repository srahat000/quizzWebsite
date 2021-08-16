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
            if(total<=6){
                $("#result").text("Fish");
                $("#details").attr("src", "C:Users/Ruby/Pictures/fish.jpg");
            }
            if((total>=7)&&(total<10)){
                $("#result").text("Parrot");
                $("#details").attr("src", "C:Users/Ruby/Pictures/bird.jpg");
            } 
            if((total>=10)&&(total<12)){
                $("#result").text("Cat");
                $("#details").attr("src", "C:Users/Ruby/Pictures/cat.jpg");
            }
            if((total>=12)&&(total<15)){
                $("#result").text("Dog");
                $("#details").attr("src", "C:Users/Ruby/Pictures/dog.jpg");
            }
            if((total>=15)&&(total<18)){
                $("#result").text("Chicken");
                $("#details").attr("src", "C:Users/Ruby/Pictures/chicken.jpg");
            }
            if((total>=18)&&(total<23)){
                $("#result").text("Alpaca");
                $("#details").attr("src", "C:Users/Ruby/Pictures/alpaca.jpg");
            }
            if((total>=23)&&(total<25)){
                $("#result").text("Monkey");
                $("#details").attr("src", "C:Users/Ruby/Pictures/monkey.jpg");
            }
        }

    })


});