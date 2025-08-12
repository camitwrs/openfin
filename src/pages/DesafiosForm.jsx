import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // <-- Importa Checkbox
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Building2,
  Users,
  Loader2, // Spinner icon
  CheckCircle, // Success icon
  XCircle, // Error icon
  Send, // Normal send icon
  ClipboardList, // Icon for challenges
  ArrowLeft,
  File,
  Download, // Importar el icono de descarga
  // Lightbulb ya no se usa para capacidadesDesafio
} from "lucide-react";

import { postInscripcionDesafio } from "../api/desafios.js"; // Asegúrate de que este endpoint maneje un array para desafiosInteres

export default function DesafiosForm() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    unidadAcademica: "", // Contendrá el valor final (directo o de "Otra...")
    desafioInteres: [], // <-- AHORA ES UN ARRAY para selección múltiple
    // capacidadesDesafio: "", // <-- CAMPO ELIMINADO
  });

  const [otraUnidadText, setOtraUnidadText] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const unidadesAcademicas = [
    "Escuela de Ingeniería de Construcción y Transporte",
    "Escuela de Ingeniería Eléctrica",
    "Escuela de Ingeniería Mecánica",
    "Escuela de Ingeniería Química",
    "Escuela de Ingeniería Bioquímica",
    "Escuela de Ingeniería Industrial",
    "Escuela de Ingeniería Informática",
    "Escuela de Ingeniería Civil",
    "Otra...",
  ];

  const desafiosOptions = [
    // Cambiado a 'desafiosOptions' para mayor claridad
    "Desafío CMF",
    "Desafío NANOTC",
    "Desafío Abierto (Otro desafío en colaboración con la industria)",
  ];

  // Modificado handleInputChange para gestionar checkboxes (desafiosInteres) y otros campos
  const handleInputChange = (field, value) => {
    // Lógica para el RadioGroup de unidadesAcademicas
    if (field === "unidadAcademica") {
      if (value !== "Otra...") {
        setOtraUnidadText(""); // Limpiar si cambia de "Otra..."
      }
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
    // Lógica para Checkboxes de desafiosInteres
    else if (field === "desafioInteres") {
      setFormData((prev) => {
        const currentDesafios = prev.desafioInteres;
        if (currentDesafios.includes(value)) {
          // Si ya está, lo quita
          return {
            ...prev,
            desafioInteres: currentDesafios.filter((d) => d !== value),
          };
        } else {
          // Si no está, lo añade
          return {
            ...prev,
            desafioInteres: [...currentDesafios, value],
          };
        }
      });
    }
    // Lógica para otros campos (nombre, apellido, correoElectronico)
    else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

    // Limpiar errores relevantes si el campo se está modificando
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleOtraUnidadTextChange = (value) => {
    setOtraUnidadText(value);
    if (errors.unidadAcademica && value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        unidadAcademica: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "nombre",
      "apellido",
      "correoElectronico",
      "unidadAcademica",
      // "capacidadesDesafio" ya no es campo requerido del frontend
    ];

    requiredFields.forEach((field) => {
      // Validación general para campos de texto/RadioGroup
      if (typeof formData[field] === "string" && !formData[field].trim()) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });

    // Validación específica para el array de desafíos
    if (formData.desafioInteres.length === 0) {
      // Verifica si el array está vacío
      newErrors.desafioInteres = "Debe seleccionar al menos un desafío";
    }

    if (
      formData.correoElectronico &&
      !/\S+@\S+\.\S+/.test(formData.correoElectronico)
    ) {
      newErrors.correoElectronico = "Ingrese un correo electrónico válido";
    }

    if (formData.unidadAcademica === "Otra..." && !otraUnidadText.trim()) {
      newErrors.unidadAcademica = "Por favor especifique la unidad académica";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    // Validar el formulario primero
    if (!validateForm()) {
      return;
    }

    // Clonamos formData para hacer modificaciones antes de enviar al backend
    let dataToSend = { ...formData };

    // Lógica para pre-procesar 'unidadAcademica'
    if (dataToSend.unidadAcademica === "Otra...") {
      dataToSend.unidadAcademica = otraUnidadText;
    }

    // Eliminar 'otraUnidadText' si no es parte del esquema del backend
    // No lo enviaremos al backend ya que no es parte del modelo final.
    // Aunque no está en formData, si lo tuvieras ahí lo eliminarías aquí.
    // delete dataToSend.otraUnidad; // Esta línea ya no es necesaria si 'otraUnidad' se eliminó de formData.

    setIsSubmitting(true);
    try {
      console.log("Datos enviados al backend:", dataToSend); // Para depuración
      const response = await postInscripcionDesafio(dataToSend);
      setSubmitMessage({
        type: "success",
        text: response.message || "¡Inscripción enviada con éxito!",
      });
      // Limpiar el formulario después del éxito
      setFormData({
        nombre: "",
        apellido: "",
        correoElectronico: "",
        unidadAcademica: "",
        desafioInteres: [], // Limpiar como un array vacío
        // capacidadesDesafio: "", // Ya no existe
      });
      setOtraUnidadText(""); // Limpiar también el estado del input "Otra..."
      setTimeout(() => setSubmitMessage({ type: "", text: "" }), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      if (error.details) {
        setErrors((prev) => ({ ...prev, ...error.details }));
      }
      setSubmitMessage({
        type: "error",
        text: error.message || "Ocurrió un error al enviar la inscripción.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      );
    }
    if (submitMessage.type === "success") {
      return (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          ¡Enviado!
        </>
      );
    }
    if (submitMessage.type === "error") {
      return (
        <>
          <XCircle className="mr-2 h-4 w-4" />
          Error al Enviar
        </>
      );
    }
    return (
      <>
        <Send className="mr-2 h-4 w-4" />
        Enviar Inscripción
      </>
    );
  };

  return (
    <div className="bg-slate-100 py-8">
      <Button
        variant="outline"
        onClick={() => {
          navigate(-1);
        }}
        className="text-gray-600 ml-6 cursor-pointer font-bold hover:text-gray-800"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Button>
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-xl overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-cyan-400">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">
                  Formulario de Inscripción
                </h1>
                <p className="text-sm md:text-sm text-gray-100 mt-2 mx-auto max-w-2xl">
                  ¿Te interesa participar? Inscríbete aquí para contactarte y
                  conocer más sobre los desafíos.
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            {submitMessage.text && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  submitMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="nombre"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Nombre <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  className={errors.nombre ? "border-red-500" : ""}
                />
                {errors.nombre && (
                  <p className="text-red-500 text-xs">{errors.nombre}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="apellido"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Apellido <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="apellido"
                  placeholder="Ingrese su apellido"
                  value={formData.apellido}
                  onChange={(e) =>
                    handleInputChange("apellido", e.target.value)
                  }
                  className={errors.apellido ? "border-red-500" : ""}
                />
                {errors.apellido && (
                  <p className="text-red-500 text-xs">{errors.apellido}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="correoElectronico"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Correo electrónico <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="correoElectronico"
                  type="email"
                  placeholder="ejemplo@pucv.cl"
                  value={formData.correoElectronico}
                  onChange={(e) =>
                    handleInputChange("correoElectronico", e.target.value)
                  }
                  className={errors.correoElectronico ? "border-red-500" : ""}
                />
                {errors.correoElectronico && (
                  <p className="text-red-500 text-xs">
                    {errors.correoElectronico}
                  </p>
                )}
              </div>

              {/* Academic Unit (RadioGroup) */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Unidad Académica <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.unidadAcademica}
                  onValueChange={(value) =>
                    handleInputChange("unidadAcademica", value)
                  }
                  className="space-y-3"
                >
                  {unidadesAcademicas.map((unidad, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem value={unidad} id={`unidad-${index}`} />
                      <Label
                        htmlFor={`unidad-${index}`}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {unidad}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.unidadAcademica && (
                  <p className="text-red-500 text-xs">
                    {errors.unidadAcademica}
                  </p>
                )}

                {/* Other Academic Unit Input */}
                {formData.unidadAcademica === "Otra..." && (
                  <div className="ml-6 space-y-2">
                    <Label htmlFor="otraUnidad" className="text-sm font-medium">
                      Especifique la unidad académica{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="otraUnidad"
                      placeholder="Ingrese el nombre de la unidad académica"
                      value={otraUnidadText}
                      onChange={(e) =>
                        handleOtraUnidadTextChange(e.target.value)
                      }
                      className={errors.unidadAcademica ? "border-red-500" : ""}
                    />
                  </div>
                )}
              </div>

              {/* Desafíos de Interés (Checkboxes) */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  Desafío(s) de interés (puede escoger uno o más){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="space-y-3">
                  {desafiosOptions.map((desafio, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox
                        id={`desafio-checkbox-${index}`}
                        checked={formData.desafioInteres.includes(desafio)}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "desafioInteres",
                            desafio, // Pasa el valor del desafío
                            checked // Pasa si está chequeado o no
                          )
                        }
                      />
                      <Label
                        htmlFor={`desafio-checkbox-${index}`}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {desafio}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.desafioInteres && (
                  <p className="text-red-500 text-xs">
                    {errors.desafioInteres}
                  </p>
                )}
              </div>

              {/* Sección de Formulario de Postulación (NUEVA SECCIÓN) */}
              <div className="space-y-4 mt-8">
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <File className="w-4 h-4" />
                    Descargar y completar el Formulario de Postulación
                    (documento adjunto) <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    El formulario debe ser enviado al correo electrónico{" "}
                    <a
                      href="mailto:openfin@pucv.cl"
                      className="text-blue-600 hover:underline"
                    >
                      openfin@pucv.cl
                    </a>{" "}
                    con plazo máximo el viernes 29 de agosto de 2025.
                  </p>
                </div>
                <a
                  href="/archivos/POSTULACIÓN DESAFÍOS DE INGENIERÍA 2025 (11082025).docx" // Ruta del archivo DOCX
                  download // Atributo para forzar la descarga
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer sm:w-auto px-6 py-2 text-md"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Formulario
                  </Button>
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 text-lg"
                  disabled={isSubmitting || submitMessage.type === "success"}
                >
                  {getButtonContent()}
                </Button>
                {submitMessage.type === "success" && (
                  <p className="text-green-600 text-sm font-semibold mt-2 text-center">
                    La inscripción ha sido enviada con éxito.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
