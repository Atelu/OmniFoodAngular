import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurclientsRoutingModule } from './ourclients-routing.module';
import { OurclientsComponent } from './ourclients.component';


@NgModule({
  declarations: [OurclientsComponent],
  imports: [
    CommonModule,
    OurclientsRoutingModule
  ]
})
export class OurclientsModule { }
