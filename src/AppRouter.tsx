// src/AppRouter.tsx

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Landing from './pages/Landing/Landing'
import Login from "./pages/Login/Login";
import DonorHome from "./pages/DonorHome/DonorHome";
import FindRequests from "./pages/FindRequests/FindRequests";
import Checkout from "./pages/Checkout/Checkout"; 

const AppRouter = () => (
  <Router>
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/donor-home" component={DonorHome} />
          <Route exact path="/find-requests" component={FindRequests} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Provider>
    </Suspense>
  </Router>
)

export default AppRouter
