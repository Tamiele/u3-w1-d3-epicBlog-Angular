import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',

    component: HomeComponent,
  },
  {
    path: 'inactive-post',
    component: InactivePostComponent,
  },
  {
    path: 'active-post',
    component: ActivePostComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
