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
                $("#result").text("Deer!");
                $("#details").text("You're modest, shy and humble. You don't believe" + 
                " in showing off your good deeds and you're ok with not being credited for the" +
                " for the good that you do for others. You are a calm and peaceful person and  "+
                "and prefer being alone. You're careful and don't believe in trusting people too easily. "
                +" Your innocence, grace, and kindness differentiates you from other around you.");
            }
            if((total>=8)&&(total<12)){
                $("#result").text("Turtle!");
                $("#details").text("You're shy, quiet but also very compassionate and intelligent. "+
                "You are a good listener and advice giver. You don't react too quickly in tough situations "+
                "and take your time to udnerstand the problem, others, and yourself. You go at your own pace, "+
                "and do things your own way. Even if you don't have a big group of friends, you're "+
                "happy with those who are around you.");
            }
            if((total>=12)&&(total<16)){
                $("#result").text("Owl!");
                $("#details").text("You're calm, quiet, focused and detail-oriented. The way you look at "+
                "things is different from others. You don't believe in fitting in with the crowd and "+
                "you're happy doing things your way. You think and feel more deeply than others do. "+
                "Many times people don't understand you but your wisdom and perspective makes you very admirable.");
            }
            if((total>=16)&&(total<20)){
                $("#result").text("Hawk!");
                $("#details").text("You're independent, intelligent, and hardworking. You have a set of goals "+
                "that you want to achieve and you're constantly working towards them. You can't easily be persuaded "+
                "or misguided and you're not too trusting. You have a small cirle of friends who can always depend on you. " +
                "You're very likeable but only you choose who should stay around you.");
            }
            if((total>20)&&(total<23)){
                $("#result").text("Horse!");
                $("#details").text("You are a very social person. You're careful and try to stay alert to your surroundings "+
                "but you can also be aloof at times. You're very energetic and cheerful. Your loyalty is what sets you apart from "+
                "others. Once you've friended someone, you'll be with them till the end. You have the ability to read others well "+
                "and you're sensible enough to handle the situation you're put in. ");
            }
            if((total>=23)&&(total<25)){
                $("#result").text("Dolphin!");
                $("#details").text("You're a kind, sensitive, and an extremely social individual. You're super friendly and "+
                "basically everyone's favorite! You lighten any room that you walk into. Not only do you make everyone around "+
                "you feel good but you try to always keep the peace between others as well. You value relationships, people and "+
                "words a lot. You have a cheerful personality but you're also very sensitive to how others treat you and "+
                "what they say to you.");
            }
        }

    })


});