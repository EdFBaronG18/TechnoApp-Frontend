import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-artist-insert',
  templateUrl: './artist-insert.component.html',
  styleUrls: ['./artist-insert.component.css']
})
export class ArtistInsertComponent implements OnInit {

  constructor(  private userInfo: UserInformationService, private router: Router, private commentService: CommentService) { 
      }

  ngOnInit() {
  }

  logout() {
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

  goBack() {
    this.router.navigateByUrl("/");
  }
}
