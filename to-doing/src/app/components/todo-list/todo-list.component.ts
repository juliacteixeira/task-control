import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskControlService } from '@app/services/task-control.service';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbModal,
  NgbOffcanvas
} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { IReturnData, ITask } from 'src/utils/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks!: ITask[];
  task!: any;
  showForm = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  editForm!: FormGroup;
  taskId = '';
  isLoading = true;
  isEdit = true;
  today!: NgbDateStruct;
  title = 'Editar tarefa';
  isLoadingOffCanvas = false;

  constructor(
    private tcService: TaskControlService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private offcanvasService: NgbOffcanvas
  ) {
    this.today = this.calendar.getToday();
  }

  async ngOnInit() {
    await this.getAll();
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      deadline: [this.today, Validators.required],
    });
  }

  getAll() {
    setTimeout(() => {
      this.tcService.getAll().subscribe({
        next: (data: IReturnData) => {
          this.tasks = data.data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.isLoading = false;
        },
      });
    }, 5000);
  }

  openModal(targetModal: any, task?: ITask, isEdit?: boolean) {
    this.modalService
      .open(targetModal, {
        centered: true,
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
          console.log(this.taskId);

          console.log(`Dismissed ${reason}`);
          this.editForm.patchValue({
            name: '',
            description: '',
            deadline: this.today,

          });
          this.taskId = ''
          this.isEdit = true;
          this.title = 'Editar tarefa';
        }
      );
    if (task) {
      this.taskId = task._id;
      isEdit = true;
      const dataFormat = new Date(task.deadline);

      const ngbFormatDate = {
        day: dataFormat.getDate(),
        month: dataFormat.getMonth() + 1,
        year: dataFormat.getFullYear(),
      };

      this.editForm.patchValue({
        name: task.name,
        description: task.description,
        deadline: ngbFormatDate
      });
    } else {
      this.isEdit = false;
      this.title = 'Nova Tarefa';
    }
  }

  onSubmit() {
    this.modalService.dismissAll();
    const formData = this.editForm.getRawValue();
    let date = this.editForm.getRawValue().deadline;

    formData.deadline = `${date.year}/${date.month}/${date.day}`;

    if(this.taskId) {
      this.tcService.update(this.taskId, formData).subscribe((response: any) => {
        this.tasks = response.tarefas;
      });
    } else {
      formData.status = false
      this.tcService.postNewTask(formData).subscribe((res: any) => {
        this.tasks = res.tarefas
        console.log(this.tasks);

      })
    }

  }

  deleteTask(item: ITask) {
    if(item._id) {
      this.tcService.deleteTask(item._id).subscribe((res: any) => {
        console.log(res);

        this.tasks = res.tarefas
        console.log(this.tasks);

      })
    }
  }

  completeTask(item: ITask, target?: any) {
    item.status = !item.status
    this.tcService.update(item._id, item).subscribe((response: any) => {
      this.tasks = response.tarefas;
      if (target) this.offcanvasService.dismiss(target)
    });
  }

  showTaskDetail(targetModal: any, task?: ITask) {
    if (task?._id) {
      console.log('entrou aqui');
      this.isLoadingOffCanvas = true;
      setTimeout(() => {
        this.isLoadingOffCanvas = false;
        this.tcService.getTask(task?._id).subscribe({
          next: (data: IReturnData) => {
            this.task = data.data;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
            this.isLoadingOffCanvas = false;
            this.offcanvasService.open(targetModal, {
              backdrop: true,
            });
          },
        });
      }, 5000);
    }
  }
}
