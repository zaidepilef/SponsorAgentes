import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AgenteModel } from 'src/app/models/AgenteModel';
import { SponsoragenteService } from 'src/app/services/sponsoragente.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-agentes-tabla',
	templateUrl: './agentes-tabla.component.html',
	styleUrls: ['./agentes-tabla.component.css']
})


export class AgentesTablaComponent implements OnInit {

	listaAgentes: AgenteModel[] = []; // será los mismo que viene de API
	listaAgentesSeleccionados: AgenteModel[] = []; // será los mismo que viene de API
	todosSeleccionados: boolean;

	public rut: string
	public secuencia: string;


	constructor(
		public dialogRef: MatDialogRef<AgentesTablaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private sponsorAgenteService: SponsoragenteService
	) {
		this.rut = data.rutIn
		this.secuencia = data.secuenciaIn
	}

	ngOnInit(): void {
		console.log('this.data : ', this.data)
		//this.rut = this.data.
		//this.agentesDataSource.paginator = this.paginator;
		//this.agentesDataSource.sort = this.sort;
		this.getAllReports()
	}

	onNoClick(): void {
		console.log('y ahora me voy!!!')
		this.dialogRef.close(this.listaAgentesSeleccionados)
	}

	public getAllReports() {
		//let resp = this.sponsorAgenteService.ListarAgentes(1);
		//resp.subscribe(report => this.agentesDataSource.data = report as AgenteModel[])
		// ToDo: recorrer a mano esto para los checkCustom
		// lista sucia - lista limpia
		this.sponsorAgenteService.ListarAgentes(1).subscribe((res) => {
			this.listaAgentes = res as AgenteModel[]
		});
	}


	isAllSelected() {
		//const numSelected = this.selection.selected.length;
		//const numRows = this.agentesDataSource.data.length;
		//return numSelected === numRows;
	}


	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		//this.isAllSelected() ? this.selection.clear() : this.agentesDataSource.data.forEach(row => this.selection.select(row));
	}

	ListoButtonClick() {
		//this.selection.selected.forEach(s => console.log(s.name));
		let arrayub = []
		arrayub = this.listaAgentes.filter((e) => {
			if (e.seleccionado == true && e.disponible == 'S') {
				return e
			}
		});
		console.log('arrayub : ', arrayub)
		if (arrayub.length > 0) {
			this.listaAgentesSeleccionados = arrayub
			//this.onNoClick()
		}

	}


	/// cambi estado en la lsista
	onChangeSelector($event) {
		const agente = $event.target.value;
		const isChecked = $event.target.checked;
		console.log('agente: ', agente)
		console.log('isChecked: ', isChecked)
		///sebebo enviar todos los check

		this.listaAgentes = this.listaAgentes.map((e) => {

			if (e.codAgente == agente) {
				e.seleccionado = isChecked
				this.todosSeleccionados = false
				return e
			}
			if (agente == -1) {
				e.seleccionado = this.todosSeleccionados
				return e
			}
			return e
		});


		console.log('listaAgentes : ', this.listaAgentes)
	}

}
