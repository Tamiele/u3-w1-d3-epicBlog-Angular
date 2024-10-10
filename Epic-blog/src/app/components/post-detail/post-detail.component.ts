import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post!: Post;

  // Il costruttore accetta un parametro di tipo ActivatedRoute, utile per ottenere i parametri della route corrente
  constructor(private route: ActivatedRoute) {}

  // Metodo ngOnInit che viene chiamato quando il componente è inizializzato
  ngOnInit() {
    // Sottoscrizione all'Observable "params" per ascoltare i cambiamenti nei parametri della route
    this.route.params.subscribe((params: any) => {
      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return <Promise<iJSONresponse>>response.json(); // Converte la risposta in un oggetto JSON tipizzato
          } else {
            throw new Error('ERROR');
          }
        })
        .then((dati) => {
          // Cerca nel JSON un post che abbia lo stesso id del parametro della route
          const found = dati.posts.find((p) => p.id == params.id);

          // Assegna il post trovato alla proprietà "post"
          if (found) {
            this.post = found;
          }
        })
        .catch((err) => {
          // Gestisce eventuali errori e li mostra nella console
          console.log('ERRORE', err);
        });
    });
  }
}
