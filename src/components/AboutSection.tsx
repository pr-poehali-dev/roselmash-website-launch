import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            О нашем институте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы готовим специалистов мирового уровня для аграрного
            машиностроения, объединяя академические знания с практическим опытом
            лидера отрасли
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
              alt="Современные технологии в машиностроении"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Лидер аграрного машиностроения
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Институт перспективного машиностроения "Ростсельмаш" — это
              уникальное образовательное учреждение, созданное на базе
              крупнейшего российского производителя сельскохозяйственной
              техники.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-corporate-coral"
                />
                <span>Практическое обучение на реальном производстве</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-corporate-coral"
                />
                <span>Современное оборудование и лаборатории</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-corporate-coral"
                />
                <span>Гарантированное трудоустройство в компании</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Icon
                name="Users"
                size={32}
                className="mx-auto mb-4 text-corporate-dark"
              />
              <div className="text-2xl font-bold text-gray-900 mb-2">1200+</div>
              <div className="text-gray-600">студентов</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Icon
                name="GraduationCap"
                size={32}
                className="mx-auto mb-4 text-corporate-coral"
              />
              <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">преподавателей</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Icon
                name="Award"
                size={32}
                className="mx-auto mb-4 text-corporate-coral"
              />
              <div className="text-2xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">наград</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Icon
                name="Building"
                size={32}
                className="mx-auto mb-4 text-corporate-dark"
              />
              <div className="text-2xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">лабораторий</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
