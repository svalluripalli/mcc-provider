import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule} from '@angular/forms';
import { ServiceWorkerModule} from '@angular/service-worker';

import { AppMaterialModuleModule} from './app-material-module/app-material-module.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DemographicsPanelComponent } from './demographics-panel/demographics-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthAndSocialConcernsComponent } from './health-and-social-concerns/health-and-social-concerns.component';
import { GoalsComponent } from './goals/goals.component';
import { ActiveDiagnosisPanelComponent } from './active-diagnosis-panel/active-diagnosis-panel.component';
import { InactiveDiagnosisPanelComponent } from './inactive-diagnosis-panel/inactive-diagnosis-panel.component';
import { DiagnosisPanelComponent } from './diagnosis-panel/diagnosis-panel.component';
import { SocialConcernPanelComponent } from './social-concern-panel/social-concern-panel.component';



const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    DemographicsPanelComponent,
    HealthAndSocialConcernsComponent,
    GoalsComponent,
    ActiveDiagnosisPanelComponent,
    InactiveDiagnosisPanelComponent,
    DiagnosisPanelComponent,
    SocialConcernPanelComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModuleModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
