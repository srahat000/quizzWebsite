$(document).ready(function(){

    $('li').click(function(e){
        e.preventDefault();
        $("div#middlePage").load("C:Users/Ruby/Documents/quizzLove.html #loveQuizzes", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt=="success"){
                alert("successfull!");
            }
            if(statusTxt=="error"){
                alert("Error" + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
    
});