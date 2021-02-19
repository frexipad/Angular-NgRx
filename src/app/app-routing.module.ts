import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: '', component: PageNotFoundComponent},
  {path: 'product', component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
