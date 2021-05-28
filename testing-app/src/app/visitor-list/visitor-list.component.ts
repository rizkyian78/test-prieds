import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  arrayData: [] = [];
  constructor(private appService: AppService) {}
  ngOnInit(): any {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.appService.getAllCustomer().then((res) => {
      this.arrayData = res.data;
    });
  }
}
