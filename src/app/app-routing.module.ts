import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { NeedAuthGuard } from 'src/NeedAuthGuard';
import { RegisterComponent } from './register/register.component';
import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detail', component: ArtistListComponent},
  {path: 'comments', component: CommentListComponent, canActivate: [NeedAuthGuard]},
  {path: 'artists', component: ArtistListComponent, canActivate: [NeedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
