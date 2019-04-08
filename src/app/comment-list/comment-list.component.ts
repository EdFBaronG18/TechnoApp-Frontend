import { Component, OnInit } from '@angular/core';
import { Comment, Artist } from '../model/object';
import { Router } from '@angular/router';
import { UserInformationService } from '../services/user-information.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  myArtist: Artist; 
  myComments: Array<Comment>;
  myComment: Comment;

  //TODO

  constructor(private userInfo: UserInformationService, private router: Router, private commentService: CommentService) {

    this.myComments = new Array();
    this.myComment = new Comment();
    this.myComment.user = userInfo.getUser();

    this.commentService.getAllCommentsByArtist(this.myArtist).subscribe(
      artistas => {
        this.myComments = artistas;
        console.log(this.myComments);
        
      }
    );

   }

  ngOnInit() {
  }

  addNewTweet() {
    console.log("add tweet");
    this.commentService.insertComment(this.myComment);
    this.myComment = new Comment();
  }

  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

}
