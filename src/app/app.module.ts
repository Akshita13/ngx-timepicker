import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgbDropdownModule,
  NgbTimepickerModule,
  // NgbTimeAdapter,
  NgbDateAdapter,
  NgbDateParserFormatter,
NgbTimeAdapter
} from "@ng-bootstrap/ng-bootstrap";
import {
  PopoverConfig,
  TabsModule,
  TimepickerConfig,
  TimepickerModule
} from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbTimePickerPipe } from './ngb-time-picker.pipe';
import {NgbTimeStringAdapter} from './NgbTimeStringAdapter'
/**
 * Popover configuration
 */
export function getPopoverConfig(): PopoverConfig {
  return Object.assign(new PopoverConfig(), {
    placement: "auto",
    container: "body",
    outsideClick: true
  });
}
/**
 * Time picker configuration
 */
export function getTimePickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    showMeridian: false,
    showSpinners: true
  });
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    NgbTimepickerModule
  ],
  providers: [
    { provide: TimepickerConfig, useFactory: getTimePickerConfig },
    { provide: PopoverConfig, useFactory: getPopoverConfig },
   { provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter },
  //  NgbTimeAdapter
  ],
  declarations: [AppComponent, HelloComponent, NgbTimePickerPipe,],
  bootstrap: [AppComponent]
})
export class AppModule {}
