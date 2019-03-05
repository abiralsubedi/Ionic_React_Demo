import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonRow, IonCol, IonMenuButton } from '@ionic/react';
import './Login.css';

type State = {
  username: string | null
}

export default class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: null
    }
  }

  updateUserName(e: CustomEvent) {}
  logInUser() {}
  signUpUser() {}

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