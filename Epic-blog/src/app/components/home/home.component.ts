import { Component } from '@angular/core';
import { Post } from '../../interfaces/post'; // Assicurati che il path sia corretto

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  arrayPost: Post[] = [];
  postInEvidenza: Post | undefined;
  postRandomici: Post | undefined;

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('ERROR');
        }
      })
      .then((dati) => {
        console.log(dati);
        this.getPost(dati); // Passa i dati al metodo getPost
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }

  getPost(dati: { posts: Post[] }) {
    dati.posts.forEach((post: Post) => {
      this.arrayPost.push(post);
    });

    console.log(this.arrayPost);

    if (this.arrayPost.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.arrayPost.length); // Genera un indice casuale
      this.postInEvidenza = this.arrayPost[randomIndex];
    }
  }
}
