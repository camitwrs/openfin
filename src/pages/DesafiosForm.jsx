import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import fondoBanner from "../assets/fondo-desafios-2.webp";
import {
  Mail,
  Building2,
  Users,
  Loader2,
  CheckCircle,
  XCircle,
  Send,
  Phone,
  Link,
  ClipboardList,
  ArrowLeft,
  Briefcase,
  Lightbulb,
  MessageCircle,
} from "lucide-react";

import { postInscripcionDesafio } from "../api/empresas-desafios.js";

export default function DesafiosForm() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    nombreEmpresa: "",
    areaTrabajo: "",
    contactoWeb: "",
    numeroTelefono: "",
    actividadesServicios: "",
    desafio1: "",
    desafio2: "",
    desafio3: "",
    vinculoPucv: [], // Cambiado a un array para múltiples selecciones
    masInformacion: "",
  });

  const [otraVinculoText, setOtraVinculoText] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const vinculosPucvOptions = [
    { value: "Alumni Pregrado", label: "Sí, soy Alumni (pregrado)" },
    {
      value: "Alumni Postgrado",
      label: "Sí, soy Alumni (postgrado o formación continua)",
    },
    {
      value: "Proyectos IDD",
      label: "Sí, he participado en proyectos de I+D con la PUCV",
    },
    {
      value: "Asistencia Tecnica",
      label: "Sí, he contratado Asistencia Técnica con la PUCV",
    },
    { value: "Sin vinculos", label: "No he tenido vínculos" },
    { value: "Otra", label: "Otra..." },
  ];

  const masInformacionOptions = [
    { value: "si", label: "Sí, estoy interesado/a" },
    { value: "no", label: "No estoy interesado/a" },
  ];

  const handleInputChange = (field, value) => {
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

  const handleCheckboxChange = (value, checked) => {
    setFormData((prev) => {
      let newVinculos = [...prev.vinculoPucv];
      if (checked) {
        newVinculos.push(value);
      } else {
        newVinculos = newVinculos.filter((v) => v !== value);
      }
      return {
        ...prev,
        vinculoPucv: newVinculos,
      };
    });
    if (errors.vinculoPucv) {
      setErrors((prev) => ({
        ...prev,
        vinculoPucv: "",
      }));
    }
  };

  const handleOtraVinculoTextChange = (value) => {
    setOtraVinculoText(value);
    if (errors.vinculoPucv && value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        vinculoPucv: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "nombre",
      "apellido",
      "correoElectronico",
      "nombreEmpresa",
      "areaTrabajo",
      "vinculoPucv",
      "numeroTelefono",
      "actividadesServicios",
      "desafio1",
      "masInformacion",
    ];

    requiredFields.forEach((field) => {
      if (
        field === "vinculoPucv" &&
        (!Array.isArray(formData.vinculoPucv) ||
          formData.vinculoPucv.length === 0)
      ) {
        newErrors[field] = "Seleccione al menos un vínculo";
      } else if (
        typeof formData[field] === "string" &&
        !formData[field].trim()
      ) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });

    if (
      formData.correoElectronico &&
      !/\S+@\S+\.\S+/.test(formData.correoElectronico)
    ) {
      newErrors.correoElectronico = "Ingrese un correo electrónico válido";
    }

    if (formData.vinculoPucv.includes("Otra") && !otraVinculoText.trim()) {
      newErrors.vinculoPucv = "Por favor especifique el vínculo con la PUCV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    if (!validateForm()) {
      return;
    }

    let dataToSend = { ...formData };

    // Convertir el string de areaTrabajo a un array de strings
    dataToSend.areaTrabajo = dataToSend.areaTrabajo
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    // Si "Otra" está seleccionado, reemplazarlo con el texto del input
    if (dataToSend.vinculoPucv.includes("Otra")) {
      dataToSend.vinculoPucv = dataToSend.vinculoPucv.filter(
        (v) => v !== "Otra"
      );
      dataToSend.vinculoPucv = [...dataToSend.vinculoPucv, otraVinculoText];
    }

    // Convertir el valor de masInformacion a booleano
    dataToSend.masInformacion = dataToSend.masInformacion === "si";

    setIsSubmitting(true);
    try {
      console.log("Datos enviados al backend:", dataToSend);
      const response = await postInscripcionDesafio(dataToSend);
      setSubmitMessage({
        type: "success",
        text: "¡Inscripción enviada con éxito!",
      });
      setFormData({
        nombre: "",
        apellido: "",
        correoElectronico: "",
        nombreEmpresa: "",
        areaTrabajo: "",
        contactoWeb: "",
        numeroTelefono: "",
        actividadesServicios: "",
        desafio1: "",
        desafio2: "",
        desafio3: "",
        vinculoPucv: [],
        masInformacion: "",
      });
      setOtraVinculoText("");
      // El scroll se activa 1 segundo después del envío exitoso
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1000);

      // El mensaje de éxito desaparece 5 segundos después del envío
      setTimeout(() => {
        setSubmitMessage({ type: "", text: "" });
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      if (error.details) {
        setErrors((prev) => ({ ...prev, ...error.details }));
      }
      setSubmitMessage({
        type: "error",
        text: "Lo sentimos. Ocurrió un error al enviar la inscripción. Inténtelo denuevo más tarde.",
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
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-gray-600 flex ml-10 cursor-pointer font-bold hover:text-gray-800 px-6 py-3 rounded-full bg-white shadow-lg"
      >
        <ArrowLeft className="mr-2 h-6 w-6" />
        Regresar
      </button>
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-lg overflow-hidden bg-white rounded-3xl pt-0">
          <div
            className="relative rounded-t-3xl py-12 bg-cover bg-center"
            style={{ backgroundImage: `url(${fondoBanner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-500 opacity-30"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-black mb-2">
                  Inscribe tu desafío tecnológico
                </h1>
                <div className="bg-sky-600/50 backdrop-blur-sm rounded-full px-6 py-2 mt-3 mx-auto max-w-md">
                  <p className="text-md text-sky-100 leading-tight">
                    Conecta con estudiantes y académicos que pueden ayudarte a
                    resolver tus desafíos de innovación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-6 pt-0">
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
              {/* Personal Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="nombre"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Nombre <span className="text-gray-500">(Obligatorio)</span>
                  </Label>
                  <Input
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      handleInputChange("nombre", e.target.value)
                    }
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
                    Apellido{" "}
                    <span className="text-gray-500">(Obligatorio)</span>
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
              </div>

              {/* Email & Phone Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="correoElectronico"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Correo electrónico{" "}
                    <span className="text-gray-500">(Obligatorio)</span>
                  </Label>
                  <Input
                    id="correoElectronico"
                    type="email"
                    placeholder="ejemplo@empresa.com"
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

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="numeroTelefono"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Número de teléfono de contacto{" "}
                    <span className="text-gray-500">(Obligatorio)</span>
                  </Label>
                  <Input
                    id="numeroTelefono"
                    type="tel"
                    placeholder="912345678"
                    value={formData.numeroTelefono}
                    onChange={(e) =>
                      handleInputChange("numeroTelefono", e.target.value)
                    }
                    className={errors.numeroTelefono ? "border-red-500" : ""}
                  />
                  {errors.numeroTelefono && (
                    <p className="text-red-500 text-xs">
                      {errors.numeroTelefono}
                    </p>
                  )}
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="space-y-6">
                {/* Company/Organization */}
                <div className="space-y-2">
                  <Label
                    htmlFor="nombreEmpresa"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4" />
                    Empresa/Organización a la que pertenece{" "}
                    <span className="text-gray-500">(Obligatorio)</span>
                  </Label>
                  <Input
                    id="nombreEmpresa"
                    placeholder="Nombre de la empresa u organización"
                    value={formData.nombreEmpresa}
                    onChange={(e) =>
                      handleInputChange("nombreEmpresa", e.target.value)
                    }
                    className={errors.nombreEmpresa ? "border-red-500" : ""}
                  />
                  {errors.nombreEmpresa && (
                    <p className="text-red-500 text-xs">
                      {errors.nombreEmpresa}
                    </p>
                  )}
                </div>

                {/* Area de Trabajo */}
                <div className="space-y-2">
                  <Label
                    htmlFor="areaTrabajo"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    Área de trabajo de la Institución/Empresa a la que pertenece{" "}
                    <span className="text-gray-500">(Obligatorio)</span>
                  </Label>
                  <Input
                    id="areaTrabajo"
                    placeholder="Ej. Tecnología, Manufactura, Servicios, etc."
                    value={formData.areaTrabajo}
                    onChange={(e) =>
                      handleInputChange("areaTrabajo", e.target.value)
                    }
                    className={errors.areaTrabajo ? "border-red-500" : ""}
                  />
                  {errors.areaTrabajo && (
                    <p className="text-red-500 text-xs">{errors.areaTrabajo}</p>
                  )}
                </div>

                {/* Contacto/Website/Social Media */}
                <div className="space-y-2">
                  <Label
                    htmlFor="contactoWeb"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Link className="w-4 h-4" />
                    Contacto/página web/redes sociales (Empresa){" "}
                    <span className="text-gray-500">(Opcional)</span>
                  </Label>
                  <Input
                    id="contactoWeb"
                    placeholder="www.empresa.com o @empresa"
                    value={formData.contactoWeb}
                    onChange={(e) =>
                      handleInputChange("contactoWeb", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Vínculo con la PUCV (Checkbox) */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  ¿Ha tenido algún vínculo con la PUCV?{" "}
                  <span className="text-gray-500">(Obligatorio)</span>
                </Label>
                <div className="space-y-3">
                  {vinculosPucvOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`vinculo-${index}`}
                        checked={formData.vinculoPucv.includes(option.value)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(option.value, checked)
                        }
                      />
                      <Label
                        htmlFor={`vinculo-${index}`}
                        className="text-sm font-normal"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.vinculoPucv && (
                  <p className="text-red-500 text-xs">{errors.vinculoPucv}</p>
                )}
                {/* Other Vinculo Input */}
                {formData.vinculoPucv.includes("Otra") && (
                  <div className="ml-6 space-y-2">
                    <Label
                      htmlFor="otraVinculo"
                      className="text-sm font-medium"
                    >
                      Especifique el vínculo{" "}
                      <span className="text-gray-500">(Obligatorio)</span>
                    </Label>
                    <Input
                      id="otraVinculo"
                      placeholder="Ingrese su vínculo con la PUCV"
                      value={otraVinculoText}
                      onChange={(e) =>
                        handleOtraVinculoTextChange(e.target.value)
                      }
                      className={errors.vinculoPucv ? "border-red-500" : ""}
                    />
                  </div>
                )}
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <Label
                  htmlFor="actividadesServicios"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  ¿Qué hace tu empresa/organización? Indica palabras clave
                  (keywords) para describir tus productos o servicios.{" "}
                  <span className="text-gray-500">(Obligatorio)</span>
                </Label>
                <Textarea
                  id="actividadesServicios"
                  placeholder="Ej. logística, transporte, sustentabilidad, energías renovables, eficiencia energética, automatización, minería, robótica, manufactura, procesos, biotecnología, alimentos, medicamentos, optimización, desarrollo de software, IA, ciberseguridad, transformación digital, entre otros"
                  value={formData.actividadesServicios}
                  onChange={(e) =>
                    handleInputChange("actividadesServicios", e.target.value)
                  }
                  className={
                    errors.actividadesServicios ? "border-red-500" : ""
                  }
                />
                {errors.actividadesServicios && (
                  <p className="text-red-500 text-xs">
                    {errors.actividadesServicios}
                  </p>
                )}
              </div>

              {/* Desafíos Section with a light blue background */}
              <div className="space-y-4 p-4 rounded-lg bg-sky-50 border-sky-200 border">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  Desafíos para Ingeniería PUCV{" "}
                </Label>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Indica muy brevemente un máximo de 3 problemas, desafíos o
                  áreas de colaboración que te gustaría explorar con Ingeniería
                  PUCV.
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="desafio1">
                      Desafío/Problema o área de Colaboración N° 1{" "}
                      <span className="text-gray-500">(Obligatorio)</span>
                    </Label>
                    <Textarea
                      id="desafio1"
                      placeholder="Describa el primer desafío o área de colaboración"
                      value={formData.desafio1}
                      onChange={(e) =>
                        handleInputChange("desafio1", e.target.value)
                      }
                      className={errors.desafio1 ? "border-red-500" : ""}
                    />
                    {errors.desafio1 && (
                      <p className="text-red-500 text-xs">{errors.desafio1}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desafio2">
                      Desafío/Problema o área de Colaboración N° 2
                    </Label>
                    <Textarea
                      id="desafio2"
                      placeholder="Describa el segundo desafío o área de colaboración"
                      value={formData.desafio2}
                      onChange={(e) =>
                        handleInputChange("desafio2", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="desafio3">
                      Desafío/Problema o área de Colaboración N° 3
                    </Label>
                    <Textarea
                      id="desafio3"
                      placeholder="Describa el tercer desafío o área de colaboración"
                      value={formData.desafio3}
                      onChange={(e) =>
                        handleInputChange("desafio3", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Más información (RadioGroup) */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  ¿Desea recibir más información sobre actividades relacionadas
                  a colaboración entre Empresas, Organizaciones y la PUCV?{" "}
                  <span className="text-gray-500">(Obligatorio)</span>
                </Label>
                <RadioGroup
                  value={formData.masInformacion}
                  onValueChange={(value) =>
                    handleInputChange("masInformacion", value)
                  }
                  className="space-y-3"
                >
                  {masInformacionOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value}
                        id={`info-${index}`}
                      />
                      <Label
                        htmlFor={`info-${index}`}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.masInformacion && (
                  <p className="text-red-500 text-xs">
                    {errors.masInformacion}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-sky-800 to-sky-500 hover:from-sky-700 text-white font-semibold py-3 text-lg"
                  disabled={isSubmitting || submitMessage.type === "success"}
                >
                  {getButtonContent()}
                </Button>
                {submitMessage.type === "success" && (
                  <p className="text-green-600 text-md font-semibold mt-2 text-center">
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
