import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/object';
import { Router } from '@angular/router';
import { UserInformationService } from '../services/user-information.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  misTweets: Array<Comment>;
  miTweet: Comment;

  //TODO

  constructor(private userInfo: UserInformationService, private router: Router,) { }

  ngOnInit() {
  }

  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

}
