import { Component, OnInit, Input} from '@angular/core';

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
