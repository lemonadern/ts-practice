function increment(num) {
    return num + 1;
}
console.log(increment(1));
var showMessages = function (msgs) {
    msgs.forEach(function (msg) { return console.log(msg); });
};
var forYou = ["Hi", "This message", "is", "for you."];
showMessages(forYou);
