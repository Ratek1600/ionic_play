import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar, 
    IonList, IonLabel,
    IonCol
 } from '@ionic/react';
import { create, trash, add } from 'ionicons/icons';
import React, { useState, useEffect } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  // let strLabel = ""
  // const dataList = ["Tiger", "Cat", "Dog", "Duck"]

  const [listData, setListData] = useState<string[]>(["Tiger", "Cat", "Dog", "Duck"]);
  const [strLabel, setStrLabel] = useState<string>("");

  const onAdd = () => {
    if(strLabel.length>0){
      setListData([...listData, strLabel]);
      setStrLabel("");
    }
  };

  const onUpdate = (idx: number) => {
    const newArr = [...listData];
    const editedLabel = prompt('Enter new Label:');
    if (editedLabel!==null && editedLabel.trim()!=='') {
      newArr[idx] = editedLabel
      setListData(newArr)
    }
  };
  
  const onDelete = (idx: number) => {
    const newArr = [...listData];
    newArr.splice(idx, 1);
    setListData(newArr);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Playing</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonInput type="text" placeholder="Enter task" value={strLabel} 
            onIonChange={e => {
              if (e.detail.value === undefined) return;
              setStrLabel(e.detail.value!)
            }}
            ></IonInput>
          <IonButton onClick={onAdd}><IonIcon icon={add}>Add task</IonIcon></IonButton>
        </IonItem>

        <IonList>
            {listData.map((item, index) => (
              <IonItem key={index}>
                {item}
                <IonCol class="ion-float-right">
                  <IonButton className="ion-float-right" onClick={() => onDelete(index)}>
                    <IonIcon icon={trash}></IonIcon>
                  </IonButton>
                  <IonButton className="ion-float-right" onClick={() => onUpdate(index)}>
                    <IonIcon icon={create}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonItem>
            ))}
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
