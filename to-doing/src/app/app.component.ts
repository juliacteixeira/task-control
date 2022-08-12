import { Component } from '@angular/core';
import { TaskControlService } from './services/task-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-doing';
  constructor(private tcService: TaskControlService) {
    this.tcService.getAll();
  }
}
