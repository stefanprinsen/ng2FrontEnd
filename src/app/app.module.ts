import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChecklistOverviewComponent } from './checklist/checklist-overview/checklist-overview.component';

import { CheckListItemsService } from './checklist/shared/services/check-list-items.service';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistOverviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CheckListItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
