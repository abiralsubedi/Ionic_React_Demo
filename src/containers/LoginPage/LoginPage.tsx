import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonMenuButton
} from "@ionic/react";

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectIsAuthenticated,
  makeSelectProfileInfo
} from "../App/selectors";
import { login } from "../App/actions";
import injectSaga from "../../utils/injectSaga";
import injectReducer from "../../utils/injectReducer";
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectSuccess
} from "./selectors";
import { changeEmail, changePassword, postForgotPassword } from "./actions";
import saga from "./saga";
import reducer from "./reducer";
import "./LoginPage.css";

type Props = RouteComponentProps<{}> &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

type State = {
  email: String;
  password: String;
};

class LoginPage extends Component<Props, State> {
  ionRefresherRef: React.RefObject<HTMLIonRefresherElement>;
  ionFabRef: React.RefObject<HTMLIonFabElement>;
  state = {
    email: "",
    password: ""
  };

  constructor(props: Props) {
    super(props);

    // props.onSubmitForm();

    this.ionRefresherRef = React.createRef<HTMLIonRefresherElement>();
    this.ionFabRef = React.createRef<HTMLIonFabElement>();
  }

  render() {
    const {
      loading,
      onSubmitForm,
      error,
      success,
      isAuthenticated,
      profile,
      email,
      password
    } = this.props;
    return (
      <>
        <IonContent>
          <div className="logo">
            <img src="assets/img/adpeda.png" alt="Ionic logo" />
          </div>
          <form
            noValidate
            onSubmit={e => onSubmitForm(this.state.email, this.state.password)}
          >
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Username</IonLabel>
                <IonInput
                  name="username"
                  type="text"
                  autocapitalize="off"
                />
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput
                  name="password"
                  type="password"
                  autocapitalize="off"
                  value={this.state.password}
                  required
                />
              </IonItem>
            </IonList>

            <IonRow responsive-sm>
              <IonCol>
                <IonButton type="submit">Login</IonButton>
              </IonCol>
            </IonRow>
          </form>
        </IonContent>
      </>
    );
  }
}

// function mapDispatchToProps((dispatch: Dispatch<S>) =>) {
//   return {
//     // onchangeEmail: (e: CustomEvent) => dispatch(changeEmail(e.detail.value)),
//     // onchangePassword: (e: CustomEvent) => dispatch(changePassword(e.detail.value)),
//     onSubmitForm: () => dispatch(login()),
//     // forgotPassword: () => dispatch(postForgotPassword()),
//   }
// }

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSubmitForm: (email: String, password:String) => dispatch(login(email, password))
});

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
  isAuthenticated: makeSelectIsAuthenticated(),
  profile: makeSelectProfileInfo()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "loginpage", reducer });
const withSaga = injectSaga({ key: "loginpage", saga, mode:'@@saga-injector/restart-on-remount'});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LoginPage);
