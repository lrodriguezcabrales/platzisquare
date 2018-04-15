import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [ //Acepta cualquier tipo de objeto
    { active: false, nombre: 'Floreria la Gardenia'},
    { active: true, nombre: 'Donas la pasadita'},
    { active: true, nombre: 'Veterinaria Huellitas felices'},
    { active: false, nombre: 'Sushi Naruto'},
    { active: true, nombre: 'Hotel el Dorado'},
    { active: true, nombre: 'Hamburguesas Delirio'}
  ] 
  
  //Se ejecuta al cargarse la clase
  constructor(){
  }

}
