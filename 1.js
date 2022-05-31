var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
var requiredRange1 = [null, 200]; // england, Italy, usa, france
var requiredRange2 = [100, 350]; // england, italy, china, usa, kazahstan, france
var requiredRange3 = [200, null]; // usa, france
var filter = function (el) {
    var arr = [];
    courses.forEach(function (course) {
        if ((el[0] >= course.prices[0] || el[0] == course.prices[0] || el[0] == 0 || el[1] >= course.prices[0]) && (el[1] >= course.prices[1])) {
            arr.push(course.name);
        }
    });
    return arr;
};
// console.log(filter(requiredRange1), '111')
// console.log(filter(requiredRange2), '222')
// console.log(filter(requiredRange3), '333')
var sorted = function (courses) {
    var arr = [];
    courses.forEach(function (course) {
        if (!arr.length) {
            arr.push(course);
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].prices[0] <= course.prices[0]) {
                arr = __spreadArray(__spreadArray(__spreadArray([], arr.slice(0, i), true), [course], false), arr.slice(i, -1), true);
                return;
            }
            else {
                arr.push(course);
                return;
            }
        }
    });
    return arr;
};
console.log(sorted(courses));
