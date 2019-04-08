import { Component, OnInit, Input} from '@angular/core';
import { Artist } from '../model/object';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  @Input() mySelectedArtist: Artist; 

  constructor() { }

  ngOnInit() {
  }

}
