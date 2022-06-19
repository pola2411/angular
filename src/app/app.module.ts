import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    HeaderComponent,
    ClientsComponent,
    WhyUsComponent,
    SkillsComponent,
    ServicesComponent,
    CtaComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
