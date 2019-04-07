import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../model/object';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() mySelectedArtist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
