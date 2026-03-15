import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';

const routes: Routes = [

{
path:'',
component:HomeComponent
},

{
path:'wishes',
component:WishesComponent
}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }