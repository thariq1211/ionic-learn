import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonGrid,
} from "@ionic/react";
import { camera, trash, close } from "ionicons/icons";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const { takePhoto, photos } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Photo Gallery" />
        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webViewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
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

export default Tab2;
