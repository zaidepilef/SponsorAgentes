import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { SponsoragenteService } from 'src/app/services/sponsoragente.service';
import { AgenteModel } from 'src/app/models/AgenteModel';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TareaprogramadaComponent } from 'src/app/components/tareaprogramada/tareaprogramada.component';
import { AgentesTablaComponent } from './agentes-tabla/agentes-tabla.component';
import { CommonModelService } from './common-model.service'

@Component({
	selector: 'app-sponsor',
	templateUrl: './sponsor.component.html',
	styleUrls: ['./sponsor.component.css']
})

export class SponsorComponent implements OnInit {


	@ViewChild('rut', { static: true }) usernameElement: ElementRef;
	myrut: string = "";
	mysecuencia: string = "";

	ElementData: AgenteModel[] = [];
	displayedColumns: string[] = ['codAgente'];
	dataSource = new MatTableDataSource<AgenteModel>(this.ElementData);

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	listaAgentesSeleccionados: AgenteModel[] = [];

	constructor(
		usernameElement: ElementRef,
		private formBuilder: FormBuilder,
		private service: SponsoragenteService,
		public dialog: MatDialog,
		private router: Router
	) {
		this.usernameElement = usernameElement;

	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.getAllReports();
	}

	public getAllReports() {

		let resp = this.service.ListarAgentes(1);
		resp.subscribe(report => this.dataSource.data = report as AgenteModel[])
		console.log('Respuesta : ', resp);
		console.log('this.dataSource : ', this.dataSource);
		console.log('this.dataSource.data : ', this.dataSource.data);

	}


	BuscarRutButtonClick() {
		console.log('BuscarRutButtonClick : ')
		//valida rut
		this.myrut = this.usernameElement.nativeElement.value;
		//
		console.log('myrut', this.myrut);
	}

	//AgentesButtonClick
	AgentesButtonClick() {

		this.mysecuencia = this.usernameElement.nativeElement.value
		this.myrut = this.usernameElement.nativeElement.value

		const dialogRef = this.dialog.open(AgentesTablaComponent, {
			width: '100%',
			maxWidth: '956px',
			height: 'auto',
			hasBackdrop: true,
			maxHeight: '700px',
			data: {
				rutIn: this.myrut,
				secuenciaIn: this.myrut,
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('result : ', result)
			this.listaAgentesSeleccionados = result as AgenteModel[]
		});

		/*
		var algo = {
			rutIn: this.myrut,
			secuenciaIn: this.mysecuencia,
		}
		this.commModel.openDialog(algo).subscribe(data => {
			console.log(data);
		});
		*/

	}

	VolverButtonClick(){
		this.router.navigate(['/home'])
	}

}


export class DialogDataExampleDialog {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
