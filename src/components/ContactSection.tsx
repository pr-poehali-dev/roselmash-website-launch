import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Остались вопросы? Мы поможем выбрать программу и расскажем о
            поступлении
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Оставьте заявку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваш вопрос"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-300">
                      г. Ростов-на-Дону, ул. Менжинского, 2
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-300">+7 (863) 205-30-00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-green-400 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      info@institute.rostselmash.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-green-400 mt-1"
                  />
                  <div>
                    <div className="font-semibold">Приемная комиссия</div>
                    <div className="text-gray-300">Пн-Пт: 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:text-white hover:bg-blue-600"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:text-white hover:bg-blue-500"
                >
                  <Icon name="Share" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:text-white hover:bg-red-500"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">День открытых дверей</h4>
              <p className="mb-4">15 мая 2024 в 10:00</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
