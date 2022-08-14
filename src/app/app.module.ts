import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MobileNumberDirective } from './mobile-number.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MobileNumberDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
