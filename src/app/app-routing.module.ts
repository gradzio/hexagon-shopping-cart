import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HttpProductsServiceModule,
  InMemoryProductContextStorageModule,
  LoadAllProductsResolver,
  LoadAllProductsResolverModule, ProductEventDispatcherModule,
  ProductStateModule
} from '@basket';
import { HomePage } from './pages/home.page';
import { HomePageModule } from './pages/home.page-module';
import { CheckoutEventListenerModule } from '@checkout';

const routes: Routes = [{path: '', component: HomePage, resolve: {loadAllProducts: LoadAllProductsResolver}}];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, LoadAllProductsResolverModule, ProductStateModule, HttpProductsServiceModule, InMemoryProductContextStorageModule, CheckoutEventListenerModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
