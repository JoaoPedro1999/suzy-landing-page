import Image from 'next/image'
import { CheckCircle } from 'react-feather'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="relative w-full pt-20 pb-20 bg-gradient-to-b from-[#390a57] to-black">
        {/* <Image
          src={'/background.png'}
          width={3840}
          height={1132}
          alt="Logo"
          className="hidden object-cover object-right lg:flex"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
        /> */}
        <div className="relative z-10 mx-auto flex w-full max-w-[78.5rem] flex-col items-center gap-6 px-5 lg:items-start lg:gap-8">
          <Image
            src={'/logo-suzy-new-3-branco-small.png'}
            width={450}
            height={96}
            alt="Logo"
          />
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
            <h1 className="max-w-[560px] text-3xl font-normal text-white lg:text-5xl/[57.6px]">
              Curso Mesa Radiônica Essencial KuanYin
            </h1>
            <p className="max-w-[500px] lg:text-xl">
              Aprenda inúmeras formas de tratar profundamente os processos de
              expansão de consciência, de seus clientes, em todas as áreas
              escolhidas.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
              <a
                href="#offer"
                className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-md font-bold uppercase leading-[16.41px] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-[#390a57] hover:bg-purple-700"
              >
                EU QUERO
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 pb-20 bg-gradient-to-b  from-black to-[#390a57]">
        <div className="mx-auto flex justify-between w-full max-w-[78.5rem] flex-col gap-10 px-5 lg:flex-row-reverse lg:items-center">
          <div className="w-full">
            <Image
              src={
                '/pixlr-image-generator-5ffb7118-b485-45fc-9c55-0d82ec89f088.png'
              }
              width={500}
              height={500}
              alt="KuanYin"
            />
          </div>
          <div className="w-full max-w-[586px] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white lg:text-4xl">
                Descubra a Força da Mesa Radiônica e Psiônica Essencial KuanYin:
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle size={24} />
                <span className="max-w-[423px] font-medium text-gray-100 lg:text-lg">
                  Trate, limpe e ative as energias para cada área da vida:
                  saúde, finanças, amor, trabalho, prosperidade e muito mais;
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle size={24} />
                <span className="max-w-[423px] font-medium text-gray-100 lg:text-lg">
                  Trabalhe a ativação de Arcanjos e Arquétipo Ascensionadis
                  específicos para resolver situações, planos, metas, objetivos
                  e relações para você e seus clientes;
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle size={24} />
                <span className="max-w-[423px] font-medium text-gray-100 lg:text-lg">
                  Inove nos seus atendimentos se conectando com a potente
                  energia da Chama Violeta e da Deusa KuanYin.{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gradient-to-b from-[#390a57] to-black">
        <div className="mx-auto max-w-[78.5rem] flex flex-col px-5 lg:items-center">
          <div className="mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-white lg:text-4xl text-center">
                O que você aprende no curso da Mesa Radiônica e Psiônica
                Essencial KuanYin?
              </h2>

              <p className="text-center">
                Esse é um curso muito além de aprender a trabalhar com uma Mesa
                Radiônica, pois nele, você entenderá os fundamentos básicos de
                radiestesia, a força da mãe, Deusa e Mestra KuanYin que está
                disponível e presente para toda a Humanidade. E também como o
                seu mundo pode ter uma vivência ainda mais leve e pode ser para
                você ou para as suas clientes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    A verdadeira mente, definição e a história da Radiestesia e
                    Radiônica, desde os povos antigos até à atualidade
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    O porquê a radiestesia traz resultados eficazes quando
                    realizada de forma correta
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    O uso do pêndulo
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    A definição da Geometria Sagrada usada na MEK;
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Radiestesia e Radiônica na Mesa e os arcanjos e símbolos de
                    cura e transmutação;
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Como limpar, alinhar e elevar, harmonizando cada área da sua
                    vida;
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Como trabalhar com objetivos claros e bem definidos como
                    metas de manifestação;
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Aprender a fazer tratamentos individuais, coletivos (grupo),
                    locais e residências, empresas, pets e crianças e muito
                    mais.
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Aprender a atuação dela na elevação da Frequência
                    Vibracional, limpeza, harmonização e ativação dos campos da
                    saúde física, emocional, energia vital, amor próprio é amor
                    para relacionamentos, profissional e financeira.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 pb-20 bg-gradient-to-b from-black to-[#390a57]">
        <div className="mx-auto flex justify-between w-full max-w-[78.5rem] flex-col gap-10 px-5 lg:flex-row lg:items-center">
          <div className="w-full">
            <Image
              src={
                '/pixlr-image-generator-5ffb7118-b485-45fc-9c55-0d82ec89f088.png'
              }
              width={500}
              height={500}
              alt="KuanYin"
            />
          </div>
          <div className="w-full max-w-[586px] space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white lg:text-4xl">
                Sobre a sua professora
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-medium text-gray-100 my-2">
                Sou Suzy Keller, graduada em psicologia desde 2004, formada em
                medicina Tradicional Chinesa, Especialista em Terapias Corporais
                NeoReichiana e Psicossomática e hoje com mais de 30 formações
                holísticas como Reiki, Inumeras Mesas Radiônicas, Radiestesia,
                Thetahealing, e muitos outros.
              </p>
              <p className="font-medium text-gray-100 my-2">
                Hoje o meu trabalho é transformar terapeutas holísticas que
                desejam unir o seu servir com a prosperidade financeira, em
                empreender com a consciência do valor dos seus estudos e
                desenvolvimento, por meio de técnicas frequenciais inovadoras.
              </p>
              <p className="font-medium text-gray-100 my-2">
                Durante muitos anos fui a terapeuta que, mesmo sentindo meu
                potencial, estava estagnada no ganho financeiro e me sentia
                frustrada porque algo faltava. Me vi trabalhando mais de 13
                horas por dia e o dinheiro era insuficiente. Quando ganhava um
                pouco mais, algo acontecia e la se vão os imprevistos.
              </p>
              <p className="font-medium text-gray-100 my-2">
                E por falar em dinheiro, esse é um assunto que venho estudando
                há anos e sempre eremos mais coisas a descobrir e desenvolver. E
                hoje desenvolve técnicas e ferramentas para a expansão de
                consciência,, prosperidade física, emocional, mental e
                financeira.{' '}
              </p>
              <p className="font-medium text-gray-100 my-2">
                Estou aqui para te mostrar, em 5 encontros, a diferença que
                existe em viver uma guerra diária para ganhar dinheiro e fazer
                dinheiro com naturalidade, transbordando magnetismo e
                credibilidade, porque os resultados comprovam a eficácia do seu
                servir no mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 pb-20 bg-gradient-to-b to-black from-[#390a57]">
        <div className="flex items-center justify-center flex-col gap-7">
          <Image
            src={'/logo-suzy-new-3-branco-small.png'}
            width={450}
            height={96}
            alt="Logo"
          />
          <span className="text-4xl">
            12x De <strong className="text-6xl">R$ 200,00</strong>
          </span>
          <span className="text-3xl">ou R$ 2000,00 à vista</span>
          <a
            href="#offer"
            className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-sm font-bold uppercase leading-[16.41px] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-[#390a57] hover:bg-purple-600"
          >
            EU QUERO
          </a>
        </div>
      </section>

      <section className="w-full pt-20 pb-20 bg-black">
        <div className="mx-auto max-w-[1256px] px-5">
          <div className="mx-auto p-6 rounded flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-black">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-lg lg:text-2xl font-medium text-gray-100">
                  Ficou com alguma dúvida?
                </span>
                <small className="text-sm lg:text-lg text-gray-300">
                  Envie uma mensagem e converse com uma pessoal real.
                </small>
              </div>
            </div>
            <a
              className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-sm font-bold uppercase leading-[16.41px] transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-green-600 text-white hover:bg-green-500 hover:text-white"
              href="https://api.whatsapp.com/send?phone=5547992396940&amp;text=Oi!%20Quero%20garantir%20a%20oferta%20de%205%20anos!"
              // id="gtm-faq-button-whatsapp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
