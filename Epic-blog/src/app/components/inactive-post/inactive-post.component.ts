import { Component } from '@angular/core';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  post!: Post[];

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return <Promise<iJSONresponse>>response.json();
        } else {
          throw new Error('ERROR');
        }
      })
      .then((dati) => {
        const found = dati.posts.filter((p) => p.active === false);

        if (found) {
          this.post = found;
          console.log(this.post);
        }
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }
}
