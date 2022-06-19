import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"" , component:HomeComponent},
  {path:"clients" , component:ClientsComponent},
  {path:"about" , component:AboutComponent},
  {path:"why-us" , component:WhyUsComponent},
  {path:"skills" , component:SkillsComponent},
  {path:"services" , component:ServicesComponent},
  {path:"cta" , component:CtaComponent},
  {path:"portfolio" , component:PortfolioComponent},
  {path:"team" , component:TeamComponent},
  {path:"procong" , component:PricingComponent},
  {path:"faq" , component:FaqComponent},
  {path:"contact" , component:ContactComponent},
  {path:"**" , component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
