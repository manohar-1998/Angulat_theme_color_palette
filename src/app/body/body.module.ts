import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { ContactComponent } from './contact-us/contact.component';
import { RegisterComponent } from './register/register.component';
import { PremiumComponent } from './forms/premium/premium.component';
import { ClassifiedComponent } from './forms/classified/classified.component';
import { VipComponent } from './forms/vip/vip.component';


@NgModule({
  declarations: [
    RegisterComponent,
    PremiumComponent,
    ClassifiedComponent,
    VipComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'contact-us', component: ContactComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'premium-form', component: PremiumComponent
      },
      {
        path: 'classified-form', component: ClassifiedComponent
      },
      {
        path: 'vip-form', component: VipComponent
      }
    ]),
    CommonModule,
    MaterialModule,
  ]
})
export class BodyModule { }
