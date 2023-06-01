import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private http: HttpClient) {}

  listOnglet = this.http.get('http://localhost:8080/api/zone').subscribe(
    (response) => {
      console.log(response); // Traitez la réponse ici
    },
    (error) => {
      console.error(error); // Gérez les erreurs ici
    }
  );
}


