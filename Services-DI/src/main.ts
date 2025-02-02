import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// Creation od custom Token for service an providers

export const TasksServiceToken = new InjectionToken<TasksService>(
  'tasks-service-token'
);

bootstrapApplication(AppComponent, {
  providers:[{provide: TasksServiceToken , useClass: TasksService}]  ,          //another method of providing of services
}).catch((err) => console.error(err));

//bootstrapApplication(AppComponent).catch((err) => console.error(err));
