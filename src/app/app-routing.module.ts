import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddToWhishlistComponent } from './component/add-to-whishlist/add-to-whishlist.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MenComponent } from './component/men/men.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ShopComponent } from './component/shop/shop.component';
import { WomenComponent } from './component/women/women.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"men",component:MenComponent},
  {path:"women",component:WomenComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"cart",component:CartComponent},
  {path:"add-to-whishlist",component:AddToWhishlistComponent},
  {path:"product-detail",component:ProductDetailComponent},
  {path:"order-complete",component:OrderCompleteComponent},
  {path:"shop",component:ShopComponent},
  {path:"checkout",component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
