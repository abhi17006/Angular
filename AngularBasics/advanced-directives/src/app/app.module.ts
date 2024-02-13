import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { HightlightWihhEventsDirective } from './better-highlight/hightlight-wihh-events.directive';
import { UnlessDirective } from './unless.directive';



@NgModule({
  declarations: [
    AppComponent, BasicHightlightDirective, BetterHighlightDirective, HightlightWihhEventsDirective, UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
