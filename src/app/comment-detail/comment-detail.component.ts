import { Component, OnInit, Input } from '@angular/core';
import { Comment, User } from '../model/object';
import { UserInformationService } from '../services/user-information.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  @Input() mySelectedComment : Comment;
  @Input() listComment: Array<Comment>;
  user: User;
  constructor(private userInfo: UserInformationService, private commentService: CommentService) {
    this.user = userInfo.getUser();
   }

  ngOnInit() {
  }

  delete(){
    this.commentService.removeComment(this.mySelectedComment);
    this.listComment.splice(this.listComment.indexOf(this.mySelectedComment), 1);
  }  
}
