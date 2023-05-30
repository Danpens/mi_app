import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import React, { useState } from "react";
import { Usuario, agregarDatosFirebase } from "../funciones/firebase";

//Pagina de la camara
const PaginaIngresarDatos: React.FC = () => {
  // Variables
  const [alerta] = useIonAlert();
  const [nombre, setNombre] = useState<string>("");
  const [apellidos, setApellidos] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");

  const limpiar = () => {
    setNombre("");
    setApellidos("");
    setMatricula("");
    setTelefono("");
  };

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

  // * Agregar datos a firebase
  const agregarDatosAlaBase = async () => {
    const data: Usuario = {
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      matricula: matricula,
    };
    // ? Guardamos
    const res = await agregarDatosFirebase(data);
    if (res) {
      mostrarAlerta("Éxito", "Los datos se guardaron correctamente");
      limpiar();
      return;
    }
    mostrarAlerta("Error", "No se pudieron guardar los datos");
    return;
  };

  // Validar botón
  const datosInválidos = (): boolean => {
    if (nombre.length < 3) {
      return true;
    }
    if (apellidos.length < 3) {
      return true;
    }
    if (telefono.length !== 10) {
      return true;
    }
    if (matricula.length !== 8) {
      return true;
    }
    return false;
  };

  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ingresar datos</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Contenido */}
      <IonContent fullscreen>
        <br />
        <IonTitle>Ingresar datos para firebase</IonTitle>
        <br />
        <IonItem>
          {/* Nombre */}
          <IonInput
            label="Nombre"
            required
            labelPlacement="floating"
            value={nombre}
            onIonInput={(e) =>
              setNombre((e.target as unknown as HTMLInputElement).value)
            }
            counter={true}
            minlength={2}
            maxlength={70}
          ></IonInput>
        </IonItem>
        {/* Apellidos */}
        <IonItem>
          <IonInput
            label="Apellidos"
            required
            labelPlacement="floating"
            counter={true}
            minlength={2}
            maxlength={70}
            value={apellidos}
            onIonInput={(e) =>
              setApellidos((e.target as unknown as HTMLInputElement).value)
            }
          ></IonInput>
        </IonItem>
        {/* Teléfono */}
        <IonItem>
          <IonInput
            label="Teléfono"
            autocomplete="off"
            labelPlacement="floating"
            counter={true}
            minlength={10}
            maxlength={10}
            type="number"
            value={telefono}
            onIonInput={(e) =>
              setTelefono((e.target as unknown as HTMLInputElement).value)
            }
          ></IonInput>
        </IonItem>
        {/* Matricula */}
        <IonItem>
          <IonInput
            label="Matricula"
            labelPlacement="floating"
            type="number"
            counter={true}
            minlength={8}
            maxlength={8}
            value={matricula}
            onIonInput={(e) =>
              setMatricula((e.target as unknown as HTMLInputElement).value)
            }
          ></IonInput>
        </IonItem>

        {/* Boton para agregar */}
        <IonButton
          disabled={datosInválidos()}
          onClick={() => !agregarDatosAlaBase()}
          expand="block"
        >
          Ingresar datos
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PaginaIngresarDatos;
