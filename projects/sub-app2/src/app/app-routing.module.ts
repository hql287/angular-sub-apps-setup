import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: 'app2/one', component: View1Component },
  { path: 'app2/two', component: View2Component },
  { path: 'app2', redirectTo: 'app2/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
