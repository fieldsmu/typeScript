"use strict";
function findVal() {
    return $("#answer").text();
}
function add() {
    $("#answer").text(Number(findVal()) + 1);
}
function subtract() {
    $("#answer").text(Number(findVal()) - 1);
}
function reset() {
    $("#answer").text(0);
}
