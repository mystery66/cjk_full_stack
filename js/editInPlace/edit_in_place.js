/*
*author cjk
date 2018-4-28
功能：就地编辑
参数：@id @parent 挂载元素
*@value 初始值
*/
// 不再是面向业务的流程编程
// 一上来， 就封装一个类，
// 美好的愿望，可以以后多复用。 
function EditInPlace(id, parent, value) {
    this.id = id;
    this.parentElement = parent; //父元素 root
    this.value = value || 'default value'
    // 显示name元素
    this.createElement();
    // 挂载到DOM上去了， 就可以为它加事件监听不
    this.attachEvent();
  }
  EditInPlace.prototype = {
    // 构建html
    createElement: function() {
      this.containerElement = 
        document.createElement('div');
      
  
      //显示静态文字
      // js 动态性
      this.staticElement = document.createElement('span');
      this.staticElement.innerHTML = this.value;
      this.containerElement.appendChild(
        this.staticElement);
      
      // 按钮
      // 对象的内部this 指向对象 在的原型链上 方法和属性,
      this.fieldElement = document.createElement('input');
      this.fieldElement.type = 'text';
      this.fieldElement.value = this.value;
      this.containerElement.appendChild(this.fieldElement);
  
      this.parentElement.appendChild(
        this.containerElement
      );
      // 文字和输入框，只能显示一个
      this.convertToText();
    },
    convertToText: function() {
      this.staticElement.style.display = 'inline';
      this.fieldElement.style.display = 'none';
    },
    convertToEdit: function() {
      this.fieldElement.style.display = 'inline';
      this.staticElement.style.display = 'none';
      this.fieldElement.focus();
    },
    attachEvent: function() {
      // 作用域 attachEvent函数
      // js this 总会指向什么
      // 对象的方法被执行时，this指向对象
      console.log(this);
      var that = this;
      this.staticElement.addEventListener('click', function() {
        // 函数被执行时，并不是对象的方法，而是匿名函数，
        // 作为事件处理函数来执行， this指向事件发生元素
        // this指向跟函数调用方式有关
        // this的指向
        // 作用域 事件的回调函数
        // console.log(this);
        // alert(that.value);
        that.convertToEdit();
      }, false);
      this.fieldElement.addEventListener('keydown',
       function(evt) {
        console.log(evt);
        if (evt.keyCode == 13) {
          that.staticElement.innerHTML = 
            this.value;
          that.convertToText()
        }
      }, false);
    }
  }
  