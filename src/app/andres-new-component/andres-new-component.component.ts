import { Component, OnInit } from '@angular/core';

interface PersonalInformation
{
  name:string;
  age:number;
  birthday:string;
  social_network_url:string;
}

@Component({
  selector: 'app-andres-new-component',
  templateUrl: './andres-new-component.component.html',
  styleUrls: ['./andres-new-component.component.css']
})
export class AndresNewComponentComponent implements OnInit {

  public name:string;
  public age:number;
  public birthday:Date;
  public social_network_url: string;
  public likes: number = 0;
  public dislikes: number = 0;
  public total_likes: number = 0;

  public persona:PersonalInformation = 
  {
      name:'Terminator',
      age:26,
      birthday:'4 Octubre 1991',
      social_network_url:'http://Facebook.com/MyProfile'
  }

  constructor() { }

  like ()
  {
    this.likes = this.likes+1;

    if (this.dislikes > 0)
        this.dislikes = this.dislikes-1;

    this.total_likes = this.total_likes + 1;
  }

  dislike ()
  {
    this.dislikes = this.dislikes+1;

    if (this.likes > 0)
        this.likes = this.likes-1;

    this.total_likes = this.total_likes + 1;
  }

  ngOnInit() {
  }

}
