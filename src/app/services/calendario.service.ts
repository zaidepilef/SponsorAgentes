import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})

export class CalendarioService {

	constructor(private httpClient: HttpClient) { }


	public BuscarRutSponsor(rutSponsor: any) {
		return this.httpClient.get(`${environment.API_URL}/BuscarRutSponsor?rutSponsor=` + rutSponsor);
	}

	public ListarAgentes(rutSponsor: any) {
		return this.httpClient.get(`${environment.API_URL}/ListarAgentes?rutSponsor=` + rutSponsor);
	  }


	

}
