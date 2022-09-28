



function small() {
    document.getElementById("element").classList.add("smallNew");
    document.getElementById("element").classList.remove("middle");
    document.getElementById("element").classList.remove("big");
}
function middle() {
    document.getElementById("element").classList.add("middle");
    document.getElementById("element").classList.remove("smallNew");
    document.getElementById("element").classList.remove("big");
}
function big() {
    document.getElementById("element").classList.add("big");
    document.getElementById("element").classList.remove("smallNew");
    document.getElementById("element").classList.remove("middle");
}