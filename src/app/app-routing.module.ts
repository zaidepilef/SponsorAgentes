import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowroomComponent } from './pages/showroom/showroom.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';


import { CrearsponsorComponent } from './components/crearsponsor/crearsponsor.component';
import { CrearsponsoragenteComponent } from './components/crearsponsoragente/crearsponsoragente.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonsComponent } from './pages/showroom/buttons/buttons.component';
import { DialogsComponent } from './pages/showroom/dialogs/dialogs.component';
import { DatepickerExampleComponent } from './pages/showroom/datepicker-example/datepicker-example.component';
import { DialogExampleComponent } from './pages/showroom/dialog-example/dialog-example.component';
import { FormFieldExampleComponent } from './pages/showroom/form-field-example/form-field-example.component';


const routes: Routes = [

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'sponsor',
		pathMatch: 'full',
		component: SponsorComponent
	},
	{
		path: 'crearsponsoragente',
		pathMatch: 'full',
		component: CrearsponsoragenteComponent
	},
	{
		path: 'crearsponsor',
		pathMatch: 'full',
		component: CrearsponsorComponent
	},

	{
		path: 'showroom',
		pathMatch: 'full',
		component: ShowroomComponent
	},
	{
		path: 'showroom/buttons',
		pathMatch: 'full',
		component: ButtonsComponent
	},
	{
		path: 'showroom/dialogs',
		pathMatch: 'full',
		component: DialogExampleComponent
	},
	{
		path: 'showroom/datepicker',
		pathMatch: 'full',
		component: DatepickerExampleComponent
	},
	{
		path: 'showroom/form-field-example',
		pathMatch: 'full',
		component: FormFieldExampleComponent
	},
	
	{
		path: '404',
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
