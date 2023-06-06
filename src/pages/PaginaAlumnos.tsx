import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import imgEric from "../imgs/imgEric.jpg";
import imgMiguel from "../imgs/imgMiguel.jpg";
import imgDan from "../imgs/imgDan.jpg";
import { mail } from "ionicons/icons";

// * Lista de creditos
const listaCreditos = [
  {
    nombre: "Dan Salvador Garcia Guevara",
    cargo: "Jefe de proyecto",
    img: imgDan,
    contacto: {
      email: "16282142@uagro.mx.com",
    },
  },
  {
    nombre: "Eric Salazar Alvarez",
    cargo: "Cromador de rifles ejecutivo",
    img: imgEric,
    contacto: {
      email: "16277231@uagro.mx.com",
    },
  },
  {
    nombre: "Miguel Alcaraz Vasquez",
    cargo: "Jefe de marketing",
    img: imgMiguel,
    contacto: {
      email: "19275295@uagro.mx.com",
    },
  },
];

//Pagina de la camara
const PaginaAlumnos: React.FC = () => {
  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Equipo de desarrollo</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Contenido */}
      <IonContent fullscreen>
        {/* Encabezado */}
        <IonToolbar>
          <IonTitle>Integrantes</IonTitle>
        </IonToolbar>
        {/* Lista de creditos */}
        <IonList>
          {listaCreditos.map((persona, i) => {
            return (
              <IonItem lines="none" key={i}>
                {/* Imagen */}
                {persona.img && (
                  <IonAvatar slot="start">
                    <IonImg src={persona.img} />
                  </IonAvatar>
                )}
                <IonLabel className="ion-text-wrap">
                  {/* Nombre */}
                  <h2>{persona.nombre}</h2>
                  {/* Cargo */}
                  {persona.cargo && <p>{persona.cargo}</p>}
                  {/* Contactos */}
                  {persona.contacto && (
                    <div>
                      {persona.contacto.email && (
                        <IonChip color={"dark"}>
                          <a href={"mailto:" + persona.contacto.email}>
                            <IonIcon
                              color="white"
                              icon={mail}
                              style={{ fontSize: "20px" }}
                            ></IonIcon>
                          </a>
                        </IonChip>
                      )}
                    </div>
                  )}
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PaginaAlumnos;
