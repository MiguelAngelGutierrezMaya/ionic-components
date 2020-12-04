import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  toIsoString: string = this.fechaNaci.toISOString();

  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          handler: (event) => {
            console.log(event);
          }
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }
      ]
    }
  }

  cambioFecha(event) {
    let date = new Date(event.detail.value);
    this.toIsoString = date.toISOString();
  }
}
