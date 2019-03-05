import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { withRouter, RouteComponentProps } from "react-router";
import { Redirect } from 'react-router-dom';

import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonRow, IonCol, IonMenuButton } from '@ionic/react';

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectIsAuthenticated,
  makeSelectProfileInfo,
} from '../App/selectors'
import { login } from '../App/actions'
import injectSaga from '../../utils/injectSaga'
import injectReducer from '../../utils/injectReducer'
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectSuccess,
} from './selectors'
import saga from './saga'
import reducer from './reducer'
import './LoginPage.css';

type Props =  RouteComponentProps<{}> & typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

// type State = {}

class LoginPage extends Component<Props> {
  // ionRefresherRef: React.RefObject<HTMLIonRefresherElement>
  // ionFabRef: React.RefObject<HTMLIonFabElement>
  // state = {}

  constructor(props: Props) {
    super(props);

    props.updateLocations();
    props.updateSessions();
    props.updateSpeakers();

    // this.ionRefresherRef = React.createRef<HTMLIonRefresherElement>();
    // this.ionFabRef = React.createRef<HTMLIonFabElement>();
  }

  render() {
    return (
      <>
        <IonContent>
          <div className="logo">
            <img src="assets/img/adpeda.png" alt="Ionic logo"/>
          </div>
          <form noValidate>
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Username</IonLabel>
                <IonInput
                  onIonChange={this.updateUserName}
                  name="username"
                  type="text"
                  autocapitalize="off"
                  value={this.state.username}
                  required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput name="password" type="password" required></IonInput>
              </IonItem>
            </IonList>

            <IonRow responsive-sm>
              <IonCol>
                <IonButton onClick={this.logInUser} type="submit">
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
          </form>
        </IonContent>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onchangeEmail: (e) => dispatch(changeEmail(e.target.value)),
    onchangePassword: (e) => dispatch(changePassword(e.target.value)),
    onSubmitForm: () => dispatch(login()),
    forgotPassword: () => dispatch(postForgotPassword()),
  }
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
  isAuthenticated: makeSelectIsAuthenticated(),
  profile: makeSelectProfileInfo(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'loginpage', reducer })
const withSaga = injectSaga({ key: 'loginpage', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage)
