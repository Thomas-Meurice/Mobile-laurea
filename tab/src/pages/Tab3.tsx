import {IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import WelcomeImage from "../assets/WELCOME-Graphics-5632158-1.jpg";
import React from "react";
import NorvegeImage from '../assets/norvege-que-voir-que-faire.jpg';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Picture</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Picture</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonImg class="image" src={NorvegeImage}/>
          <IonText class={"text"}>
              <h1 >Here is a beautiful image</h1>
          </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
