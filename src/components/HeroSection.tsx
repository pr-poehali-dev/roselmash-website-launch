import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-corporate-dark to-corporate-coral text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#9799a6]"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon name="Cpu" size={64} className="mx-auto mb-4 text-white/90" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Институт перспективного
          <br />
          <span className="text-corporate-coral">машиностроения</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Стань частью будущего сельскохозяйственного машиностроения с ведущим
          производителем России
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-corporate-coral hover:bg-orange-500 text-white font-semibold px-8 py-3"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Подать документы
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-corporate-dark px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть видео
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-corporate-coral">15+</div>
            <div className="text-white/80">лет опыта</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-corporate-coral">98%</div>
            <div className="text-white/80">трудоустройство</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-corporate-coral">500+</div>
            <div className="text-white/80">выпускников</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
