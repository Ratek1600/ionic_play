import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, 
    IonFab, IonFabButton, IonButtons, IonBackButton
 } from '@ionic/react';
import React, { useState } from "react";
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

const CameraPage: React.FC = () => {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Camera Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        
      </IonContent>
    </IonPage>
  );
};

// export function usePhotoGallery() {
//   const takePhoto = async () => {
//     const photo = await Camera.getPhoto({
//       resultType: CameraResultType.Uri,
//       source: CameraSource.Camera,
//       quality: 100,
//     });
//   };

//   return {
//     takePhoto,
//   };
// }

export default CameraPage;
