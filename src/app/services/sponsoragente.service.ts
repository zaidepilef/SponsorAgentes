import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SponsoragenteService {

  constructor(private httpClient: HttpClient) { }

  public BuscarRutSponsor(rutSponsor: any) {
		return this.httpClient.get(`${environment.API_URL}/BuscarRutSponsor?rutSponsor=` + rutSponsor);
	}

  public InsertarSponsor(data: any) {
    return this.httpClient.post(`${environment.API_URL}/InsertarSponsor`, data);
}

	public ListarAgentes(rutSponsor: any) {
		return this.httpClient.get(`${environment.API_URL}/ListarAgentes?rutSponsor=` + rutSponsor);
	  }

    public InsertInsertarSponsorAgentearSponsor(data: any) {
      return this.httpClient.post(`${environment.API_URL}/InsertarSponsorAgente`, data);
    }

}
