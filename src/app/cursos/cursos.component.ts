import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];
 
  constructor(private CursoSevice: CursosService){
    this.nomePortal = 'http://youtube.com'
    this.cursos = this.CursoSevice.getCursos();
  }
}
