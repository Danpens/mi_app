import {
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import React from "react";
import { TomarFoto } from "../funciones/camara";

//Pagina de la camara
const PaginaCamara: React.FC = () => {
  // .... imagen
  const { foto, setFoto, tomarFoto } = TomarFoto();
  const ImagenIcon = () => {
    return foto !== undefined ? (
      <img alt="avatar" src={foto.vistaWebPath} width={300} />
    ) : (
      <img alt="avatar" src={camera} width={300} />
    );
  };

  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Camara</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Contenido */}
      <div className="container">
        <ImagenIcon />
        <br /> <br />
        <IonButton color={"dark"} onClick={() => tomarFoto()}>
          Abrir camara
        </IonButton>
      </div>
    </IonPage>
  );
};

export default PaginaCamara;
