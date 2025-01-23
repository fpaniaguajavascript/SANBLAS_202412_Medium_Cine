import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MoviesManagerService } from '../services/movies-manager.service';
import { IMovie } from '../interfaces/imovie';
import { CommonModule } from '@angular/common';
import { FichaComponent } from "../components/ficha/ficha.component";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FichaComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  public peliculas : IMovie[] | undefined;

  moviesManager = inject(MoviesManagerService);

  constructor() {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //***Solución 'fácil'***
    this.peliculas = this.moviesManager.getMovies();
    //***Fin de solución 'fácil'***

    /*
    //***Solución 'difícil'***
    this.moviesManager.getMovies().subscribe({
      next : data => {
        this.peliculas = data;
      }, 
      complete : () => {
        console.log('Completado');
      }
    });
    //***Fin de solución difícil***
    */    
  }
}
