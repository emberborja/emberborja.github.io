import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperheroTabsComponent } from './superhero-tabs/superhero-tabs.component';
import { MaterialExampleModule } from '../material.module';
import { ToolbarTopComponent } from './toolbar-top/toolbar-top.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SuperheroGridComponent } from './superhero-grid/superhero-grid.component';
import { SuperheroImageCardComponent } from './superhero-image-card/superhero-image-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroTabsComponent,
    ToolbarTopComponent,
    SuperheroListComponent,
    SuperheroGridComponent,
    SuperheroImageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    ScrollingModule,
    ShareButtonsModule,
    ShareIconsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
