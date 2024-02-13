import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './ui/products/products.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent, canActivate: [AuthGuard], data: {roles: ['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
