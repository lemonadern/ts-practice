function sumOfPos(arr) {
    return arr.filter(function (num) { return num >= 0; }).reduce(function (acc, num) { return acc + num; }, 0);
}
// 使用例
var sum = sumOfPos([1, 3, -2, 0]);
console.log(sum);
// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
