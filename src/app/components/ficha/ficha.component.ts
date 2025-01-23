import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone' ;
import { IMovie } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class FichaComponent  implements OnInit {

  @Input() pelicula : IMovie | undefined;

  constructor() { }

  ngOnInit() {}

}
