import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import foto from "../imgs/mapaCurricular.png";

//Pagina de la camara
const PaginaMapaCurricular: React.FC = () => {
  // .... imagen
  const ImagenIcon = () => {
    return <img alt="avatar" src={foto} width={500} />;
  };

  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mapa curricular</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Contenido */}
      <div className="container">
        <ImagenIcon />
      </div>
    </IonPage>
  );
};

export default PaginaMapaCurricular;
