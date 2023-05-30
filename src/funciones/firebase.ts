import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
// Siga este patrón para importar otros servicios de Firebase
// import {} de 'Firebase/<service>';

export interface Usuario {
  nombre: string;
  apellidos: string;
  telefono: string;
  matricula: string;
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de su aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCZMSQfTPV3VkShZW4Qz7PhGZt8Iavrk4Q",
  authDomain: "ionic-ca421.firebaseapp.com",
  projectId: "ionic-ca421",
  storageBucket: "ionic-ca421.appspot.com",
  messagingSenderId: "437705023680",
  appId: "1:437705023680:web:b3521400e51f9034518d25",
  measurementId: "G-D54NCF062Q",
};

// Inicializar Firebase
const APP_FIREBASE = initializeApp(firebaseConfig);
const DB_FIREBASE = getFirestore(APP_FIREBASE);
const REFERENCIA_BD = collection(DB_FIREBASE, "usuarios");

// * Agregar datos a la tabla
const agregarDatosFirebase = async (data: Usuario): Promise<boolean> => {
  try {
    const res = await addDoc(REFERENCIA_BD, data);

    if (res) {
      return true;
    }

    return false;
  } catch (error) {
    console.log("Error, " + error);
    return false;
  }
};

// Obtener una lista de ciudades de tu base de datos
async function getLista(): Promise<Usuario[]> {
  // const columnas = collection(
  //   REFERENCIA_BD,
  //   "fecha",
  //   "hora",
  //   "id_par",
  //   "id_taller",
  //   "nombre",
  //   "taller"
  // );
  // const data = await getDocs(columnas);
  const data = await getDocs(REFERENCIA_BD);
  console.log(data);

  const lista: Usuario[] = data.docs.map(
    (doc) => doc.data() as Usuario
  );
  return lista;
}

// Obtener los datos
interface Respuesta {
  estado: boolean;
  lista?: Usuario[];
  error?: string;
}

const obtenerListaDeDatosFirebase = async (): Promise<Respuesta> => {
  try {
    // Llamar a la función getCities
    const res = await getLista()
      .then((data) => {
        console.log(data);
        return {
          estado: true,
          lista: data,
        };
      })
      .catch((err) => {
        console.log(err);
        return {
          estado: false,
          error: err,
        };
      });

    return res;
  } catch (err) {
    return {
      estado: false,
      error: "Error..." + err,
    };
  }
};

export { agregarDatosFirebase, obtenerListaDeDatosFirebase };
