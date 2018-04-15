import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a=3;
  b=5;
  listo = false;
  nombre:string = ''; // Puede ser simplemente nombre = ''
  apellidos = '';
  
  //Se ejecuta al cargarse la clase
  constructor(){
    setTimeout(()=> {
      this.listo = true;
    }, 3000) //funcion anonima typescript ()=>{}
  }

  hacerAlgo(){
    alert('Haciendo algo');
  }
}
