import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../app/services/service.service';
import { Medicion } from './models/Medicion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit {
  idSensorSeleccionado: number;
  mediciones: Medicion[] = [];
  fechaInicial: Date;
  fechaFinal: Date;
  columnas = [];

  constructor(private servicio: ServiceService) { }

  ngOnInit() {
    this.columnas = [
      { header: 'Id de la Medicion' },
      { header: 'id del Sensor' },
      { header: 'Ubicacion Sensor' },
      { header: 'Fecha de la Medicion' }
    ];

    this.getMediciones();
  }

  getMediciones() {
    this.servicio.getMedicionSensores()
      .subscribe(medicion =>
        this.mediciones = medicion.data.Items
      );
  }
}
