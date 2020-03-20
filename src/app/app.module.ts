import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DevComponent } from './components/dev/dev.component';
import { AsmComponent } from './components/asm/asm.component';
import { HomeComponent } from './components/home/home.component';

const route = [
  {path: '', component: HomeComponent},
  {path: 'asm', component: AsmComponent},
  {path: 'dep', component: DevComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    AsmComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
