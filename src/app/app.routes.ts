import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './products/products.component'; // Importa el componente de productos
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';





export const routes: Routes = [
    { path: '', component: WelcomeScreenComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductsComponent }, // Ruta hacia el componente de productos
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
