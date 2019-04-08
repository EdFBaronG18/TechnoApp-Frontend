import { Component, OnInit } from "@angular/core";
import { Comment, Artist } from "../model/object";
import { Router } from "@angular/router";
import { UserInformationService } from "../services/user-information.service";
import { CommentService } from "../services/comment.service";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  myArtist: Artist;
  myComments: Array<Comment>;
  myComment: Comment;

  constructor(private userInfo: UserInformationService, private router: Router, private commentService: CommentService) { 
    this.myComments = new Array();
    this.myComment = new Comment();
    this.myArtist = JSON.parse(sessionStorage.getItem(commentService.TOKEN));
    this.myComments = this.myArtist.comments;
    this.myComment.user = userInfo.getUser();
    this.myComment.artist = this.myArtist;

    console.log("Hello");    
    console.log(this.myArtist);

    console.log("COMMENTS");
    this.myArtist.comments.forEach(element => {
      element.create = new Date(element.create);
    });
  }

  ngOnInit() {}

  addNewComment() {
    console.log("add comment");
    this.myComment.create = new Date();
    this.commentService.insertComment(this.myComment);
    this.myArtist.comments.push(this.myComment);
   // this.myComments.push(this.myComment);
    this.myComment.artist = null;
    sessionStorage.setItem(this.commentService.TOKEN, JSON.stringify(this.myArtist));
    this.myComment = new Comment();
    this.myComment.user   = this.userInfo.getUser();
    this.myComment.artist = this.myArtist;
  }

  logout() {
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

  goBack() {
    this.commentService = null;
    this.router.navigateByUrl("/");
  }

 }

