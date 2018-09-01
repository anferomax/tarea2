import { Component, OnInit } from '@angular/core';
import { Persona } from './moduleData';

//Nombre, contador, url_img, url_icon
@Component({
  selector: 'app-andres-new-component',
  templateUrl: './andres-new-component.component.html',
  styleUrls: ['./andres-new-component.component.css']
})
export class AndresNewComponentComponent implements OnInit {

  public data = {...Persona };
  
  public nombre:string = this.data.nombre;
  public descripcion:string = this.data.descripcion;
  public titulo:string = this.data.titulo;
  public subtitulo:string = this.data.subtitulo;
  public url: string = this.data.url;
  public perfil: string = this.data.perfil;
  public contador: number = this.data.contador;
  public likes: number = 0;
  public dislikes: number = 0;

  constructor() { }

  like ()
  {
    this.likes = this.likes+1;

    if (this.dislikes > 0)
        this.dislikes = this.dislikes-1;

    this.contador = this.contador + 1;
  }

  dislike ()
  {
    this.dislikes = this.dislikes+1;

    if (this.likes > 0)
        this.likes = this.likes-1;

    this.contador = this.contador + 1;
  }

  ngOnInit() {
  }

}
