function Person(name) {
    this.name = name;

}
Person.prototype.getName =function() {
    return this.name;
}
// it工程师
// extend Person
function Coder(name,language) {
    // call?
  Person.call(this,name)
//   父类没有的可以加
// 语言
this.language =language;
}
// new Person 新的对象就是Coder的原型对象
Coder.prototype = new Person()
Coder.prototype.constructor = Coder
Coder.prototype.getLanguages = function (){
    return this.language
    // console.log(this.languages)
}
var wxf = new Person('汪西发');
console.log(wxf.name);

var xjy =new Coder('徐加元',['javascript','python','c/c++']);
console.log(xjy.name +''+xjy.language.join(','));
console.log(xjy.getName());
console.log(xjy.getLanguages());