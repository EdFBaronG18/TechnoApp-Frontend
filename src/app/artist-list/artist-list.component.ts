import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artists.service';
import { Artist, Category } from '../model/object';
import { UserInformationService } from '../services/user-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  myArtists: Array<Artist>;


  constructor(private userInfo: UserInformationService, private artistService: ArtistsService,private router: Router ) {
    this.myArtists = new Array();
    
    this.artistService.getAllArtists().subscribe(
      artistas => {
        console.log(artistas);
        this.myArtists = artistas;
        console.log((this.myArtists[0].categories));
        console.log(this.myArtists);
      }
    );
  }

  ngOnInit() {
  }

  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

}
