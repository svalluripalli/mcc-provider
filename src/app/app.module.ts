import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemographicsPanelComponent } from './demographics-panel/demographics-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { HealthAndSocialConcernsComponent } from './health-and-social-concerns/health-and-social-concerns.component';
import { MatTabsModule} from '@angular/material/tabs';
import { GoalsComponent } from './goals/goals.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { ActiveDiagnosisPanelComponent } from './active-diagnosis-panel/active-diagnosis-panel.component';
import { InactiveDiagnosisPanelComponent } from './inactive-diagnosis-panel/inactive-diagnosis-panel.component';
import { MatTableModule} from '@angular/material/table';
import { FormsModule} from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';

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
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
