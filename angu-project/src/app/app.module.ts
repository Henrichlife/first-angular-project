import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './nav/nav.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { NewFooterComponent } from './new-footer/new-footer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TestedComponent } from './tested/tested.component';
import { TestedFooterComponent } from './tested-footer/tested-footer.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakerBodyComponent } from './speaker-body/speaker-body.component';
import { SpeakerFooterComponent } from './speaker-footer/speaker-footer.component';
import { SpeakerAdamComponent } from './speaker-adam/speaker-adam.component';
import { SpeakerAjComponent } from './speaker-aj/speaker-aj.component';
import { SpeakerArmanComponent } from './speaker-arman/speaker-arman.component';
import { SpeakerBermonComponent } from './speaker-bermon/speaker-bermon.component';
import { SpeakerHoweComponent } from './speaker-howe/speaker-howe.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    BodyComponent,
    NavComponent,
    NavSectionComponent,
    NewFooterComponent,
    ScheduleComponent,
    TestedComponent,
    TestedFooterComponent,
    SpeakerComponent,
    SpeakerBodyComponent,
    SpeakerFooterComponent,
    SpeakerAdamComponent,
    SpeakerAjComponent,
    SpeakerArmanComponent,
    SpeakerBermonComponent,
    SpeakerHoweComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
