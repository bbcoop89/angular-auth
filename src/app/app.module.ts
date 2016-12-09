import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { ROUTING } from "./app.routes";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
    ],
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, ROUTING],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
