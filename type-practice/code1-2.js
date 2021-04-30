function showUserInfo(user) {
    console.log(user.name);
    console.log(user.age.toString());
    console.log(user.private ? "Yes" : "No");
}
// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false
});
// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };
