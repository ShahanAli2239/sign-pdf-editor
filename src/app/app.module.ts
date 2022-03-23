import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';



import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


import { AppComponent } from './app.component';
import { UiModule } from './_shared/ui/ui.module';
import { FakeBackendInterceptor } from './_shared/fakebackend';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_auth/guards/auth.guard';
import { TokenIntercept } from './_auth/tokenintercept';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ItemsModule } from './items/items.module';

import { ItemsService } from './items/_services/items.service';
import { AuthService } from './_auth/services/auth.service';
import { AddComponent } from './add/add.component';
import { PrepareComponent } from './prepare/prepare.component';
import { ReviewComponent } from './review/review.component';
import { ProgressComponent } from './progress/progress.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    AddComponent,
    PrepareComponent,
    ReviewComponent,
    ProgressComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule,
    UiModule,
    HttpClientModule,
    RouterModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule,
    ItemsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MDBBootstrapModule,
    NgxFileDropModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercept,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
    AuthService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
