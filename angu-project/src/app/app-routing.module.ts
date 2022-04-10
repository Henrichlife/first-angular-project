import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpeakerAdamComponent } from './speaker-adam/speaker-adam.component';
import { SpeakerComponent } from './speaker/speaker.component';


const routes: Routes = [
  { path: '', component: SpeakerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
