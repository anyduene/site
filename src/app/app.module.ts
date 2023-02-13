import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeUa from '@angular/common/locales/fr';
import localeUaExtra from '@angular/common/locales/extra/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { CategoriesComponent } from './categories/categories.component';

registerLocaleData(localeUa, 'ru-RU', localeUaExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    ContentComponent,
    FoodlistComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
