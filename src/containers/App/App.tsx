import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage'
import StudentDashboard from '../StudentDashboard/StudentDashboard';

import { IonApp, IonSplitPane, IonPage } from '@ionic/react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


const App = () => (
    <Router>
      <div id="app">
        <IonApp>
          <IonSplitPane contentId="main">
            <IonPage id="main">
              <Switch>
                <Route path='/dashboard' component={StudentDashboard} />
                <Route path="/" component={LoginPage}></Route>
              </Switch>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </div>
    </Router>
);

export default App;
