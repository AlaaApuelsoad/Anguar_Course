import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';

//this function tells angular to look for Appcomponent html file to display its contnet on the screen
bootstrapApplication(AppComponent).catch((err) => console.error(err)); 
// bootstrapApplication(HeaderComponent).catch((err) => console.error(err)); 