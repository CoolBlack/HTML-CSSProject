
function selectStep(n) {
    if (n == 1) {
        $(".progressSelected").animate({marginLeft: '0'}, 300);
    } else if (n == 2) {
        $(".progressSelected").animate({marginLeft: '23px'}, 300);
    } else if (n == 3) {
        $(".progressSelected").animate({marginLeft: '46px'}, 300);
    }
    $(".contentSwitcher").hide();
    $("#content"+n).show();
}

