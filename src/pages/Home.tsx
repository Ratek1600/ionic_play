import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar, 
    IonList, IonCol, 
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonNavLink,
    IonLabel
 } from '@ionic/react';
import { create, trash, add } from 'ionicons/icons';
import React, { useState } from "react";
import './Home.css';

import TodoString from './TodoString';

const Home: React.FC = () => {
  // let strLabel = ""
  // const dataList = ["Tiger", "Cat", "Dog", "Duck"]

  const [listData, setListData] = useState<string[]>(["Tiger", "Cat", "Dog", "Duck"]);
  const [strLabel, setStrLabel] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Play Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Play With Ionic React</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>Hi, I try to make tutorial and sample code using Ionic React. Hope it can help you learn code</IonCardContent>
        </IonCard>

        <IonList>
          <IonItem routerLink="/simple_todo">
            <IonLabel>Simple Todo</IonLabel>
          </IonItem>

        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
