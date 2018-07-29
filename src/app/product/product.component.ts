import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 声明一个数组,存储页面的商品
  public products: Array<Product>;
  public imgUrl = 'http://placehold.it/250x150';

  constructor() { }
  // ngOnInit()是组件生命周期钩子函数中的一个，用于在组件实例化后，正式使用之前，初始化一些信息
  ngOnInit() {
    this.products = [
      new Product(1, '第1个商品', 1.99, 1.5, '这是第一个商品', ['电子产品','硬件设备']),
      new Product(2, '第2个商品', 2.99, 2.5, '这是第一个商品', ['图书']),
      new Product(3, '第3个商品', 3.99, 3.5, '这是第一个商品', ['母婴']),
      new Product(4, '第4个商品', 4.99, 4.5, '这是第一个商品', ['鞋包']),
      new Product(5, '第5个商品', 5.99, 5.0, '这是第一个商品', ['家电']),
      new Product(6, '第6个商品', 6.99, 3.5, '这是第一个商品', ['美食'])
    ];
  }

}

// 商品类用于定义商品包含的信息
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }

}
