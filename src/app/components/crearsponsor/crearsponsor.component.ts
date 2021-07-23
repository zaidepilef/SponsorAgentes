import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SponsoragenteService } from 'src/app/services/sponsoragente.service';
import swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AgenteModel } from 'src/app/models/AgenteModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';


export interface DialogData {
	animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
	selector: 'app-crearsponsor',
	templateUrl: './crearsponsor.component.html',
	styleUrls: ['./crearsponsor.component.css']
})

export class CrearsponsorComponent implements OnInit {
	//objeto al API
	rutSponsor: string;
	secuenciaRut: string;
	dataEnvia: any = {}
	response: any = [{}]
	formGroupSponsor: FormGroup;

	// constructor(public dialog: MatDialog)

	constructor(private fb: FormBuilder, private service: SponsoragenteService, private router: Router, public dialog: MatDialog) {
		this.rutSponsor = "0";
		this.formGroupSponsor = this.fb.group({
			rut: ['', [
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(8)
			]],
		});
	}

	ngOnInit(): void {

	}



	onKeyRut(event: any) { // without type info
		this.rutSponsor = event.target.value;
		console.log('this.rutSponsor : ', this.rutSponsor)
	}

	onKeySecuenciaRut(event: any) { // without type info
		//this.rutSponsor = event.target.value;
		this.secuenciaRut = event.target.value;
		console.log('this.rutSponsor : ', this.rutSponsor)
		console.log('this.secuenciaRut : ', this.secuenciaRut)
	}


	BuscarRutSponsor() {

		this.dataEnvia = {
			rutSponsor: this.rutSponsor,
			secuenciaRut: this.secuenciaRut,
		}

	}

	openDialog() {
		this.dialog.open(DialogDataExampleDialog, {
			width: '60%',
			data: {
				animal: 'panda'
			}
		});
	}
}

@Component({
	selector: 'dialog-data-example-dialog',
	templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {

	ElementData: AgenteModel[] = [];
	displayedColumns: string[] = ['codAgente'];
	dataSource = new MatTableDataSource<AgenteModel>(this.ElementData);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

	}
}


