import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ex1TextSummaryPipeComponent } from './ex-1-text-summary-pipe/ex-1-text-summary-pipe.component';
import { Ex2LikeComponent } from './ex-2-like/ex-2-like.component';
import { Ex3VoterComponent } from './ex-3-voter/ex-3-voter.component';
import { Ex4UserComponent } from './ex-4-user/ex-4-user.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1TextSummaryPipeComponent,
    Ex2LikeComponent,
    Ex3VoterComponent,
    Ex4UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
