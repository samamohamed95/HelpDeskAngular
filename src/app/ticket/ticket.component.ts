import { Component, OnInit } from '@angular/core';
import { ticketService } from '../ticket.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../log.service';

@Component({
  selector: 'App-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class ticketComponent implements OnInit {
  allcomments: any[] = [];
  mainPost: any = {};
  editpost: any[] = [];
  paramId: any = null;
  closeComment: boolean = true;
  newTicket: boolean = false;
  editepost: boolean = false;
  postData: string = '';

  commentform: FormGroup;
  constructor(
    private _ticketService: ticketService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LogService
  ) {
    //
    //
    this.route.params.subscribe((params) => {
      this.paramId = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.commentform = new FormGroup({
      comment: new FormControl(null),
      articlesID: new FormControl(this.paramId),
      commentOwner: new FormControl(1),
    });
    _ticketService.getallcomments(this.paramId).subscribe(
      (response) => {
        // Handle result
        this.allcomments = response.data;
      },
      (error) => {
        if (error.status == 500) {
          this.logger.error(`server Error and error is ${error.message}`);
          this.router.navigate(['serverError500']);
        } else {
          this.router.navigate(['serverError500']);

        }
        console.log(error);
      }
    );
    _ticketService.getpost(this.paramId).subscribe(
      (response) => {
        // Handle result
        this.mainPost = response.data;
      },
      (error) => {
        if (error.status == 500) {
          this.logger.error(`server Error and error is ${error.message}`);
          this.router.navigate(['serverError500']);
        } else {
          this.router.navigate(['serverError500']);

        }
        console.log(error);
      }
    );
  }
  ngOnInit(): void {}
  submitCommentForm(commentForm: FormGroup) {
    this._ticketService
      .createNewComment(commentForm.value)
      .subscribe((response) => {
        this._ticketService.getallcomments(this.paramId).subscribe(
          (response) => {
            // Handle result
            this.allcomments = response.data;
          },
          (error) => {
            if (error.status == 500) {
              this.logger.error(`server Error and error is ${error.message}`);
              this.router.navigate(['serverError500']);
            } else {
          this.router.navigate(['serverError500']);

            }
            console.log(error);
          }
        );
      });
  }

  openEditPost() {
    this.editepost = true;
  }
  closeEditePost() {
    this.editepost = false;
  }

  editTicket() {
    this._ticketService.editpost(this.paramId, this.postData).subscribe(
      (response) => {
        // Handle result
        this.mainPost[0].articlesBody = this.postData;
        this.closeEditePost();
      },
      (error) => {
        if (error.status == 500) {
          this.logger.error(`server Error and error is ${error.message}`);
          this.router.navigate(['serverError500']);
        } else {
          this.router.navigate(['serverError500']);

        }
        console.log(error);
      }
    );
  }

  setDate(date: Date) {
    const d = new Date();
    const nd = new Date(date);
    let diffYear = d.getFullYear() - nd.getFullYear();
    let diffMonth = d.getMonth() - nd.getMonth();
    let diffDay = d.getDay() - nd.getDay();
    let diffMinute = d.getMinutes() - nd.getMinutes();
    let diffSecond = d.getSeconds() - nd.getSeconds();
    let dd;
    let plural;
    if (diffYear != 0) {
      plural = diffYear > 1 ? 's' : '';
      dd = diffYear.toString() + ' year' + plural + ' ' + 'ago';
    } else if (diffMonth != 0) {
      plural = diffMonth > 1 ? 's' : '';
      dd = diffMonth.toString() + ' month' + plural + ' ' + 'ago';
    } else if (diffDay != 0) {
      plural = diffDay > 1 ? 's' : '';
      dd = diffDay.toString() + ' day' + plural + ' ' + 'ago';
    } else if (diffMinute != 0) {
      plural = diffMinute > 1 ? 's' : '';
      dd = diffMinute.toString() + ' minute' + plural + ' ' + 'ago';
    } else if (diffSecond != 0) {
      plural = diffSecond > 1 ? 's' : '';
      dd = diffSecond.toString() + ' second' + plural + ' ' + 'ago';
    }
    return dd;
  }
}
