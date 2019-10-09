import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component' ;
import {  ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'create',component:CreateComponent},
 {path:'list/edit/:id',component:EditComponent},
  {path:'list/delete/:id',component:DeleteComponent},
  {path:'list/view/:id',component:ViewComponent},
{path:'nav',component:NavComponent},
{path:'home',component:HomeComponent},
{path:'list',component:ListComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
