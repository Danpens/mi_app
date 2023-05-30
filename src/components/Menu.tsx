import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import {
  accessibility,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";
import "./Menu.css";

//  * Interface
interface Pagina {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

// * Pestañas del menu
const paginas: Pagina[] = [
  {
    title: "Cámara",
    url: "/pagina/camara",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Datos",
    url: "/pagina/datos",
    iosIcon: accessibility,
    mdIcon: accessibility,
  },
  {
    title: "Lista",
    url: "/pagina/lista",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
];

// interface Integrante
interface Integrante {
  nombre: string;
}

// Integrantes del equipo
const integrantes: Integrante[] = [
  {
    nombre: "Dan Salvador Garcia Guevara",
  },
  {
    nombre: "Eric Salazar Alvarez",
  },
  {
    nombre: "Miguel Alcaraz Vazquez",
  },
];
// todo el Menu
const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        {/* Lista de componentes */}
        <IonList id="inbox-list">
          {/* Titulo */}
          <IonListHeader>Proyecto ionic</IonListHeader>
          {/* Recorremos */}
          {paginas.map((appPage, index) => {
            return (
              // Pestañas del menu
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* Integrantes */}
        <IonList id="labels-list">
          <IonListHeader>Integrantes del equipo</IonListHeader>
          {/* Recorremos */}
          {integrantes.map((integrante, index) => (
            <IonItem lines="none" key={index}>
              <IonLabel>{integrante.nombre}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
