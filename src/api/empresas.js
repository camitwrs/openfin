import API_BASE_URL from "./config.js";

const EMPRESAS_API_URL = `${API_BASE_URL}/empresas`;

export const postInscripcionEmpresa = async (formData) => {
  try {
    const response = await fetch(`${EMPRESAS_API_URL}/inscripcion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Manejo de errores HTTP
    if (!response.ok) {
      const errorData = await response.json();
      // Lanza un error con el mensaje del backend para que lo maneje el componente
      throw new Error(errorData.error || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data; // Devuelve los datos de la respuesta (message, data)
  } catch (error) {
    console.error("Error al enviar la inscripción de empresa:", error.message);
    throw error; // Propaga el error para que el componente lo capture
  }
};

export const getInscripcionesEmpresas = async () => {
  try {
    const response = await fetch(`${EMPRESAS_API_URL}/inscripciones`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener inscripciones de empresas:", error.message);
    throw error;
  }
};
