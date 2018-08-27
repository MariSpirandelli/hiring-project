import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Risk } from '../models/risk';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.component.html',
  styleUrls: ['./risk-list.component.css']
})
export class RiskListComponent implements OnInit, AfterViewInit {

  title = 'Availables Insurance Types';
  risks: Risk[];

  datasource: MatTableDataSource<Risk>;
  displayedColumns = ['risk', 'desc', 'fieldsNumber'];

  constructor(private service: AppService, private router: Router) {}

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.service.getRisks().subscribe(
      (data => {
        this.risks = data;
        this.datasource = new MatTableDataSource<Risk>(data);
      }),
      (err => this.risks = [])
     );
  }

  viewDetails(id: number) {
    this.router.navigateByUrl(`/risks/${id}`);
  }

}
