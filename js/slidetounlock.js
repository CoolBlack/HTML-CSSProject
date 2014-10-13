$(document).ready(function () {

    var container = $('#well');
    var posLeft;
    var maxRightPos;

    $("#slider").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function (event, ui) {

            posLeft = ui.position.left;
            maxRightPos = container.width() - ui.position.left;

            if (posLeft > maxRightPos) {
                container.fadeOut();
                $('#blackStart').fadeOut();
                $('#head').slideDown();
                setTimeout(function () {
                    $('#homeButton').fadeIn();
                }, 500);
                document.title = 'Cool Uni';
            }
        },
        stop: function (event, ui) {

            posLeft = ui.position.left;
            maxRightPos = container.width() - ui.position.left + 1;

            if (posLeft < maxRightPos + 1) {
                $(this).animate({
                    left: 0
                })
            }
        }
    });
})


