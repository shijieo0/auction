// 1.从Angular核心模块引入一个Component装饰器
import { Component } from '@angular/core';
// @Component({...}) 组件元数据装饰器
// 2.第4-8行，用Component装饰器定义了一个组件以及组件的元数据
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 组件元数据装饰器：所有的组件都必须使用一个@Component装饰器来注解，前面带@符号的东西叫装饰器

// 下面这个AppComponent，它中没有出现Angular的字样，它与Angular没有任何关系，就是个标准的、普通的typescript类
// 而实际上，我们想让app.component.ts是一个组件，如何让它成为一个组件呢？
// 就是要告诉Angular，AppComponent不是一个普通的typescript类，如何不是呢？需要把一些元数据附加到这个类上，以此表明它是一个组件
// 在typescript中，用装饰器来附加元数据，装饰器中的属性就叫元数据，通过装饰器把selector、templateUrl、styleUrls等元数据附件到typescript类上，Angular就
// 知道了，这是要把这个typescript类变成Angular框架中的一个组件
// 元数据会告诉Angular如何把一个typescript类处理成一个它的组件,分析上面的组件元数据装饰器：
// selector: css选择器，表明这个组件可以通过app-root这个html标签来调用，即将这个组件的内容加载到app-root这个标签的位置
// templateUrl: 组件的内容通过templateUrl属性指定的值来定义的，它指定一个html文件来作为组件的模板，最终
//     在index.html中app-root这个标签的位置处将展示./app.component.html里的内容
// ==>模板是组件的必备属性，如果没有模板，一个typescript类就不能称之为组件

// app.component.ts中的typescript类AppComponent，定义了一个控制器，这个控制器只有一个属性title
// 控制器：一个被组件元数据装饰器（即Component装饰器）修饰的typescript类，叫做控制器，它包含与模板相关的所有属性和方法，即与页面
//     相关的大部分逻辑都是编写在控制器里的；
// 例如控制器AppComponent中的属性title的值，最终会展示在浏览器的页面中
export class AppComponent {
  title = 'auction';
  test() {
    // @ts-ignore
    $('xxx').show();
  }
}
