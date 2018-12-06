import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UnauthorizedComponent } from './common/auth/unauthorized.component';
import { AuthGuard } from './common/auth/auth.guard';
import { LoginCallbackComponent } from './common/auth/login-callback.component';
import { LoginComponent } from './common/auth/login.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    //{ path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        },
    },
    {
        path: 'login-callback',
        component: LoginCallbackComponent,
        data: {
          title: 'Login Page'
        }
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
        data: {
          title: 'Unauthorized Page'
        }
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Home'
        },
        children: [
        //   { path: 'base', loadChildren: './views/base/base.module#BaseModule' },
        //   { path: 'buttons', loadChildren: './views/buttons/buttons.module#ButtonsModule' },
        //   { path: 'charts', loadChildren: './views/chartjs/chartjs.module#ChartJSModule' },
            { path: 'dashboard', component: DashboardComponent }// loadChildren: './views/dashboard/dashboard.module#DashboardModule' },
        //   { path: 'icons', loadChildren: './views/icons/icons.module#IconsModule' },
        //   { path: 'notifications', loadChildren: './views/notifications/notifications.module#NotificationsModule' },
        //   { path: 'theme', loadChildren: './views/theme/theme.module#ThemeModule' },
        //   { path: 'widgets', loadChildren: './views/widgets/widgets.module#WidgetsModule' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
