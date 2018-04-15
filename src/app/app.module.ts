import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardCreatorComponent } from './card-creator/card-creator.component';
import { RouterModule, Routes } from '@angular/router';

const myRoots: Routes = [
  { path: 'cardCreator', component: CardCreatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoots)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

