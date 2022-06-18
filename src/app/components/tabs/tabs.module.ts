import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabsComponent} from './tabs.component'
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';



@NgModule({
  declarations: [TabsComponent,
  HeaderComponent,
BodyComponent],
   exports:[
    TabsComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
 
})
export class TabsModule { }
