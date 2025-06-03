import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Машиностроение",
      duration: "4 года",
      level: "Бакалавриат",
      description:
        "Подготовка инженеров по проектированию и производству сельскохозяйственной техники",
      features: [
        "CAD/CAM системы",
        "Материаловедение",
        "Производственные технологии",
      ],
      icon: "Cog",
    },
    {
      title: "Мехатроника и робототехника",
      duration: "4 года",
      level: "Бакалавриат",
      description:
        "Создание интеллектуальных систем управления современной техникой",
      features: [
        "Программирование ПЛК",
        "Робототехника",
        "Системы автоматизации",
      ],
      icon: "Bot",
    },
    {
      title: "Технология машиностроения",
      duration: "2 года",
      level: "Магистратура",
      description:
        "Углубленное изучение современных производственных процессов",
      features: [
        "Аддитивные технологии",
        "Цифровое производство",
        "Управление качеством",
      ],
      icon: "Settings",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Образовательные программы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление, которое откроет путь к успешной карьере в
            машиностроении
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-corporate-coral"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon
                    name={program.icon as any}
                    size={32}
                    className="text-corporate-dark"
                  />
                  <Badge
                    variant="outline"
                    className="text-corporate-coral border-corporate-coral"
                  >
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {program.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon name="Clock" size={16} />
                  <span>{program.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">
                    Ключевые дисциплины:
                  </h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Icon
                          name="ChevronRight"
                          size={14}
                          className="text-corporate-coral"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
