import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import BasicPy4bii from './views/basic-py-4bii'
import BasicPy3aiii from './views/basic-py-3aiii'
import BasicPy4 from './views/basic-py-4'
import BasicPy2d from './views/basic-py-2d'
import BasicPy3bii from './views/basic-py-3bii'
import SampleAppInventory from './views/sample-app-inventory'
import BasicPy1d from './views/basic-py-1d'
import BasicPy2a from './views/basic-py-2a'
import Bg6 from './views/bg-6'
import BasicPy2cii from './views/basic-py-2cii'
import Bg5 from './views/bg-5'
import BasicPy4bv from './views/basic-py-4bv'
import BasicPy4biv from './views/basic-py-4biv'
import SampleAppPurchases from './views/sample-app-purchases'
import BasicPy1a from './views/basic-py-1a'
import BasicPy2g from './views/basic-py-2g'
import Bg3 from './views/bg-3'
import SampleAppSales from './views/sample-app-sales'
import SampleAppIntro from './views/sample-app-intro'
import BasicPy3ai from './views/basic-py-3ai'
import BasicPy3bi from './views/basic-py-3bi'
import BasicPy4aii from './views/basic-py-4aii'
import BasicPy1b from './views/basic-py-1b'
import BasicPy2f from './views/basic-py-2f'
import BasicPy1e from './views/basic-py-1e'
import BasicPy3aii from './views/basic-py-3aii'
import BasicPy2ci from './views/basic-py-2ci'
import BasicPy4biii from './views/basic-py-4biii'
import BasicPy2e from './views/basic-py-2e'
import BasicPy3 from './views/basic-py-3'
import BasicPy1 from './views/basic-py-1'
import TrainingVideo from './views/training-video'
import Bg2 from './views/bg-2'
import BasicPy4ai from './views/basic-py-4ai'
import BasicPy1c from './views/basic-py-1c'
import BasicPy2 from './views/basic-py-2'
import Maintenance from './views/maintenance'
import BasicPy1f from './views/basic-py-1f'
import Home from './views/home'
import Bg1 from './views/bg-1'
import BasicPy2b from './views/basic-py-2b'
import SampleAppSuppliers from './views/sample-app-suppliers'
import Bg4 from './views/bg-4'
import BasicPy4bi from './views/basic-py-4bi'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={BasicPy4bii} exact path="/basic-py-4bii" />
        <Route component={BasicPy3aiii} exact path="/basic-py-3aiii" />
        <Route component={BasicPy4} exact path="/basic-py-4" />
        <Route component={BasicPy2d} exact path="/basic-py-2d" />
        <Route component={BasicPy3bii} exact path="/basic-py-3bii" />
        <Route
          component={SampleAppInventory}
          exact
          path="/sample-app-inventory"
        />
        <Route component={BasicPy1d} exact path="/basic-py-1d" />
        <Route component={BasicPy2a} exact path="/basic-py-2a" />
        <Route component={Bg6} exact path="/background-6" />
        <Route component={BasicPy2cii} exact path="/basic-py-2cii" />
        <Route component={Bg5} exact path="/background-5" />
        <Route component={BasicPy4bv} exact path="/basic-py-4bv" />
        <Route component={BasicPy4biv} exact path="/basic-py-4biv" />
        <Route
          component={SampleAppPurchases}
          exact
          path="/sample-app-purchases"
        />
        <Route component={BasicPy1a} exact path="/basic-py-1a" />
        <Route component={BasicPy2g} exact path="/basic-py-2g" />
        <Route component={Bg3} exact path="/background-3" />
        <Route component={SampleAppSales} exact path="/sample-app-sales" />
        <Route component={SampleAppIntro} exact path="/sample-app-intro" />
        <Route component={BasicPy3ai} exact path="/basic-py-3ai" />
        <Route component={BasicPy3bi} exact path="/basic-py-3bi" />
        <Route component={BasicPy4aii} exact path="/basic-py-4aii" />
        <Route component={BasicPy1b} exact path="/basic-py-1b" />
        <Route component={BasicPy2f} exact path="/basic-py-2f" />
        <Route component={BasicPy1e} exact path="/basic-py-1e" />
        <Route component={BasicPy3aii} exact path="/basic-py-3aii" />
        <Route component={BasicPy2ci} exact path="/basic-py-2ci" />
        <Route component={BasicPy4biii} exact path="/basic-py-4biii" />
        <Route component={BasicPy2e} exact path="/basic-py-2e" />
        <Route component={BasicPy3} exact path="/basic-py-3" />
        <Route component={BasicPy1} exact path="/basic-py-1" />
        <Route component={TrainingVideo} exact path="/training-video" />
        <Route component={Bg2} exact path="/background-2" />
        <Route component={BasicPy4ai} exact path="/basic-py-4ai" />
        <Route component={BasicPy1c} exact path="/basic-py-1c" />
        <Route component={BasicPy2} exact path="/basic-py-2" />
        <Route component={Maintenance} exact path="/" />
        <Route component={BasicPy1f} exact path="/basic-py-1f" />
        <Route component={Home} exact path="/strace" />
        <Route component={Bg1} exact path="/background-1" />
        <Route component={BasicPy2b} exact path="/basic-py-2b" />
        <Route
          component={SampleAppSuppliers}
          exact
          path="/sample-app-suppliers"
        />
        <Route component={Bg4} exact path="/background-4" />
        <Route component={BasicPy4bi} exact path="/basic-py-4bi" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
