import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/global.css";
import PaginaCamara from "./pages/PaginaCamara";
import PaginaIngresarDatos from "./pages/PaginaIngresarDatos";
import PaginaLista from "./pages/PaginaLista";
import PaginaMapaCurricular from "./pages/PaginaMapaCurricular";
import PaginaAlumnos from "./pages/PaginaAlumnos";
import PaginaEliminar from "./pages/PaginaEliminar";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* Ruta por defecto */}
            <Route path="/" exact={true}>
              <Redirect to="/pagina/camara" />
            </Route>
            {/* Ruta para la camara */}
            <Route path="/pagina/camara" exact={true}>
              <PaginaCamara />
            </Route>
            {/* Ruta para agregar los datos */}
            <Route path="/pagina/datos" exact={true}>
              <PaginaIngresarDatos />
            </Route>
            {/* Ruta para ver la lista de datos */}
            <Route path="/pagina/lista" exact={true}>
              <PaginaLista />
            </Route>
            {/* Ruta para ver la lista de eliminación */}
            <Route path="/pagina/eliminar" exact={true}>
              <PaginaEliminar />
            </Route>
            {/* Ruta para ver el mapa curricular */}
            <Route path="/pagina/mapa" exact={true}>
              <PaginaMapaCurricular />
            </Route>
            {/* Ruta para ver a los integrantes */}
            <Route path="/pagina/integrantes" exact={true}>
              <PaginaAlumnos />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
