import { LogService } from './../log.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ticketService } from '../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticketList',
  template: ` <div>Showing ticket details for ticket: {{ id }}</div> `,
  templateUrl: './ticketList.component.html',
  styleUrls: ['./ticketList.component.css'],
})
export class ticketListComponent implements OnInit, OnDestroy {
  allproblems: any[] = [];
  id: number = 1;
  private sub: any;

  constructor(
    _ticketService: ticketService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LogService
  ) {
    _ticketService
      .getallproblems()
      // .subscribe((response) => (this.allproblems = response.data));
      .subscribe(
        (response) => {
          // Handle result
          this.allproblems = response.data;
        },
        (error) => {
          if (error.status == 500) {
            this.logger.error(`server Error and error is ${error.message}`);
            this.router.navigate(['serverError500']);
          } else {
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

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
