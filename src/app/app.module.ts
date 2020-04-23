import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemographicsPanelComponent } from './demographics-panel/demographics-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthAndSocialConcernsComponent } from './health-and-social-concerns/health-and-social-concerns.component';
import { GoalsComponent } from './goals/goals.component';
import { ActiveDiagnosisPanelComponent } from './active-diagnosis-panel/active-diagnosis-panel.component';
import { InactiveDiagnosisPanelComponent } from './inactive-diagnosis-panel/inactive-diagnosis-panel.component';
import { FormsModule} from '@angular/forms';
import { AppMaterialModuleModule} from './app-material-module/app-material-module.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    DemographicsPanelComponent,
    HealthAndSocialConcernsComponent,
    GoalsComponent,
    ActiveDiagnosisPanelComponent,
    InactiveDiagnosisPanelComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModuleModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
