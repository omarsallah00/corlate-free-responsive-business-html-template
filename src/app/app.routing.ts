import  {ModuleWithProviders} from '@angular/core';
import  {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {FormulaireComponent} from "./pages/formulaire/formulaire.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'services',
    component:ServicesPageComponent
  }
  ,
  {
    path: 'formulaire',
    component:FormulaireComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
