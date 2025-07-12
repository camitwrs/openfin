import API_BASE_URL from "./config.js";

const DESAFIOS_API_URL = `${API_BASE_URL}/desafios`;

export const postInscripcionDesafio = async (formData) => {
  try {
    const response = await fetch(`${DESAFIOS_API_URL}/inscripcion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar la inscripción de desafio:", error.message);
    throw error;
  }
};

export const getInscripcionesDesafios = async () => {
  try {
    const response = await fetch(`${DESAFIOS_API_URL}/inscripciones`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error al obtener inscripciones de académicos:",
      error.message
    );
    throw error;
  }
};
