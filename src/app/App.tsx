import { MapPin, Calendar, Youtube, BookOpen, Heart, Users, GraduationCap, Video, Clock, MessageCircle, Mail, HandHeart, ShoppingBasket, Recycle, PawPrint, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Header } from "./components/Header";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState } from "react";

const heroImage = "/sementesdehumildade/images/hero-caminho-luz.png";
const canalYoutubeImage = "/sementesdehumildade/images/canal-youtube.png";
const livroEspiritosImage = "/sementesdehumildade/images/livro-espiritos.png";
const palestrasImage = "/sementesdehumildade/images/palestras.png";
const fachadaImage = "/sementesdehumildade/images/fachada.png";

// Section Component
function Section({ 
  id, 
  children, 
  bgColor = "bg-white", 
  className = "" 
}: { 
  id?: string; 
  children: React.ReactNode; 
  bgColor?: string; 
  className?: string;
}) {
  return (
    <section id={id} className={`${bgColor} py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Card Component
function Card({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: any; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#A5D6A7] p-3 rounded-lg">
          <Icon className="text-[#2E7D32]" size={24} />
        </div>
        <h3 className="font-['Montserrat'] text-lg text-[#212121]">{title}</h3>
      </div>
      <div className="text-[#616161] font-['Inter'] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// Button Component
function Button({ 
  children, 
  variant = "primary",
  onClick
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}) {
  const baseStyles = "px-8 py-3 rounded-full font-['Inter'] font-medium transition-colors inline-flex items-center";
  const variants = {
    primary: "bg-[#4CAF50] text-white hover:bg-[#2E7D32]",
    secondary: "bg-[#90CAF9] text-[#212121] hover:bg-[#64B5F6]",
    outline: "border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default function App() {
  const [expandedDomingo, setExpandedDomingo] = useState(false);
  const [expandedTerca, setExpandedTerca] = useState(false);
  const [expandedSexta, setExpandedSexta] = useState(false);
  const [expandedSabado, setExpandedSabado] = useState(false);
  const [expandedInfantil, setExpandedInfantil] = useState(false);
  const [expandedJuvenil, setExpandedJuvenil] = useState(false);
  const [expandedSobre, setExpandedSobre] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Unificada - Atualizada */}
      <Section id="inicio" className="pt-32 md:pt-40 pb-6 relative overflow-hidden">
        {/* Background Image com Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="Luz e paz espiritual"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">

          {/* Callout Curso de Mediunidade */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-white/55 backdrop-blur-md border border-white/70 shadow-xl rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/15 via-transparent to-[#A5D6A7]/15 rounded-2xl" />
            <div className="relative z-10 py-5 px-5 sm:px-8">
              {/* Título chamativo */}
              <p className="font-['Montserrat'] font-black text-2xl sm:text-3xl md:text-4xl uppercase leading-tight mb-2"
                style={{ color: "#1B5E20", textShadow: "0 1px 8px rgba(76,175,80,0.18)", letterSpacing: "0.04em" }}>
                Curso de Mediunidade
              </p>
              {/* Infos em linha única, quebra no mobile */}
              <p className="font-['Inter'] text-[#424242] text-sm sm:text-base font-medium mb-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5">
                <span>Sem pré-requisitos · Gratuito · Presencial</span>
                <span className="text-[#A5D6A7] hidden sm:inline">|</span>
                <span>Sextas-feiras, 20h · Início em 28 de agosto</span>
              </p>
              {/* CTA */}
              <a
                href="https://api.whatsapp.com/send?phone=+5511945412285&text=Oi,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20de%20Mediunidade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#2E7D32] text-white font-['Inter'] font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                👉 Clique aqui para mais informações via WhatsApp
              </a>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Montserrat'] text-[#212121] mb-6 leading-tight">
            Grupo Espírita Sementes de Humildade
          </h1>
          <p className="text-xl text-[#616161] font-['Inter'] mb-12 leading-relaxed">
            <span className="font-bold text-[#2E7D32]">Kardec</span> fundamenta nossos trabalhos; <span className="font-bold text-[#2E7D32]">Jesus</span> é nosso guia e modelo; e <span className="font-bold text-[#2E7D32]">Chico Xavier</span>, nosso exemplo de conduta cristã.
          </p>

          {/* Imagem espiritual */}
          <div className="flex justify-center mb-12">
            <img
              src={heroImage}
              alt="Caminho espiritual - pessoa com animais caminhando em direção à luz"
              className="rounded-2xl shadow-2xl max-w-full h-auto w-full md:w-3/4 lg:w-2/3"
            />
          </div>

          {/* Venha nos conhecer - integrado */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-['Montserrat'] text-[#212121] mb-3 leading-tight">
              Venha nos conhecer
            </h2>
            <p className="text-base md:text-lg text-[#616161] font-['Inter'] mb-6 leading-relaxed">
              Estamos te esperando.<br />
              Escolha sua rota preferida.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a 
                href="https://maps.app.goo.gl/92uDKGhPyFT3sEyw5?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-['Inter'] font-semibold text-base hover:bg-[#2E7D32] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin size={18} />
                Ir com Google Maps
              </a>
              <a 
                href="https://waze.com/ul/h6gydm8p29"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#90CAF9] text-[#212121] px-6 py-3 rounded-full font-['Inter'] font-semibold text-base hover:bg-[#64B5F6] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin size={18} />
                Ir com Waze
              </a>
            </div>

            {/* Endereço */}
            <div className="flex items-center justify-center gap-2 text-[#616161] font-['Inter']">
              <MapPin className="text-[#4CAF50]" size={16} />
              <p className="text-sm md:text-base">
                Rua Goiás 253 – Nova Aldeinha – Barueri
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reuniões Section */}
      <Section id="reunioes" bgColor="bg-[#F5F5F5]" className="pt-16 md:pt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-4">
            Reuniões
          </h2>
          <p className="text-[#616161] font-['Inter'] max-w-2xl mx-auto">
            O coração encontra alívio quando percebe o sentido das experiências e se apoia em Jesus, renovando a esperança de que tudo passa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Domingos */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Domingos<br />
                    10h
                  </h3>
                  <p className="text-sm text-[#4CAF50] font-medium">
                    Presencial e{" "}
                    <a 
                      href="https://meet.google.com/vbn-udfd-zgs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors"
                    >
                      Online
                    </a>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedDomingo(!expandedDomingo)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedDomingo ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Passe e Atendimento para Animais</h4>
            
            {expandedDomingo && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Dedicada ao cuidado espiritual de animais e humanos, oferecendo um momento simples, breve e acolhedor para toda a família.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  <strong>Presencial:</strong> Iniciamos com uma mensagem e oração, seguidas do passe para humanos e animais. Os animais não permanecem muito tempo no ambiente, evitando estresse.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  <strong>Online:</strong> Pequeno estudo e passe à distância, especialmente para animais idosos, doentes ou que vivem longe.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  Para assistir online no Google Meet{" "}
                  <a 
                    href="https://meet.google.com/vbn-udfd-zgs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium"
                  >
                    clique aqui
                  </a>.
                </p>
              </>
            )}
          </div>

          {/* Terças */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Terças<br />
                    20h
                  </h3>
                  <p className="text-sm text-[#616161] font-medium">
                    Presencial com transmissão{" "}
                    <a 
                      href="https://youtube.com/sementesdehumildade" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors"
                    >
                      YouTube
                    </a>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedTerca(!expandedTerca)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedTerca ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Passe, Conversa Individual Fraterna e Oração para Falecidos</h4>
            
            {expandedTerca && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Reunião dedicada aos falecidos e suas famílias, carinhosamente conhecida como <strong>Prece da Saudade</strong>, esta reunião oferece um momento de paz, reflexão e convivência fraterna.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  A noite conta com pequena palestra, passe (tratamento ou em grupo), e Conversa Individual Fraterna disponível durante toda a reunião.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Ao final, em clima de prece e memória amorosa, são lidos os nomes dos falecidos deixados nas caixas de coleta, em um momento de saudade amorosa, carinho e união.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Encerramos com café, bolo e conversa descontraída, fortalecendo vínculos de amizade e convivência fraterna.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  Para assistir no Youtube{" "}
                  <a 
                    href="https://www.youtube.com/sementesdehumildade" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium"
                  >
                    clique aqui
                  </a>.
                </p>
              </>
            )}
          </div>

          {/* Sextas */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Sextas<br />
                    20h
                  </h3>
                  <p className="text-sm text-[#4CAF50] font-medium">Presencial</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedSexta(!expandedSexta)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedSexta ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Palestra e Passe</h4>
            
            {expandedSexta && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Realizar o Evangelho no lar é proteger nossa casa, nossa família e nossos vizinhos, neste encontro aprendemos como realizar <strong>Evangelho no Lar</strong>, uma prática simples que fortalece o ambiente doméstico e favorece a harmonia entre os moradores.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  Durante o encontro, fazemos leitura de mensagem psicografada por Chico Xavier e trechos do Evangelho Segundo o Espiritismo, com comentários breves e acessíveis. Ao final, oferecemos o passe.
                </p>
              </>
            )}
          </div>

          {/* Sábados */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Sábados<br />
                    18h30
                  </h3>
                  <p className="text-sm text-[#616161] font-medium">
                    Presencial com transmissão{" "}
                    <a 
                      href="https://youtube.com/sementesdehumildade" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors"
                    >
                      YouTube
                    </a>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedSabado(!expandedSabado)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedSabado ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Palestra, Passe e Conversa Individual</h4>
            
            {expandedSabado && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Esta reunião marcou o início das atividades de nosso Centro e continua sendo um encontro especial de acolhimento e reflexão.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  A programação inclui palestra, passe (em grupo ou tratamento) e Conversa Individual Fraterna disponível durante toda a reunião.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  Encerramos com café, bolo e conversa descontraída, fortalecendo vínculos de amizade e convivência fraterna.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  Para assistir no Youtube{" "}
                  <a 
                    href="https://www.youtube.com/sementesdehumildade" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium"
                  >
                    clique aqui
                  </a>.
                </p>
              </>
            )}
          </div>

          {/* Evangelização Infantil - Sábados 18h30 */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Sábados<br />
                    18h30
                  </h3>
                  <p className="text-sm text-[#4CAF50] font-medium">Presencial</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedInfantil(!expandedInfantil)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedInfantil ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Crianças menores de 12 anos</h4>
            
            {expandedInfantil && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  A Evangelização Infantil, carinhosamente chamada de <strong>Sementinhas de Humildade</strong>, apresenta os ensinos de Jesus na linguagem que as crianças entendem, por meio de histórias, brincadeiras e atividades acolhedoras.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  <strong>Presencial:</strong> As atividades acontecem em uma sala preparada especialmente para os pequenos, todos os sábados às 18h30. No mesmo horário, os adultos participam de uma reunião voltada ao estudo e ao crescimento espiritual.
                </p>
              </>
            )}
          </div>

          {/* Evangelização Juvenil - Sábados 17h */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-xl text-[#212121] leading-tight">
                    Sábados<br />
                    17h
                  </h3>
                  <p className="text-sm text-[#4CAF50] font-medium">Presencial</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedJuvenil(!expandedJuvenil)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-1 text-sm font-['Inter'] font-medium"
              >
                {expandedJuvenil ? (
                  <>
                    Menos detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            <h4 className="font-['Montserrat'] text-[#212121] mb-3">Jovens maiores de 11 anos</h4>
            
            {expandedJuvenil && (
              <>
                <p className="text-[#616161] font-['Inter'] leading-relaxed mb-4">
                  O encontro para jovens é um espaço dedicado ao estudo, ao diálogo e ao desenvolvimento moral e espiritual, sempre com uma linguagem leve, atual e conectada ao universo juvenil.
                </p>
                <p className="text-[#616161] font-['Inter'] leading-relaxed">
                  <strong>Presencial:</strong> As atividades acontecem todos os sábados, às 17h, em um ambiente preparado especialmente para acolher os jovens e promover reflexões significativas para essa fase da vida.
                </p>
              </>
            )}
          </div>
        </div>
      </Section>

      {/* Cursos & Eventos Preview */}
      <Section id="cursos-eventos" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-4">
            Cursos & Eventos
          </h2>
          <p className="text-[#616161] font-['Inter']">
            Amai-vos e instruí-vos: venha viver momentos de aprendizado e convivência que elevam e transformam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card icon={BookOpen} title="Livro de Kardec">
            <p className="mb-2 text-sm text-[#4CAF50] font-medium">Sábados 17h - Presencial e Online</p>
            <p className="text-sm">
              Estudo aprofundado das obras de Allan Kardec com leitura detalhada, explicações e reflexões. Você pode participar quando quiser ou puder.
            </p>
          </Card>

          <Card icon={GraduationCap} title="Estudo Sistematizado">
            <p className="mb-2 text-sm text-[#4CAF50] font-medium">Quartas e/ou Sextas 20h</p>
            <p className="text-sm">
              Estudo organizado e progressivo da Doutrina Espírita dividido em módulos fundamentais.
            </p>
          </Card>

          <Card icon={Users} title="Curso de Mediunidade">
            <p className="mb-2 text-sm text-[#4CAF50] font-medium">Sextas 20h - Presencial</p>
            <p className="text-sm">
              Estudo e educação da mediunidade com equilíbrio, responsabilidade e segurança doutrinária.
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#616161] font-['Inter'] mb-6">
            Também promovemos eventos especiais durante o ano — como Psicografias, Passes de Cura, Seminários e muito mais. Fale conosco para saber sobre novas turmas e próximas atividades.
          </p>
        </div>
      </Section>

      {/* Apoio e Acolhimento Section */}
      <Section id="apoio-acolhimento" bgColor="bg-[#F5F5F5]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-4">
            Apoio e Acolhimento
          </h2>
          <p className="text-[#616161] font-['Inter'] max-w-2xl mx-auto">
            Quando o coração pede amparo, estamos aqui para oferecer presença,<br />
            escuta e carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Apoio Psicológico */}
          <div className="bg-[#F5F5F5] rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="font-['Montserrat'] text-xl text-[#212121] mb-4">
              Apoio Psicológico
            </h3>
            <p className="text-[#616161] font-['Inter'] leading-relaxed mb-6 flex-grow">
              Solicite contato para apoio emocional e escuta acolhedora.
            </p>
            <a 
              href="https://forms.cloud.microsoft/r/eXim6NS2fv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-['Inter'] font-medium hover:bg-[#2E7D32] transition-colors inline-block"
            >
              Acessar formulário
            </a>
          </div>

          {/* Card 2 - Acolhimento ao Luto */}
          <div className="bg-[#F5F5F5] rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HandHeart className="text-white" size={28} />
            </div>
            <h3 className="font-['Montserrat'] text-xl text-[#212121] mb-4">
              Acolhimento ao Luto
            </h3>
            <p className="text-[#616161] font-['Inter'] leading-relaxed mb-6 flex-grow">
              Receba acolhimento e orientação em momentos de perda.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2q__iNajdhSztyPYIituJXHA_Qd2oSqzpEs8i-un9L6794A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-['Inter'] font-medium hover:bg-[#2E7D32] transition-colors inline-block"
            >
              Acessar formulário
            </a>
          </div>

          {/* Card 3 - Pedidos de Oração */}
          <div className="bg-[#F5F5F5] rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow flex flex-col">
            <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="font-['Montserrat'] text-xl text-[#212121] mb-4">
              Pedidos de Oração
            </h3>
            <p className="text-[#616161] font-['Inter'] leading-relaxed mb-6 flex-grow">
              Envie seu pedido de oração para ser incluído em nossas vibrações.
            </p>
            <a 
              href="https://forms.cloud.microsoft/r/j6bXJkjtzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-['Inter'] font-medium hover:bg-[#2E7D32] transition-colors inline-block"
            >
              Acessar formulário
            </a>
          </div>
        </div>
      </Section>

      {/* Campanhas Section */}
      <Section id="campanhas" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-4">
            Campanhas
          </h2>
          <p className="text-[#616161] font-['Inter'] max-w-2xl mx-auto mb-8">
            Seja nossa atitude uma Semente de Caridade, levando acolhimento, amparo e esperança a quem precisa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="font-['Montserrat'] text-2xl text-[#212121] mb-6 text-center">Campanhas Permanentes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card icon={ShoppingBasket} title="Cestas Básicas">
              <p className="text-sm">
                Contribua com um item e ajude a levar alimento, higiene e dignidade às famílias que mais precisam.<br />
                <span className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium cursor-default">
                  Entregue sua contribuição em uma de nossas reuniões.
                </span>
              </p>
            </Card>

            <Card icon={Recycle} title="Tampinhas de Plástico">
              <p className="text-sm">
                Traga suas tampinhas e participe dessa corrente que recicla, ajuda e espalha esperança.<br />
                <span className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium cursor-default">
                  Entregue sua contribuição em uma de nossas reuniões.
                </span>
              </p>
            </Card>

            <Card icon={PawPrint} title="Apoio aos Animais">
              <p className="text-sm">
                Rações, medicamentos e amor é tudo o que nossos irmãos menores precisam. Doe e ajude a transformar dor em cuidado para tantos animais esquecidos.<br />
                <span className="text-[#4CAF50] hover:text-[#2E7D32] hover:underline transition-colors font-medium cursor-default">
                  Entregue sua contribuição em uma de nossas reuniões.
                </span>
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Vídeos Section */}
      <Section id="videos" bgColor="bg-[#F5F5F5]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-4">
            Vídeos
          </h2>
          <p className="text-[#616161] font-['Inter'] max-w-3xl mx-auto">
            Reunimos diversas palestras, reuniões, eventos e seminários em um só lugar. Há muito conteúdo para explorar no nosso canal no YouTube.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            href="https://www.youtube.com/watch?v=gYGTqD2cWeo&list=PLG9qkKkmLKT1B4TJ0rsaUTJ-wtOWpwUKb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
          >
            <img 
              src={palestrasImage} 
              alt="Palestras"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-[#212121] mb-2">
                Playlist Palestras
              </h4>
              <p className="text-sm text-[#616161] font-['Inter']">
                Dezenas de palestras realizadas por vários expositores.
              </p>
            </div>
          </a>

          <a 
            href="https://www.youtube.com/watch?v=yxh4jThYua8&list=PLG9qkKkmLKT2vM8UNs1WGJMH2pElS6sJQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
          >
            <img 
              src={livroEspiritosImage} 
              alt="Livro dos Espíritos"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-[#212121] mb-2">
                Playlist Livro dos Espíritos
              </h4>
              <p className="text-sm text-[#616161] font-['Inter']">
                Estudo aprofundado do Livro dos Espíritos com leitura e comentários.
              </p>
            </div>
          </a>

          <a 
            href="https://www.youtube.com/@SementesdeHumildade"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
          >
            <img 
              src={canalYoutubeImage} 
              alt="Canal Sementes no YouTube"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h4 className="font-['Montserrat'] text-[#212121] mb-2">
                Canal Oficial do Sementes
              </h4>
              <p className="text-sm text-[#616161] font-['Inter']">
                Todas as palestras, cursos, seminários etc.
              </p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a 
            href="https://www.youtube.com/@SementesdeHumildade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <Youtube className="inline-block mr-2" size={20} />
              Acesse nosso canal do Youtube
            </Button>
          </a>
        </div>
      </Section>

      {/* Sobre nós Section */}
      <Section id="sobre" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-6">
            Nossa história
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={fachadaImage}
              alt="Fachada do Grupo Espírita Sementes de Humildade"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6 text-[#616161] font-['Inter'] leading-relaxed">
            <p>
              O <strong className="text-[#2E7D32]">Grupo Espírita Sementes de Humildade</strong> nasceu do desejo sincero de viver e compartilhar os princípios da <strong className="text-[#2E7D32]">Doutrina Espírita</strong> com simplicidade, acolhimento e espírito fraterno. Como nos lembra o mentor espiritual <strong className="text-[#2E7D32]">Galdino</strong>, "no passado nos reuníamos para praticar o mal, hoje nos reunimos para reparar o mal que fizemos", expressão que traduz, com profundidade, o sentido de nossa caminhada: aprender, transformar-se e servir.
            </p>

            <p>
              Somos um grupo de pessoas que busca, por meio da vivência espírita, cultivar a <strong className="text-[#2E7D32]">caridade</strong>, o <strong className="text-[#2E7D32]">amor</strong>, o <strong className="text-[#2E7D32]">estudo</strong> e o <strong className="text-[#2E7D32]">esclarecimento</strong>, sempre sob o amparo do acolhimento e do senso de <strong className="text-[#2E7D32]">família universal</strong>. Acreditamos que a verdadeira evolução acontece quando abrimos espaço para a reflexão, para o cuidado mútuo e para a construção do bem em comunidade.
            </p>

            {/* Botão Expandir */}
            <div className="text-center pt-4">
              <button
                onClick={() => setExpandedSobre(!expandedSobre)}
                className="text-[#4CAF50] hover:text-[#2E7D32] transition-colors flex items-center gap-2 text-base font-['Inter'] font-medium mx-auto"
              >
                {expandedSobre ? (
                  <>
                    Menos detalhes <ChevronUp size={20} />
                  </>
                ) : (
                  <>
                    Mais detalhes <ChevronDown size={20} />
                  </>
                )}
              </button>
            </div>

            {/* História Completa - Expansível */}
            {expandedSobre && (
              <>
                <p>
                  Nossa história começou em <strong>janeiro de 2016</strong>, quando Ubirajara, Juan e Náira se mudaram do Rio de Janeiro para <strong>Barueri-SP</strong> por necessidades profissionais. Na nova casa, o grupo passou a realizar o <strong>Evangelho no Lar</strong> aos sábados, às 19 horas, em um ambiente de oração, estudo e harmonia.
                </p>

                <p>
                  Em <strong>abril de 2017</strong>, durante uma dessas reuniões, surgiu espiritualmente a proposta de abrir o Evangelho no Lar aos vizinhos e moradores do bairro Nova Aldeinha. Embora houvesse receio de receber pessoas desconhecidas em casa, o grupo decidiu seguir adiante, confiando no amparo espiritual e no valor do acolhimento. Assim, em <strong>08 de julho de 2017</strong>, aconteceu a "inauguração" do trabalho, com o tema <strong>"Por que tanto sofrimento"</strong>, reunindo mais de dez pessoas já no primeiro encontro.
                </p>

                <p>
                  A partir daí, outras pessoas foram se integrando aos trabalhos. <strong>Irio e Jussara</strong>, trabalhadores do <strong>Núcleo Espírita Obreiros da Vida Eterna (NEOVE)</strong>, em Carapicuíba, foram fundamentais para fortalecer os estudos e consolidar as atividades. Com o crescimento da participação, o <strong>passe</strong> passou a ser oferecido ao final das reuniões, ampliando o cuidado fraterno com todos que chegavam.
                </p>

                <p>
                  O movimento foi ganhando consistência e exigindo novos espaços. Nos fundos da casa, em uma edícula, foi preparado um ambiente mais adequado e independente para as palestras e o passe, inaugurado em <strong>07 de abril de 2018</strong>, com a palestra <strong>"Os animais têm alma?"</strong>. Pouco tempo depois, em <strong>07 de julho de 2018</strong>, o crescimento do grupo tornou necessário ampliar novamente o espaço, com a divisão de uma área de palestras e uma salinha de passe.
                </p>

                <p>
                  Em <strong>01 de maio de 2019</strong>, foi eleita a primeira Diretoria, formalizando o <strong>Grupo Espírita Sementes de Humildade</strong>, com aprovação do estatuto e início da constituição jurídica da instituição.
                </p>

                <p className="text-lg">
                  Hoje, seguimos com o mesmo propósito que nos inspirou no início: <strong className="text-[#2E7D32]">acolher, estudar, servir e semear o bem</strong>, confiando que cada gesto de fraternidade contribui para a transformação de vidas. Continuamos sonhando com novos espaços para expandir essa tarefa, sempre com humildade, fé e dedicação ao próximo.
                </p>
              </>
            )}
          </div>
        </div>
      </Section>
      <Section id="contato" bgColor="bg-white">
        {/* Contato */}
        <div className="border-t border-[#E0E0E0] pt-16 mt-16">
          <h2 className="text-3xl md:text-4xl font-['Montserrat'] text-[#212121] mb-12 text-center">
            Fale Conosco
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] rounded-xl p-8 text-center">
              <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-['Montserrat'] text-[#212121] mb-3">Endereço</h3>
              <a 
                href="https://maps.app.goo.gl/92uDKGhPyFT3sEyw5?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#616161] font-['Inter'] hover:text-[#4CAF50] transition-colors"
              >
                Rua Goiás, 253<br />
                Nova Aldeinha - Barueri/SP<br />
                CEP: 06440-170
              </a>
              <div className="flex gap-4 justify-center mt-4">
                <a 
                  href="https://maps.app.goo.gl/92uDKGhPyFT3sEyw5?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4CAF50] hover:underline"
                >
                  📍 Google Maps
                </a>
                <a 
                  href="https://waze.com/ul/h6gydm8p29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4CAF50] hover:underline"
                >
                  🚗 Waze
                </a>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-8 text-center">
              <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="font-['Montserrat'] text-[#212121] mb-3">Grupo WhatsApp</h3>
              <p className="text-[#616161] font-['Inter']">
                Junte-se ao nosso grupo e acompanhe as novidades. Apenas administradores enviam mensagens.
              </p>
              <a 
                href="https://chat.whatsapp.com/DhjE0giO0Zf7kjjLBEjie2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#4CAF50] font-['Inter'] hover:underline"
              >
                Entrar no grupo
              </a>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-8 text-center">
              <div className="bg-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-['Montserrat'] text-[#212121] mb-3">E-mail</h3>
              <p className="text-[#616161] font-['Inter'] mb-4">
                Envie sua mensagem.
              </p>
              <a 
                href="mailto:sementesdehumildade@gmail.com"
                className="inline-block text-[#4CAF50] font-['Inter'] hover:underline break-all"
              >
                sementesdehumildade@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#212121] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-['Montserrat'] mb-4">Endereço</h3>
              <div className="flex items-start gap-3 text-[#E0E0E0] font-['Inter']">
                <MapPin className="text-[#4CAF50] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Rua Goiás, 253</p>
                  <p>Nova Aldeinha - Barueri/SP</p>
                  <p>CEP: 06440-170</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Montserrat'] mb-4">Reuniões Públicas</h3>
              <div className="flex items-start gap-3 text-[#E0E0E0] font-['Inter']">
                <Clock className="text-[#4CAF50] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Domingos: 10h</p>
                  <p>Terças: 20h</p>
                  <p>Sextas: 20h</p>
                  <p>Sábados: 18h30</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Montserrat'] mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-[#E0E0E0] font-['Inter']">
                <li>
                  <a href="https://www.febnet.org.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors">
                    Federação Espírita Brasileira
                  </a>
                </li>
                <li>
                  <a href="https://www.usesp.org.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors">
                    USE - União das Sociedades Espíritas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#424242] pt-8 text-center text-[#9E9E9E] font-['Inter']">
            <p>&copy; 2024 Grupo Espírita Sementes de Humildade. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
