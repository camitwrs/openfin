import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Building2,
  Users,
  Lightbulb,
  Loader2, // Spinner icon
  CheckCircle, // Success icon
  XCircle, // Error icon
  Send, // Normal send icon
  ClipboardList, // Icon for challenges
  ArrowLeft,
} from "lucide-react";

import { postInscripcionDesafio } from "../api/desafios.js";

export default function DesafiosForm() {
  useLayoutEffect(() => {
    // Scroll al principio de la página cuando el componente se monta
    // useLayoutEffect es preferible aquí para que el scroll ocurra antes del renderizado del navegador
    window.scrollTo(0, 0);
  }, []); // El array de dependencias
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    unidadAcademica: "", // Ahora contendrá el valor final (directo o de "Otra...")
    desafioInteres: "",
    capacidadesDesafio: "",
  });

  // Para manejar el input de "Otra..." temporalmente antes de la validación y envío
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

  const desafiosInteres = ["Desafío CMF", "Desafío NANOTC", "Desafío Abierto"];

  const handleInputChange = (field, value) => {
    // Si cambia la unidad académica, reinicia el texto de "Otra..."
    if (field === "unidadAcademica" && value !== "Otra...") {
      setOtraUnidadText("");
    }
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Manejador específico para el input de texto de "Otra..."
  const handleOtraUnidadTextChange = (value) => {
    setOtraUnidadText(value);
    // Limpia el error si el usuario empieza a escribir
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
      "unidadAcademica", // Sigue siendo requerido
      "desafioInteres",
      "capacidadesDesafio",
    ];

    requiredFields.forEach((field) => {
      // Para 'unidadAcademica', la validación inicial es que algo esté seleccionado
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "Este campo es obligatorio";
      }
    });

    if (
      formData.correoElectronico &&
      !/\S+@\S+\.\S+/.test(formData.correoElectronico)
    ) {
      newErrors.correoElectronico = "Ingrese un correo electrónico válido";
    }

    // AHORA VALIDAMOS 'otraUnidadText' si 'unidadAcademica' es "Otra..."
    // Y asignamos el error al campo 'unidadAcademica' para que aparezca correctamente
    if (formData.unidadAcademica === "Otra..." && !otraUnidadText.trim()) {
      newErrors.unidadAcademica = "Por favor especifique la unidad académica"; // Apuntamos el error a unidadAcademica
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    // Clonamos formData para hacer modificaciones antes de la validación final del cliente
    let dataToSend = { ...formData };

    // --- LÓGICA CLAVE: PRE-PROCESAMIENTO PARA EL BACKEND ---
    if (dataToSend.unidadAcademica === "Otra...") {
      // Si el usuario seleccionó "Otra...", usamos el texto que escribieron
      dataToSend.unidadAcademica = otraUnidadText;
    }
    // No necesitamos el campo 'otraUnidad' en el 'dataToSend' ya que el backend no lo espera
    // delete dataToSend.otraUnidad; // Ya fue removido del formData principal
    // --- FIN LÓGICA CLAVE ---

    // Validar el formulario con los datos pre-procesados
    // NOTA: 'validateForm' ya considera 'otraUnidadText' en su lógica condicional
    if (!validateForm()) {
      // Si la validación falla (ej. "Otra..." seleccionado pero campo de texto vacío),
      // el 'errors' state ya tendrá los mensajes correctos.
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await postInscripcionDesafio(dataToSend); // Enviamos los datos transformados
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
        desafioInteres: "",
        capacidadesDesafio: "",
      });
      setOtraUnidadText(""); // Limpiar también el estado del input "Otra..."
      setTimeout(() => setSubmitMessage({ type: "", text: "" }), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Asumimos que el backend envía 'error.details' para errores por campo
      if (error.details) {
        setErrors((prev) => ({ ...prev, ...error.details })); // Actualiza los errores específicos
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
          <div className="relative h-32 bg-gradient-to-r from-orange-500 via-blue-600 to-teal-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">
                  Formulario de Inscripción
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Inscripción de Desafíos
                </Badge>
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

              {/* Academic Unit */}
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
                {/* Ahora el error de 'otraUnidad' se mapea a 'unidadAcademica' */}
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
                      value={otraUnidadText} // Usa el nuevo estado para este input
                      onChange={(e) =>
                        handleOtraUnidadTextChange(e.target.value)
                      }
                      // Aquí también apuntamos el error a 'unidadAcademica'
                      className={errors.unidadAcademica ? "border-red-500" : ""}
                    />
                    {/* No necesitamos un p de error específico para 'otraUnidad' */}
                  </div>
                )}
              </div>

              {/* Desafíos de Interés */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  Desafío de interés <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.desafioInteres}
                  onValueChange={(value) =>
                    handleInputChange("desafioInteres", value)
                  }
                  className="space-y-3"
                >
                  {desafiosInteres.map((desafio, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem value={desafio} id={`desafio-${index}`} />
                      <Label
                        htmlFor={`desafio-${index}`}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {desafio}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.desafioInteres && (
                  <p className="text-red-500 text-xs">
                    {errors.desafioInteres}
                  </p>
                )}
              </div>

              {/* Capacidades para el Desafío */}
              <div className="space-y-2">
                <Label
                  htmlFor="capacidadesDesafio"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  Describe tus capacidades para resolver el desafío{" "}
                  <span className="text-red-500">*</span>
                </Label>

                <Textarea
                  id="capacidadesDesafio"
                  placeholder="Ej: Mi experiencia en Machine Learning me permite desarrollar modelos predictivos para el Desafío CMF..."
                  value={formData.capacidadesDesafio}
                  onChange={(e) =>
                    handleInputChange("capacidadesDesafio", e.target.value)
                  }
                  className="min-h-[120px]"
                />
                {errors.capacidadesDesafio && (
                  <p className="text-red-500 text-xs">
                    {errors.capacidadesDesafio}
                  </p>
                )}
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
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
