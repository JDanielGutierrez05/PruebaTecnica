import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../app/services/service.service';
import { Medicion } from './models/Medicion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit {
  mediciones: Medicion[] = [];
  idSensorSeleccionado: number;
  fechaInicial: Date;
  fechaFinal: Date;

  constructor(private servicio: ServiceService) { }

  ngOnInit() {
    this.getMediciones();
  }

  getMediciones() {
    this.servicio.getMedicionSensores()
      .subscribe(medicion =>
        this.mediciones = medicion.data.Items
      );
  }
}
