
$(document).ready(function () {
    console.log("Load page contact");

    $('#askQuestion').submit(function () {
       
        var data = $(this).serializeArray();
        /* отправляем данные методом POST */
        var url = $(this).attr("action");

        var askQuestion = {
            Name: data[0].value,
            Email: data[1].value,
            Tel: data[2].value,
            Subject: data[3].value,
            Message: data[4].value
        };

        var posting = $.post(url, { model: askQuestion },function() {
            alert("Ваш вопрос отправлен");
        });

        posting.done(function (data) {
            
        });

        return false;
    });
});
