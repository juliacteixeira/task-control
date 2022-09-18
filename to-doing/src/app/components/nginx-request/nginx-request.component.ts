import { Component, OnInit } from '@angular/core';
import { NginxRequestsService } from '@app/services/nginx-requests.service';

@Component({
  templateUrl: './nginx-request.component.html',
  styleUrls: ['./nginx-request.component.scss'],
})
export class NginxRequestComponent implements OnInit {
  req: Array<any> = [];
  iterator = 1;
  isLoadingOffCanvas = false;
  constructor(private nginxService: NginxRequestsService) {}

  ngOnInit(): void {}

  sendRequest() {
    this.nginxService.get().subscribe((res) => {
      this.req.push(res);
    });
  }

  sendGroupRequest() {
    let i = 1
    while (i <= 15) {
      this.isLoadingOffCanvas = true;
      this.nginxService.get().subscribe({
        next: (res) => {
          this.req.push(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.isLoadingOffCanvas = false;
        },
      });
      this.iterator++;
      i++
    }
  }
}
