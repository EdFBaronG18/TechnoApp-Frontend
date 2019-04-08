import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artists.service';
import { Artist } from '../model/object';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  myArtists: Array<Artist>;


  constructor(private artistService: ArtistsService) {
    this.myArtists = new Array();

    this.artistService.getAllArtists().subscribe(
      artistas => {
        this.myArtists = artistas;
        console.log(this.myArtists);
        
      }
    );
  }

  ngOnInit() {
  }

}
