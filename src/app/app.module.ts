import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  // 首先使用declarations属性声明模块中有什么；注意：在declarations属性中只能声明 [组件、指令和管道,
  // 当前模块中只有一个组件 AppComponent
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    CarouselComponent,
    StarsComponent
  ],
  // 其次，使用imports属性声明了想要应用正常运行还需要什么，即AppModule依赖哪些模块
  // 这里声明了Angular框架给我们提供的模块：
  // BrowserModule  开发web应用必选的模块
  // FormsModule  处理表单的模块
  // HttpModule  提供Http服务的
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers属性默认是空的，只能声明[服务], 声明模块中提供了什么服务，在依赖注入时体现
  providers: [],
  // bootstrap属性声明了模块的主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
