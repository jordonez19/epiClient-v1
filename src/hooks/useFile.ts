import { useRef, useState } from "react";

export const useFile = (setUser: any, types?: string[]) => {
  const fileInputRef = useRef<any>(null);
  const [image, setImage] = useState<any>("");

  const handleAdd = (newFile: any) => {
    if (!newFile || !newFile.target || !newFile.target.files || newFile.target.files.length === 0) {
      // Manejar el caso en el que newFile es undefined o no tiene archivos seleccionados
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", (ev) => {
      const fileBase64 = ev.target?.result;
      if (isValidFileType(newFile.target.files[0].name)) {
        setImage(fileBase64);
        setUser((prev: any) => ({
          ...prev,
          file: fileBase64,
        }));
      } else {
        setImage("");
        setUser((prev: any) => ({
          ...prev,
          file: "",
        }));
      }
    });
    reader.readAsDataURL(newFile.target.files[0]);
  };

  // Cambiar imagen
  const handleChangeImage = (image: string) => {
    setImage(image);
  };

  // Eliminar imagen
  const handleDelete = () => {
    setImage("");
    setUser((prev: any) => ({
      ...prev,
      file: "",
    }));
  };

  // Click Ref
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Simula un clic en el input de tipo file
  };

  const isValidFileType = (fileName: any) => {
    let fileExtension: any = ""
    if (!types || types.length === 0 || typeof fileName !== 'string' || !fileName) return true;
    fileExtension = fileName.split(".").pop()?.toLowerCase();
    return types.includes(fileExtension);
  };

  return {
    // Methods
    handleAdd,
    handleDelete,
    handleButtonClick,
    handleChangeImage,
    // Properties
    fileInputRef,
    image,
    isValidFileType,
  };
};
