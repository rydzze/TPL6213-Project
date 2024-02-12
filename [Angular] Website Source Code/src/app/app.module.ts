import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'basic-py-4bii',
    loadChildren: () =>
      import('./pages/basic-py-4bii/basic-py-4bii.module').then(
        (m) => m.BasicPy4biiModule
      ),
  },
  {
    path: 'basic-py-3aiii',
    loadChildren: () =>
      import('./pages/basic-py-3aiii/basic-py-3aiii.module').then(
        (m) => m.BasicPy3aiiiModule
      ),
  },
  {
    path: 'basic-py-4',
    loadChildren: () =>
      import('./pages/basic-py-4/basic-py-4.module').then(
        (m) => m.BasicPy4Module
      ),
  },
  {
    path: 'basic-py-2d',
    loadChildren: () =>
      import('./pages/basic-py-2d/basic-py-2d.module').then(
        (m) => m.BasicPy2dModule
      ),
  },
  {
    path: 'basic-py-3bii',
    loadChildren: () =>
      import('./pages/basic-py-3bii/basic-py-3bii.module').then(
        (m) => m.BasicPy3biiModule
      ),
  },
  {
    path: 'sample-app-inventory',
    loadChildren: () =>
      import('./pages/sample-app-inventory/sample-app-inventory.module').then(
        (m) => m.SampleAppInventoryModule
      ),
  },
  {
    path: 'basic-py-1d',
    loadChildren: () =>
      import('./pages/basic-py-1d/basic-py-1d.module').then(
        (m) => m.BasicPy1dModule
      ),
  },
  {
    path: 'basic-py-2a',
    loadChildren: () =>
      import('./pages/basic-py-2a/basic-py-2a.module').then(
        (m) => m.BasicPy2aModule
      ),
  },
  {
    path: 'background-6',
    loadChildren: () =>
      import('./pages/bg-6/bg-6.module').then((m) => m.Bg6Module),
  },
  {
    path: 'basic-py-2cii',
    loadChildren: () =>
      import('./pages/basic-py-2cii/basic-py-2cii.module').then(
        (m) => m.BasicPy2ciiModule
      ),
  },
  {
    path: 'background-5',
    loadChildren: () =>
      import('./pages/bg-5/bg-5.module').then((m) => m.Bg5Module),
  },
  {
    path: 'basic-py-4bv',
    loadChildren: () =>
      import('./pages/basic-py-4bv/basic-py-4bv.module').then(
        (m) => m.BasicPy4bvModule
      ),
  },
  {
    path: 'basic-py-4biv',
    loadChildren: () =>
      import('./pages/basic-py-4biv/basic-py-4biv.module').then(
        (m) => m.BasicPy4bivModule
      ),
  },
  {
    path: 'sample-app-purchases',
    loadChildren: () =>
      import('./pages/sample-app-purchases/sample-app-purchases.module').then(
        (m) => m.SampleAppPurchasesModule
      ),
  },
  {
    path: 'basic-py-1a',
    loadChildren: () =>
      import('./pages/basic-py-1a/basic-py-1a.module').then(
        (m) => m.BasicPy1aModule
      ),
  },
  {
    path: 'basic-py-2g',
    loadChildren: () =>
      import('./pages/basic-py-2g/basic-py-2g.module').then(
        (m) => m.BasicPy2gModule
      ),
  },
  {
    path: 'background-3',
    loadChildren: () =>
      import('./pages/bg-3/bg-3.module').then((m) => m.Bg3Module),
  },
  {
    path: 'sample-app-sales',
    loadChildren: () =>
      import('./pages/sample-app-sales/sample-app-sales.module').then(
        (m) => m.SampleAppSalesModule
      ),
  },
  {
    path: 'sample-app-intro',
    loadChildren: () =>
      import('./pages/sample-app-intro/sample-app-intro.module').then(
        (m) => m.SampleAppIntroModule
      ),
  },
  {
    path: 'basic-py-3ai',
    loadChildren: () =>
      import('./pages/basic-py-3ai/basic-py-3ai.module').then(
        (m) => m.BasicPy3aiModule
      ),
  },
  {
    path: 'basic-py-3bi',
    loadChildren: () =>
      import('./pages/basic-py-3bi/basic-py-3bi.module').then(
        (m) => m.BasicPy3biModule
      ),
  },
  {
    path: 'basic-py-4aii',
    loadChildren: () =>
      import('./pages/basic-py-4aii/basic-py-4aii.module').then(
        (m) => m.BasicPy4aiiModule
      ),
  },
  {
    path: 'basic-py-1b',
    loadChildren: () =>
      import('./pages/basic-py-1b/basic-py-1b.module').then(
        (m) => m.BasicPy1bModule
      ),
  },
  {
    path: 'basic-py-2f',
    loadChildren: () =>
      import('./pages/basic-py-2f/basic-py-2f.module').then(
        (m) => m.BasicPy2fModule
      ),
  },
  {
    path: 'basic-py-1e',
    loadChildren: () =>
      import('./pages/basic-py-1e/basic-py-1e.module').then(
        (m) => m.BasicPy1eModule
      ),
  },
  {
    path: 'basic-py-3aii',
    loadChildren: () =>
      import('./pages/basic-py-3aii/basic-py-3aii.module').then(
        (m) => m.BasicPy3aiiModule
      ),
  },
  {
    path: 'basic-py-2ci',
    loadChildren: () =>
      import('./pages/basic-py-2ci/basic-py-2ci.module').then(
        (m) => m.BasicPy2ciModule
      ),
  },
  {
    path: 'basic-py-4biii',
    loadChildren: () =>
      import('./pages/basic-py-4biii/basic-py-4biii.module').then(
        (m) => m.BasicPy4biiiModule
      ),
  },
  {
    path: 'basic-py-2e',
    loadChildren: () =>
      import('./pages/basic-py-2e/basic-py-2e.module').then(
        (m) => m.BasicPy2eModule
      ),
  },
  {
    path: 'basic-py-3',
    loadChildren: () =>
      import('./pages/basic-py-3/basic-py-3.module').then(
        (m) => m.BasicPy3Module
      ),
  },
  {
    path: 'basic-py-1',
    loadChildren: () =>
      import('./pages/basic-py-1/basic-py-1.module').then(
        (m) => m.BasicPy1Module
      ),
  },
  {
    path: 'training-video',
    loadChildren: () =>
      import('./pages/training-video/training-video.module').then(
        (m) => m.TrainingVideoModule
      ),
  },
  {
    path: 'background-2',
    loadChildren: () =>
      import('./pages/bg-2/bg-2.module').then((m) => m.Bg2Module),
  },
  {
    path: 'basic-py-4ai',
    loadChildren: () =>
      import('./pages/basic-py-4ai/basic-py-4ai.module').then(
        (m) => m.BasicPy4aiModule
      ),
  },
  {
    path: 'basic-py-1c',
    loadChildren: () =>
      import('./pages/basic-py-1c/basic-py-1c.module').then(
        (m) => m.BasicPy1cModule
      ),
  },
  {
    path: 'basic-py-2',
    loadChildren: () =>
      import('./pages/basic-py-2/basic-py-2.module').then(
        (m) => m.BasicPy2Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: 'basic-py-1f',
    loadChildren: () =>
      import('./pages/basic-py-1f/basic-py-1f.module').then(
        (m) => m.BasicPy1fModule
      ),
  },
  {
    path: 'strace',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'background-1',
    loadChildren: () =>
      import('./pages/bg-1/bg-1.module').then((m) => m.Bg1Module),
  },
  {
    path: 'basic-py-2b',
    loadChildren: () =>
      import('./pages/basic-py-2b/basic-py-2b.module').then(
        (m) => m.BasicPy2bModule
      ),
  },
  {
    path: 'sample-app-suppliers',
    loadChildren: () =>
      import('./pages/sample-app-suppliers/sample-app-suppliers.module').then(
        (m) => m.SampleAppSuppliersModule
      ),
  },
  {
    path: 'background-4',
    loadChildren: () =>
      import('./pages/bg-4/bg-4.module').then((m) => m.Bg4Module),
  },
  {
    path: 'basic-py-4bi',
    loadChildren: () =>
      import('./pages/basic-py-4bi/basic-py-4bi.module').then(
        (m) => m.BasicPy4biModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
