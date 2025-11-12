import { Calendar, Newspaper, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ActividadesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Mantente al día con nuestras actividades
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Descubre las últimas noticias y eventos. Todo lo que necesitas saber
            en un solo lugar.
          </p>
        </div>
      </section>

      {/* Main Content - Cards Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Noticias Card */}
          <Card className="group relative overflow-hidden border-2 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Noticias
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lee las últimas actualizaciones, anuncios importantes y
                  novedades de nuestra comunidad.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Actualizaciones diarias</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Artículos destacados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span>Comunicados oficiales</span>
                </div>
              </div>
              <Link to="/actividades/noticias">
                <Button className="w-full group/btn" size="lg">
                  <span>Ver Noticias</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Calendario Card */}
          <Card className="group relative overflow-hidden border-2 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 md:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/50 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Calendario
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consulta todos los eventos programados, fechas importantes y
                  actividades próximas.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Eventos próximos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Fechas importantes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Recordatorios</span>
                </div>
              </div>

              <Link to="/actividades/calendario">
                <Button
                  className="w-full group/btn bg-black/20 hover:bg-black/40 text-black-foreground"
                  size="lg"
                >
                  <span>Ver Calendario</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
