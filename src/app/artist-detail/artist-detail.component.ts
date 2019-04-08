import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../model/object';
import { Router } from '@angular/router';
import { ArtistsService } from '../services/artists.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() mySelectedArtist: Artist;

  constructor(private router : Router, private servArtist : CommentService) { }

  ngOnInit() {
  }

  more(){
    this.servArtist.artist = this.mySelectedArtist;
    this.router.navigateByUrl("/comments");
  }
}
