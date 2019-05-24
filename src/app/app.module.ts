import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { FilterPipe} from './filter.pipe';
import { MustMatchDirective } from './MustMatchDirective ';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
const routes: Routes = [
  { path: '', redirectTo:'products', pathMatch: 'full' },
  {path:'products' , component:ProductsComponent},
  {path:'header', component:HeaderComponent}, 
  {path:'products/:id' , component:DetailsproductComponent},
  {path:'signUp' , component: SignUpComponent},
  {path:'selectedproducts',component:SelectedProductsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    ProductsComponent,
    SingleProductComponent,
    HeaderAppComponent,
    DetailsproductComponent,
    FilterPipe,
    MustMatchDirective,
    SelectedProductsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
