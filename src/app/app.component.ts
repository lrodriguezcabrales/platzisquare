import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [ //Acepta cualquier tipo de objeto
    {nombre: 'Floreria la Gardenia'},
    {nombre: 'Donas la pasadita'},
    {nombre: 'Veterinaria Huellitas felices'}
  ] 
  
  //Se ejecuta al cargarse la clase
  constructor(){
    setTimeout(()=> {
      this.listo = true;
    }, 3000) //funcion anonima typescript ()=>{}
  }

}
