import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { SponsoragenteService } from 'src/app/services/sponsoragente.service';
import { AgenteModel } from 'src/app/models/AgenteModel';

@Component({
  selector: 'app-tareasprogramada',
  templateUrl: './tareaprogramada.component.html',
  styleUrls: ['./tareaprogramada.component.css']
})

export class TareaprogramadaComponent implements OnInit {
  ElementData: AgenteModel[] = [];
  displayedColumns: string[] = ['codAgente'];
  dataSource = new MatTableDataSource<AgenteModel>(this.ElementData);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: SponsoragenteService, private router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }


  public getAllReports() {
    let resp = this.service.ListarAgentes(1);
    resp.subscribe(report => this.dataSource.data = report as AgenteModel[])
    console.log('Respuesta', resp);
  }


  /*   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } */

  btnClickAgregar() {
    this.router.navigateByUrl('/calendarizacion');
  }


}