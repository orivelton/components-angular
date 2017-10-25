import { NotFoundComponent } from './not-found/not-found.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { ProgressComponent } from './progress/progress.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

// Route Configuration
export const routes: Routes = [  
  {path: '', component: HeaderComponent, pathMatch: 'full'},
  {path: 'input', component: InputComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'ng-class', component: NgClassComponent},
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
