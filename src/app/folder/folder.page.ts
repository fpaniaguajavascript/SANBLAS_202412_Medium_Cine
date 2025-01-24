import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonBadge, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MoviesManagerService } from '../services/movies-manager.service';
import { IMovie } from '../interfaces/imovie';
import { CommonModule } from '@angular/common';
import { FichaComponent } from "../components/ficha/ficha.component";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [IonBadge, CommonModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, FichaComponent],
})
export class FolderPage implements OnInit {
  public genero!: string;
  private activatedRoute = inject(ActivatedRoute);

  public peliculas : IMovie[] | undefined;

  moviesManager = inject(MoviesManagerService);

  constructor() {
  }

  ngOnInit() {
    this.genero = this.activatedRoute.snapshot.paramMap.get('genero') as string;

    //***Solución 'fácil'***
    if (this.genero === 'All') {
      this.peliculas = this.moviesManager.getMovies();
    } else {
      this.peliculas = this.moviesManager.getMovies().filter(p => p.Genre.includes(this.genero));
    }
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
