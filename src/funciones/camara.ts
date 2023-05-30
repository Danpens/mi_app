import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

// * Componentes
export interface ComponentesImages {
  archivoPath: string | undefined;
  vistaWebPath?: string | undefined;
}

// * Tomar fotos
export function TomarFoto() {
  // Estados
  const [foto, setFoto] = useState<ComponentesImages>();

  // Tomar foto
  const tomarFoto = async () => {
    // Foto
    const newFoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
      quality: 100,
    }).catch(() => {
      return undefined;
    });

    // Comprobamos si existe
    if (newFoto !== undefined) {
      // Creamos archivo
      const archivoNombre = new Date().getTime() + ".jpeg";

      // Nueva foto
      const fotoNueva = {
        archivoPath: archivoNombre,
        vistaWebPath: newFoto.webPath,
      };

      // Ponemos foto
      setFoto(fotoNueva);
      return;
    }

    // Agregamos
    setFoto(undefined);
  };

  // Retornamos foto
  return {
    setFoto,
    foto,
    tomarFoto,
  };
}
