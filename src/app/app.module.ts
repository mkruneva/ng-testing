import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TextSummaryPipe } from './ex-1-text-summary-pipe/ex-1-text-summary-pipe.component';
import { LikeComponent } from './ex-2-like/ex-2-like.component';
import { VoterComponent } from './ex-3-voter/ex-3-voter.component';
import { UsersComponent } from './ex-4-user/ex-4-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSummaryPipe,
    LikeComponent,
    VoterComponent,
    UsersComponent
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
