import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Risk } from '../models/risk';
import { FIELD_TYPE_OPTIONS } from '../models/fieldType';
import { ActivatedRoute } from '@angular/router';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import * as _rollupMoment from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-risk-details',
  templateUrl: './risk-details.component.html',
  styleUrls: ['./risk-details.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class RiskDetailsComponent implements OnInit {

  risk: Risk;
  fieldOptions = [{id: '1', name: FIELD_TYPE_OPTIONS[0]},
                  {id: '2', name: FIELD_TYPE_OPTIONS[1]},
                  {id: '3', name: FIELD_TYPE_OPTIONS[2]},
                  {id: '4', name: FIELD_TYPE_OPTIONS[3]}];

  constructor(private service: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getRisksById(id).subscribe(
      (data => this.risk = data),
      (err => this.risk = null)
     );
  }

  options(index: number) {
    return this.fieldOptions[index - 1];
  }
}
