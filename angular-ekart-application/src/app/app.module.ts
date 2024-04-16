import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TopMenuComponent } from './Header/top-menu/top-menu.component';
import { MainMenuComponent } from './Header/main-menu/main-menu.component';
import { ContainerComponent } from './Container/container.component';
import { SearchComponent } from './Container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './Container/productlist/productlist.component';
import { ProductComponent } from './Container/productlist/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductlistComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
