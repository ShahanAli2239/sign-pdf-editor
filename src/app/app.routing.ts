import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './_auth/guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PrepareComponent } from './prepare/prepare.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';
import { DocumentListComponent } from './document-list/document-list.component';

/*
* Routing for the items feature are stored in the items module file
*/

const routes: Routes = [

    { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'add' , component: AddComponent},
    { path: 'showDocument' , component: DocumentListComponent },
    { path: 'prepare' , component:PrepareComponent},
    { path: 'review', component:ReviewComponent},
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
    { path: '',  redirectTo: '/login', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
