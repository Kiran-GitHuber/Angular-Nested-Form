import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewAppComponent} from './new-app/new-app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewAppRequestComponent} from './new-app-request/new-app-request.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const MatModules = [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatDividerModule,
  MatListModule,
  MatTableModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NewAppComponent,
    NewAppRequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...[MatModules]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
