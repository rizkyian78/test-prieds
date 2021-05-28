import { Component, OnChanges, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  constructor(private appService: AppService) {}
  path: string = '';
  ngOnInit(): void {
    console.log(this.path);
  }
  onSubmit(value: any): any {
    this.appService.postCustomer(value).then((res: any) => {
      setTimeout(() => {
        window.open(`${res.data.path}?=${moment().unix()}`, '_blank');
      }, 500);
    });
  }
}
