import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto';
  public secuencia : any;
  public secuencia_input : "";
  public result = "";
  constructor() { }

  ngOnInit(): void {
  }

  pruebaSecuencia(){
    console.log(this.secuencia_input);
    this.secuencia = this.secuencia_input.split(','); 
    let cont = 0;
    let index_select = 0;
    this.secuencia.forEach((element , index) => {
        if(index != 0){
            if(element <= this.secuencia[index-1]){
              index_select = index;
              cont++;
            }
          }
    });
    if(cont === 1){
      this.secuencia.splice(index_select, 1);
    }
    this.result =(cont === 2 ? "Se encontro mas de un numero que rompe la regla que la 'secuencia es progresiva… (el anterior es menor que el siguiente)' y ya fue eliminado un numero." : this.secuencia)
  }


}
