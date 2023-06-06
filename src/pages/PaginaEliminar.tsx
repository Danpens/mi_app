import React, { useEffect, useState } from "react";
import {
  Usuario,
  eliminarUsuarioFirebase,
  obtenerListaDeDatosFirebase,
} from "../funciones/firebase";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";

//Explorador de paginas
const PaginaEliminar: React.FC = () => {
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

  // * Eliminar usuario
  const eliminarUsuario = async (matricula: string) => {
    // Eliminamos
    const res = await eliminarUsuarioFirebase(matricula);

    // Éxito
    if (res) {
      mostrarAlerta("Éxito", "El usuario se elimino correctamente");
      return;
    }

    // Error
    // ! Alerta
    mostrarAlerta("Error", "No se pudo eliminar al usuario");
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
          <IonTitle>Eliminar usuarios</IonTitle>
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
                <IonButton
                  slot="end"
                  color={"danger"}
                  expand="full"
                  onClick={() => eliminarUsuario(dato.matricula)}
                >
                  Eliminar
                </IonButton>
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default PaginaEliminar;
