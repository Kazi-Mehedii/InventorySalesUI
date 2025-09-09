import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list-component/product-list-component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    //{path: '**', redirectTo: 'products'},
    { path: 'products', loadComponent: () => import('./features/product/product-list-component/product-list-component').then(m => m.ProductListComponent) } // Example lazy-loaded
];
