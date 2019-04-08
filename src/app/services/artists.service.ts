import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Artist } from "../model/object";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(environment.urlGetArtists);
  }

  insertArtist(artist: Artist, idCategory: number) {
    console.log("EL ARTISTA A INGRESAR ES:", artist);
    const body = new HttpParams()
      .set("name", artist.name + "")
      .set("description", artist.description + "")
      .set("image", artist.image + "")
      .set("idCategory", idCategory + "");
    return this.http.post(environment.urlAddArtist, body).subscribe();
  }
}
