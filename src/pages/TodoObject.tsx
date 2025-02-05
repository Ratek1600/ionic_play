import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar, 
    IonList, IonLabel,
    IonCol, IonButtons, IonBackButton, IonModal
 } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { create, trash, add } from 'ionicons/icons';
import React, { useState, useRef } from "react";
import './TodoObject.css';

const TodoObject: React.FC = () => {
  type Fruit = {
    id: number | null;
    name: string;
    colour: string;
  };

  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [listFruit, setListFruit] = useState<Fruit[]>([
    {id: 1, name: "Apple", colour: "Red"},
    {id: 2, name: "Orange", colour: "Orange"},
    {id: 3, name: "Banana", colour: "Yellow"},
  ]);

  const [curFruit, setCurFruit] = useState<Fruit>({id: null, name: '', colour: ''});
  const [currId, setCurrId] = useState(0);

  const onAdd = () => {
    setIsOpen(true)
    setCurrId(0)
  };

  const onUpdate = (idData: number) => {
    setIsOpen(true)
    setCurrId(idData)
    const selectedData = listFruit.filter(e => e.id === idData)[0];
    setCurFruit(selectedData)
  };
  
  const onDelete = (idData: number) => {
    const updatedFruit = listFruit.filter((x) => x.id !== idData);
    setListFruit(updatedFruit)
  };

  const onEmptyCurrFruit = () => {
    setCurFruit({id: null, name: '', colour: ''});
  };

  const confirm = () => { 
    modal.current?.dismiss(null, 'confirm') 
    setIsOpen(false)
  };

  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      if(curFruit.name.length>0 && curFruit.id!=0){
        if(currId==0){//save new data
          setListFruit([...listFruit, curFruit])
        }
        else{ //update existing data
            const updatedFruit = listFruit.map((x) => {
              if (x.id === currId) {
                return curFruit;
              }
              return x;
            });
            setListFruit(updatedFruit)
        }
        setCurrId(0)
        onEmptyCurrFruit()
      } 
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Todo Object</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonButton onClick={onAdd}><IonIcon icon={add}>Add Fruit</IonIcon></IonButton>
        </IonItem>

        <IonList>
            {listFruit.map((item, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h1>{item.name}</h1>
                  <p>{item.colour}</p>
                </IonLabel>
                <IonCol class="ion-float-right">
                  <IonButton className="ion-float-right" onClick={() => onDelete(item.id!)}>
                    <IonIcon icon={trash}></IonIcon>
                  </IonButton>
                  <IonButton className="ion-float-right" onClick={() => onUpdate(item.id!)}>
                    <IonIcon icon={create}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonItem>
            ))}
        </IonList>
        
      </IonContent>

      <IonModal isOpen={isOpen} ref={modal} trigger="open-modal" onWillDismiss={(event) => onWillDismiss(event)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() =>setIsOpen(false) }>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Fruit Form</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Save
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput type="number"
                label="Fruit ID"
                labelPlacement="stacked"
                value={curFruit.id}
                onIonChange={e => {
                  if (e.detail.value === undefined) return;
                  setCurFruit({...curFruit, id: Number(e.detail.value!)})
                }}
              />
            </IonItem>
            
            <IonItem>
              <IonInput type="text"
                label="Fruit Name"
                labelPlacement="stacked"
                value={curFruit.name}
                onIonChange={e => {
                  if (e.detail.value === undefined) return;
                  setCurFruit({...curFruit, name: e.detail.value!})
                }}
              />
            </IonItem>
            
            <IonItem>
              <IonInput type="text"
                label="Fruit Colour"
                labelPlacement="stacked"
                value={curFruit.colour}
                onIonChange={e => {
                  if (e.detail.value === undefined) return;
                  setCurFruit({...curFruit, colour: e.detail.value!})
                }}
              />
            </IonItem>
          </IonContent>
        </IonModal>
    </IonPage>
  );
};

export default TodoObject;
