import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './body/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './body/contact-us/contact.component';
import { BodyModule } from './body/body.module';
import { ExperimentComponent } from './experiment/experiment.component';
import { ResultComponent } from './Rules-Demo/result/result.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeSwitchComponent,
    ContactComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ExperimentComponent,
    ResultComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    BodyModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
