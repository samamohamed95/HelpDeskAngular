import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fourmsComponent } from './fourms/fourms.component';
import { contactComponent } from './contact/contact.component';
import { agentComponent } from './agent/agent.component';
import { loginComponent } from './login/login.component';
import { ticketComponent } from './ticket/ticket.component';
import { footerComponent } from './footer/footer.component';
import { navbarComponent } from './navbar/navbar.component';
import {ticketListComponent } from './ticketList/ticketList.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { KnowlodgeComponent } from './knowlodge/knowlodge.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './api.interceptor';
import { ServererrorComponent } from './servererror/servererror.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    fourmsComponent,
    contactComponent,
    agentComponent,
    loginComponent,
    ticketComponent,
    footerComponent,
    navbarComponent,
    ticketListComponent,
    AboutComponent,
    SignupComponent,
    KnowlodgeComponent,
    NotfoundComponent,
    ServererrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
