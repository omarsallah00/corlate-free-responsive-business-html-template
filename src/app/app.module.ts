import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturesComponent } from './components/features/features.component';
import { RecentWorksComponent } from './components/recent-works/recent-works.component';
import { ServicesComponent } from './components/services/services.component';
import { MiddleComponent } from './components/middle/middle.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { ConatcatInfoComponent } from './components/conatcat-info/conatcat-info.component';
import { PartnerComponent } from './components/partner/partner.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import {routing} from "./app.routing";
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeatureDetailComponent } from './components/feature-detail/feature-detail.component';
import { PortfolioDetailComponent } from './components/portfolio-detail/portfolio-detail.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ReachUsComponent } from './components/reach-us/reach-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    SliderComponent,
    FeaturesComponent,
    RecentWorksComponent,
    ServicesComponent,
    MiddleComponent,
    ContentComponent,
    FooterComponent,
    BottomComponent,
    ConatcatInfoComponent,
    PartnerComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    ServicesPageComponent,
    AboutUsComponent,
    FeatureDetailComponent,
    PortfolioDetailComponent,
    BlogDetailComponent,
    ReachUsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
