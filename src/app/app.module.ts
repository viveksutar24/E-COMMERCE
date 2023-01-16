import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { WomenComponent } from './component/women/women.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { AddToWhishlistComponent } from './component/add-to-whishlist/add-to-whishlist.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { ShopComponent } from './component/shop/shop.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { BlogComponent } from './component/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    AddToWhishlistComponent,
    ProductDetailComponent,
    OrderCompleteComponent,
    ShopComponent,
    CheckoutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
