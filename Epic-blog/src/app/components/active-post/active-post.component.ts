import { Component } from '@angular/core';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
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
        const found = dati.posts.filter((p) => p.active === true);

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
