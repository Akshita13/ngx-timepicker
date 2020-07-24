import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, NgbModule,
  // TimepickerModule.forRoot(), PopoverModule.forRoot() 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
