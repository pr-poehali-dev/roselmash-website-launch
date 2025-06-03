import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Briefcase",
      title: "Гарантированное трудоустройство",
      description:
        "98% выпускников получают работу в компании Ростсельмаш или у партнеров",
    },
    {
      icon: "DollarSign",
      title: "Высокая зарплата",
      description: "Средняя зарплата выпускников 80-120 тысяч рублей в месяц",
    },
    {
      icon: "Factory",
      title: "Практика на производстве",
      description:
        "Обучение происходит непосредственно на заводе с современным оборудованием",
    },
    {
      icon: "Lightbulb",
      title: "Инновационные проекты",
      description:
        "Участие в разработке техники будущего и патентных исследованиях",
    },
    {
      icon: "Globe",
      title: "Международный опыт",
      description:
        "Стажировки в зарубежных филиалах компании в Европе и Америке",
    },
    {
      icon: "Trophy",
      title: "Престижное образование",
      description:
        "Диплом признается ведущими машиностроительными компаниями России",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уникальные возможности для старта успешной карьеры в машиностроении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Icon
                      name={advantage.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Поступление 2024
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" size={20} className="text-blue-600" />
                  <span>
                    <strong>Подача документов:</strong> до 25 июля
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="FileText" size={20} className="text-blue-600" />
                  <span>
                    <strong>Экзамены:</strong> математика, физика, русский язык
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={20} className="text-blue-600" />
                  <span>
                    <strong>Бюджетные места:</strong> 150 мест
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Banknote" size={20} className="text-blue-600" />
                  <span>
                    <strong>Стипендия:</strong> от 15 000 рублей
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center"
                alt="Студенты института"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
