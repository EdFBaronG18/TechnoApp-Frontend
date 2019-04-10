import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';    
import { CommentListComponent } from './comment-list/comment-list.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import {MatCardModule} from '@angular/material/card';
import { NeedAuthGuard } from 'src/NeedAuthGuard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArtistInsertComponent } from './artist-insert/artist-insert.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {TranslateModule} from '@ngx-translate/core';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ArtistDetailComponent,
    ArtistListComponent,
    CommentDetailComponent,
    CommentListComponent,
    ArtistProfileComponent,
    ArtistInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatSlideToggleModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
        }
      }
    )

  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
 }
 
