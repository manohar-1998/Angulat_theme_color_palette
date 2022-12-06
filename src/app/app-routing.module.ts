import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './body/main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ResultComponent } from './Rules-Demo/result/result.component';

const routes: Routes = [

  // Rest Application result goes here

  { path: '', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'experiment', component: ExperimentComponent},
  // { path: '', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
