$(function () {
  $('[data-toggle="popover"]').popover();
  document.querySelectorAll('button[data-question]').forEach(function(btn){
    $(btn).click(function(){
        var question = btn.dataset.question;
        var answerField = $('input[data-question="' + question + '"]');
        var answer = answerField.val();

        $.ajax({
          method: "POST",
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          url: "/check/" + question,
          data: JSON.stringify({ answer: answer })
        })
          .done(function() {
            $(btn).removeClass("btn-default btn-success btn-danger").addClass("btn-success");
            answerField
          })
          .fail(function(){
            $(btn).removeClass("btn-default btn-success btn-danger").addClass("btn-danger");
          });
    });
  });
});

