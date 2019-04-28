import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AdminUsersComponent } from 'src/app/admin-users/admin-users.component';
import { ExpertComponent } from 'src/app/expert/expert.component';
import { ExpertRatingComponent } from 'src/app/expert-rating/expert-rating.component';
import { ExpertSurveysComponent } from 'src/app/expert-surveys/expert-surveys.component';
import { UserHomeComponent } from 'src/app/user-home/user-home.component';
import { UserFormComponent } from 'src/app/user-form/user-form.component';
import { UserFormsComponent } from 'src/app/user-forms/user-forms.component';
import { NewSurveysComponent } from 'src/app/new-surveys/new-surveys.component';
import { RatedSurveysComponent } from 'src/app/rated-surveys/rated-surveys.component';

import { AdminGuardService as AdminGuard } from './admin-guard.service';
import { ExpertGuardService as ExpertGuard } from './expert-guard.service';

export const appRoutes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'submit', component: UserFormComponent },
  { path: 'submit/:id', component: UserFormComponent },
  { path: 'filled', component: UserFormsComponent },
  { path: '', component: LoginComponent },
  { path: 'reset/:id/:token', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin-users', component: AdminUsersComponent, canActivate: [AdminGuard] },
  { path: 'new-surveys', component: NewSurveysComponent, canActivate: [AdminGuard] },
  { path: 'rated-surveys', component: RatedSurveysComponent, canActivate: [AdminGuard] },
  { path: 'expert', component: ExpertComponent, canActivate: [ExpertGuard] },
  { path: 'expert-rating/:id', component: ExpertRatingComponent, canActivate: [ExpertGuard] },
  { path: 'expert-surveys', component: ExpertSurveysComponent, canActivate: [ExpertGuard] },
  { path: '**', redirectTo: '' }
];
