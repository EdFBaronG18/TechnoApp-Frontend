import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Comment, Artist } from '../model/object';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getAllCommentsByArtist(artist: Artist): Observable<Comment[]> {
    const body = new HttpParams()
      .set("idArtist", artist.idArtist + "");
    return this.http.post<Comment[]>(environment.urlGetAllCommentByArtist,body);
  }

  insertComment(comment: Comment) {
    console.log("EL COMENTARIO A INGRESAR ES:", comment);
    const body = new HttpParams()
      .set("idArtist", comment.artist.idArtist + "")
      .set("idUser", comment.user.idUser + "")
      .set("content", comment.content+"");
    return this.http.post(environment.urlAddComment, body).subscribe();
  }
}
