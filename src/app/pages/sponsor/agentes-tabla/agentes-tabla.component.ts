import { Router } from "@angular/router"
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

	ElementData: any[] = [];
	displayedColumns: string[] = [
		'select',

		'codAgente',
		'habilitado',
		'nombreAgente',
		'rutAgente',
		'dvAgente',
		'rutCompletoAgente',
	];

	agentesDataSource = new MatTableDataSource<any>(this.ElementData);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	selection = new SelectionModel<any>(true, []);



	/// anterior
	listaAgentes: AgenteModel[] = []; // será los mismo que viene de API
	listaAgentesSeleccionados: AgenteModel[] = []; // será los mismo que viene de API
	todosSeleccionados: boolean;

	public rut: string
	public secuencia: string;


	constructor(
		public dialogRef: MatDialogRef<AgentesTablaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private sponsorAgenteService: SponsoragenteService,
		private router: Router
	) {
		this.rut = data.rutIn
		this.secuencia = data.secuenciaIn
	}

	ngOnInit(): void {
		console.log('this.data : ', this.data)
		//this.rut = this.data.
		this.agentesDataSource.paginator = this.paginator;
		this.agentesDataSource.sort = this.sort;
		this.getAllReports()
	}

	

	public getAllReports() {
		let resp = this.sponsorAgenteService.ListarAgentes(1);
		resp.subscribe(report => this.agentesDataSource.data = report as AgenteModel[])

		//anterior
		// ToDo: recorrer a mano esto para los checkCustom
		// lista sucia - lista limpia
		this.sponsorAgenteService.ListarAgentes(1).subscribe((res) => {
			this.listaAgentes = res as AgenteModel[]
		});
	}

	// si me voy sin hacer nada
	onNoClick(): void {
		console.log('y ahora me voy!!!')
		this.dialogRef.close([])
	}

	CerrarButtonClick(): void {
		console.log('y ahora me voy!!!')
		this.dialogRef.close([])
		this.router.navigate(['/home'])
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
			this.dialogRef.close(this.listaAgentesSeleccionados)
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
				if (e.habilitado) {
					e.seleccionado = this.todosSeleccionados
				}
				return e
			}

			return e
		});

		console.log('listaAgentes : ', this.listaAgentes)
		this.agentesDataSource.data = this.listaAgentes as AgenteModel[]
	}

}
