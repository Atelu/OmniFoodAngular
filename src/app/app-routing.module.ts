import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: './main/home/home.module#HomeModule',
  },

  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
