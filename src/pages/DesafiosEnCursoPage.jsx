import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Sparkles } from "lucide-react";

export default function DesafiosEnCursoPage() {
  return (
    <div className="h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Próximamente
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Estamos trabajando en esta sección para mostrarte los desafíos
              adjudicados y proyectos en ejecución.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
              <Sparkles className="w-5 h-5" />
              <span>¡Vuelve pronto para ver las novedades!</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
