import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Mantendremos CardHeader/CardTitle aunque los usaremos de otra forma
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Phone, Globe, Users, Target } from "lucide-react";

export default function EmpresasForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    numeroTelefono: "",
    empresaOrganizacion: "",
    areaTrabajo: "",
    contactoWeb: "",
    vinculoPUCV: [],
    actividadesServicios: "",
    desafio1: "",
    desafio2: "",
    desafio3: "",
    interesInformacion: "",
  });

  const [errors, setErrors] = useState({});

  const vinculoOptions = [
    "Sí, soy Alumni (pregrado)",
    "Sí, soy Alumni (postgrado o formación continua)",
    "Sí, he participado en proyectos de I+D con la PUCV",
    "Sí, he contratado Asistencia Técnica con la PUCV",
    "No he tenido vínculos",
    "Otra...",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleCheckboxChange = (option, checked) => {
    setFormData((prev) => ({
      ...prev,
      vinculoPUCV: checked
        ? [...prev.vinculoPUCV, option]
        : prev.vinculoPUCV.filter((item) => item !== option),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "nombre",
      "apellido",
      "correoElectronico",
      "numeroTelefono",
      "empresaOrganizacion",
      "areaTrabajo",
      "contactoWeb",
      // No validamos vinculoPUCV como obligatorio aquí para no forzar la selección inicial
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });

    if (
      formData.correoElectronico &&
      !/\S+@\S+\.\S+/.test(formData.correoElectronico)
    ) {
      newErrors.correoElectronico = "Ingrese un correo electrónico válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log("Datos del formulario:", formData);
        alert("Formulario enviado exitosamente!");
      }
    }
  };

  return (
    <div className=" bg-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Contenedor Único del Formulario y Encabezado */}
        <Card className="border-0 shadow-xl overflow-hidden">
          {/* Antiguo Header Card - Sección visual */}
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
                  Inscripción para Empresas y Organizaciones
                </Badge>
              </div>
            </div>
          </div>

          {/* Contenido principal del formulario, antes estaba en el Form Card */}
          <CardContent className="p-6">
            {/* Texto introductorio movido aquí */}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-sm font-medium">
                    Nombre <span className="text-red-500">*</span>
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

                <div className="space-y-2">
                  <Label htmlFor="apellido" className="text-sm font-medium">
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
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="space-y-2">
                  <Label
                    htmlFor="numeroTelefono"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Número de teléfono de contacto{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="numeroTelefono"
                    placeholder="+56 9 1234 5678"
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

              {/* Company Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="empresaOrganizacion"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    Empresa/Organización a la que pertenece{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="empresaOrganizacion"
                    placeholder="Nombre de la empresa u organización"
                    value={formData.empresaOrganizacion}
                    onChange={(e) =>
                      handleInputChange("empresaOrganizacion", e.target.value)
                    }
                    className={
                      errors.empresaOrganizacion ? "border-red-500" : ""
                    }
                  />
                  {errors.empresaOrganizacion && (
                    <p className="text-red-500 text-xs">
                      {errors.empresaOrganizacion}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="areaTrabajo" className="text-sm font-medium">
                    Área de trabajo de la Institución/Empresa a la que pertenece{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="areaTrabajo"
                    placeholder="Ej: Tecnología, Manufactura, Servicios, etc."
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

                <div className="space-y-2">
                  <Label
                    htmlFor="contactoWeb"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    Contacto/página web/redes sociales (Empresa){" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactoWeb"
                    placeholder="www.empresa.com o @empresa"
                    value={formData.contactoWeb}
                    onChange={(e) =>
                      handleInputChange("contactoWeb", e.target.value)
                    }
                    className={errors.contactoWeb ? "border-red-500" : ""}
                  />
                  {errors.contactoWeb && (
                    <p className="text-red-500 text-xs">{errors.contactoWeb}</p>
                  )}
                </div>
              </div>

              {/* PUCV Relationship */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">
                  ¿Ha tenido algún vínculo con la PUCV?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="space-y-3">
                  {vinculoOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`vinculo-${index}`}
                        checked={formData.vinculoPUCV.includes(option)}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(option, checked)
                        }
                      />
                      <Label
                        htmlFor={`vinculo-${index}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities and Services */}
              <div className="space-y-2">
                <Label
                  htmlFor="actividadesServicios"
                  className="text-sm font-medium"
                >
                  Indique las principales actividades o línea (keywords) que
                  describen las actividades que realiza su empresa o área de
                  trabajo (puede ser conceptos o términos por los que podrían
                  buscar los servicios que su empresa puede ofrecer)
                </Label>
                <Textarea
                  id="actividadesServicios"
                  placeholder="Ej: logística, transporte, sustentabilidad, energías renovables, eficiencia energética, automatización, minería, robótica, manufactura, procesos, biotecnología, alimentos, medicamentos, optimización, desarrollo de software, IA, ciberseguridad, transformación digital, entre otros."
                  value={formData.actividadesServicios}
                  onChange={(e) =>
                    handleInputChange("actividadesServicios", e.target.value)
                  }
                  className="min-h-[100px]"
                />
              </div>

              {/* Challenges Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    Desafíos para Ingeniería PUCV
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Indica muy brevemente un máximo de 3 problemas, desafíos o
                    áreas de colaboración que te gustaría explorar con
                    Ingeniería PUCV.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="desafio1" className="text-sm font-medium">
                        Desafío/Problema o área de Colaboración N° 1
                      </Label>
                      <Textarea
                        id="desafio1"
                        placeholder="Describa el primer desafío o área de colaboración"
                        value={formData.desafio1}
                        onChange={(e) =>
                          handleInputChange("desafio1", e.target.value)
                        }
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="desafio2" className="text-sm font-medium">
                        Desafío/Problema o área de Colaboración N° 2
                      </Label>
                      <Textarea
                        id="desafio2"
                        placeholder="Describa el segundo desafío o área de colaboración"
                        value={formData.desafio2}
                        onChange={(e) =>
                          handleInputChange("desafio2", e.target.value)
                        }
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="desafio3" className="text-sm font-medium">
                        Desafío/Problema o área de Colaboración N° 3
                      </Label>
                      <Textarea
                        id="desafio3"
                        placeholder="Describa el tercer desafío o área de colaboración"
                        value={formData.desafio3}
                        onChange={(e) =>
                          handleInputChange("desafio3", e.target.value)
                        }
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interest in Information */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">
                  ¿Desea recibir más información sobre actividades relacionadas
                  a colaboración entre Empresas, organizaciones y la PUCV?
                </Label>
                <RadioGroup
                  value={formData.interesInformacion}
                  onValueChange={(value) =>
                    handleInputChange("interesInformacion", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="interes-si" />
                    <Label htmlFor="interes-si" className="cursor-pointer">
                      Sí, estoy interesado/a
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="interes-no" />
                    <Label htmlFor="interes-no" className="cursor-pointer">
                      No estoy interesado/a
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 text-lg"
                >
                  Enviar Inscripción
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
