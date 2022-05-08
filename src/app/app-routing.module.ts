import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { footerComponent } from './footer/footer.component';
import { navbarComponent } from './navbar/navbar.component';
import { contactComponent } from './contact/contact.component';
import { fourmsComponent } from './fourms/fourms.component';
import { ticketListComponent } from './ticketList/ticketList.component';
import { loginComponent } from './login/login.component';
import { agentComponent } from './agent/agent.component';
import { ticketComponent } from './ticket/ticket.component';
import { SignupComponent } from './signup/signup.component';
import { KnowlodgeComponent } from './knowlodge/knowlodge.component';
import { ServererrorComponent } from './servererror/servererror.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'ticketList', pathMatch: 'full' },
  { path: 'ticketList', component: ticketListComponent },
  { path: 'ticketList/:id', component: ticketComponent },
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'footer' , component:footerComponent},
  {path:'navbar' , component:navbarComponent},
  {path:'contact' , component:contactComponent},
  {path:'fourms' , component:fourmsComponent},
  {path:'ticketList' , component:ticketListComponent},
  {path:'signup' , component:SignupComponent},
  {path:'login' , component:loginComponent},
  {path:'ticket' , component:ticketComponent},
  {path:'agent' , component:agentComponent},
  {path:'knowlodge' , component:KnowlodgeComponent},
  {path:'serverError500' , component:ServererrorComponent},
  {path:'**' , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 providers: [
]
