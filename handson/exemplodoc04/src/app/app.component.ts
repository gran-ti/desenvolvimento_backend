import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Pessoas';
  dados: Array<Pessoa> = []

  obterPessoas = () => {
      this.http.get<Pessoa[]>('http://localhost:49160/pessoas').subscribe(
          resultado => {
              /*const resObj: Array<any> = resultado as Array<Pessoa>;
              this.dados.splice(0,this.dados.length);
              for(let obj of resObj)
                 this.dados.push(new Pessoa(obj.nome, obj.sobrenome, obj.telefone ));*/
              this.dados = resultado;
          }
      )
  }

  constructor(private http : HttpClient) {}

}
