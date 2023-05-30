import React, { useEffect, useState } from "react";
import { Usuario, obtenerListaDeDatosFirebase } from "../funciones/firebase";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";

//Explorador de paginas
const PaginaLista: React.FC = () => {
  //Datos
  const [lista, setLista] = useState<Usuario[]>([]);
  const [alerta] = useIonAlert();

  // * Mostrar alerta
  const mostrarAlerta = (
    titulo: string,
    cuerpo: string,
    detalles: string = ""
  ) => {
    alerta({
      header: titulo,
      subHeader: cuerpo,
      message: detalles,
      buttons: ["OK"],
    });
  };

  // * Obtener datos
  const obtenerDatos = async () => {
    // Buscamos
    const res = await obtenerListaDeDatosFirebase();
    console.log(res);

    // Éxito
    if (res.estado) {
      setLista(res.lista ?? []);
      return;
    }

    // Error
    // ! Alerta
    mostrarAlerta(
      "Error",
      "No se pudieron obtener los datos de firebase",
      res.error ?? ""
    );
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <IonPage>
      {/* Pagina */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Datos del usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br />
        <IonTitle>Lista de usuarios</IonTitle>
        <br />
        <IonButton expand="block" onClick={() => obtenerDatos()}>
          Actualizar
        </IonButton>
        <br />
        {lista.map((dato, i) => {
          return (
            <IonCard key={i}>
              <br />
              <IonCardHeader>
                <IonCardTitle>
                  {dato.nombre + " " + dato.apellidos}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {"telefono: " + dato.telefono} <br />
                {"matricula: " + dato.matricula}
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default PaginaLista;
