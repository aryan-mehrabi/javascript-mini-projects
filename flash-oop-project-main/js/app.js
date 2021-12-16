$(document).ready(function () {
    var $container = $(".container"),
        $showBtn = $container.find("#show-btn"),
        $qCard = $container.find(".question-card"),
        $closeBtn = $container.find(".close-btn"),
        $qInput = $container.find("#question-input"),
        $aInput = $container.find("#answer-input"),
        $saveBtn = $container.find(".submitBtn"),
        $qList = $container.find("#questions-list"),
        $feedback = $container.find(".feedback");
    $showBtn.click(function (e) { 
        e.preventDefault();
        $qCard.addClass("showItem");
    });
    $closeBtn.click(function (e) { 
        e.preventDefault();
        $qCard.removeClass("showItem");
    });
    $saveBtn.click(function (e) { 
        e.preventDefault();
        if ($qInput.val() == "" || $aInput.val() == "") {
            $feedback.addClass("showItem alert-danger");
            setTimeout(function() {
                $feedback.removeClass("showItem alert-danger");
            }, 3000)
        }
        else if ($qInput.val() !== "" && $aInput.val() !== "") {
            $qList.append('<div class="col-md-4"><div class="card card-body flashcard my-3"><h4 class="text-capitalize">' + $qInput.val() + '</h4><a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a><h5 class="answer mb-3">' + $aInput.val() + '</h5><div class="flashcard-btn d-flex justify-content-between"><a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a><a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a></div>');
            const $lastQue = $container.find(".card-body").last();
            $lastQue.find(".show-answer").on("click", function (e) {
                e.preventDefault();
                $lastQue.find(".answer").toggleClass("showItem");
            });
            $lastQue.find("#edit-flashcard").on("click", function(e) {
                e.preventDefault();
                $qInput.val($lastQue.find(".text-capitalize").first().text());
                $lastQue.parent().remove();
            });
            $lastQue.find("#delete-flashcard").on("click", function(e) {
                e.preventDefault();
                $lastQue.parent().remove();
            });
            $qInput.val("");
            $aInput.val("");
        }
    });
});