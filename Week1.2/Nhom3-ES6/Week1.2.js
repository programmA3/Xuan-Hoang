//////////////////////////////////////////////////////////////
// let abc = "abc";
// console.log(abc)
//////////////////////////////////////////////////////////////
// {
//     let x = 2;
// }
// console.log(x)
//////////////////////////////////////////////////////////////
// {
//    var bc = "bc";
// }
// console.log(bc)
//////////////////////////////////////////////////////////////
// var bc = "bc";
// console.log(bc)
//////////////////////////////////////////////////////////////
// var a = 12;
// var b = 20;
// if (a < b)
// {
//     var tmp = a;
//     a = b;
//     b = tmp;
// }
// console.log("a: " + a);
// console.log("b: " + b);
// console.log("tmp: " + tmp);
//////////////////////////////////////////////////////////////
// var a = 12;
// var b = 20;
// if (a < b)
// {
//     let tmp = a;
//     a = b;
//     b = tmp;
// }
// console.log("a: " + a);
// console.log("b: " + b);
// console.log("tmp: " + tmp);
//////////////////////////////////////////////////////////////
// const aaa = "AAAA";
// console.log(aaa);
//
// aaa = "BBB";
// console.log(aaa);
//////////////////////////////////////////////////////////////
// var hello = (name, age) => {
//     console.log("Chào, tôi là " + name + ". Tôi " + age + " tuổi!");
// };
// hello("Hoàng", "22")
//////////////////////////////////////////////////////////////
// var hello = name => {
//     console.log("Chào, tôi là " + name + ".");
// };
// hello("Hoàng", "22")
//////////////////////////////////////////////////////////////
// var hello = (name, age) => console.log("Chào, tôi là " + name + ". Tôi " + age + " tuổi!");
// hello("Hoàng", "22")
//////////////////////////////////////////////////////////////
// const func1 = (x, y) // Sai
//     => {
//     return x + y;
// };
// const func2 = (x, y) => // Đúng
// {
//     return x + y;
// };
// const func3 = (x, y) => { // OK
//     return x + y;
// };
//
// const func4 = (x, y) // Sai
//     => x + y;
// const func5 = (x, y) => // Đúng
//     x + y;
/////////////////////////////////////////////////////////////////////
// var alphabet = ['a', 'b', 'c'];
//
// alphabet.map((val, key) => {
//     console.log(val.toUpperCase());
// });
/////////////////////////////////////////////////////////////////////
// var person = {
//     firstname:"Tom",
//     lastname:"Hanks",
//     func:function(){return "Hello, " + this.firstname},
// };
// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.func())
/////////////////////////////////////////////////////////////////////
class SinhVien {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }

    setName(name) {
        this.name = name
    }

    setYear(year) {
        this.year = year
    }

    getName() {
        return this.name
    }

    getYear() {
        return this.year
    }

    toString() {
        console.log("Chào, tôi là " + this.name + ". Tôi sinh năm " + this.year)
    }
}
var sinhVien = new SinhVien("Hoàng", 1997);
sinhVien.toString()
console.log(sinhVien.getName())
console.log(sinhVien.getYear())
/////////////////////////////////////////////////////////////////////