import Image from 'next/image'
import { Ticket, PiggyBank, Package, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="relative w-full pt-20 pb-20 bg-gradient-to-b from-[#390a57] to-black">
        <Image
          src={'/hero.svg'}
          width={3840}
          height={1132}
          alt="Logo"
          className="object-cover object-center lg:flex"
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
        />
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
                href="https://hotm.art/ccnrn70"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-md font-bold uppercase leading-[16.41px] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-[#390a57] hover:bg-purple-700"
              >
                Eu quero a Minha MRK
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
                    A forma correta de utilizar o pendulo para trazer as
                    respostas necesáias
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    A definição da Geometria Sagrada usada na MEK
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Radiestesia e Radiônica na Mesa e os arcanjos e símbolos de
                    cura e transmutação
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Como limpar, alinhar e elevar, harmonizando cada área da sua
                    vida
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Como trabalhar com objetivos claros e bem definidos como
                    metas de manifestação
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Aprender a fazer tratamentos individuais, coletivos (grupo),
                    locais e residências, empresas, pets, crianças e muito mais.
                  </span>
                </div>
              </div>

              {/* <div className="flex flex-col lg:flex-row lg:justify-around">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} />
                  <span className="max-w-[423px] w-full font-medium text-gray-100 lg:text-lg">
                    Aprender a atuação dela na elevação da Frequência
                    Vibracional, limpeza, harmonização e ativação dos campos da
                    saúde física, emocional, energia vital, amor próprio é amor
                    para relacionamentos, profissional e financeira.
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-20 pb-20 bg-gradient-to-b from-black to-[#390a57]">
        <div className="mx-auto flex justify-between w-full max-w-[78.5rem] flex-col gap-10 px-5 lg:flex-row lg:items-center">
          <div className="w-full">
            <Image src={'/teacher.webp'} width={500} height={500} alt="Suzy" />
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
                financeira.
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
        <div className="mx-auto max-w-[78.5rem] flex flex-col px-5 items-center lg:items-center">
          <div className="mx-auto space-y-10">
            <div className="space-y-4">
              <Image
                src={'/logo-suzy-new-3-branco-small.png'}
                width={450}
                height={96}
                alt="Logo"
                className="mx-auto"
              />

              <div className="space-y-4">
                <h2 className="text-xl font-medium text-white lg:text-3xl text-center">
                  O que eu recebo ao adquirir o curso?
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0 gap-6">
                  <div className="flex items-center gap-4 my-2">
                    <Image
                      src={'/table.webp'}
                      alt="Table"
                      height={250}
                      width={250}
                      className="mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col gap-4 my-2">
                    <span className="max-w-[325px] w-full font-bold text-gray-100 lg:text-lg text-center lg:text-left">
                      Mesa Radiônica Essencial Kuanyin
                    </span>
                    <span className="max-w-[325px] w-full font-medium text-gray-100 lg:text-lg text-center lg:text-left">
                      No valor de R$ 190,00
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0 gap-6">
                  <div className="flex items-center my-2">
                    <Image
                      src={'/pendulo.webp'}
                      alt="Pendulo"
                      height={250}
                      width={250}
                      className="mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col gap-4 my-2">
                    <span className="max-w-[325px] w-full font-bold text-gray-100 lg:text-lg text-center lg:text-left">
                      Kit para trabalhar e alinhar a mesa
                    </span>
                    <span className="max-w-[325px] w-full font-medium text-gray-100 lg:text-lg text-center lg:text-left">
                      No valor de R$ 90,00
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0 gap-6">
                  <div className="flex items-center my-2">
                    <Image
                      src={'/box.webp'}
                      alt="Box"
                      height={250}
                      width={250}
                      className="mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col gap-4 my-2">
                    <span className="max-w-[325px] w-full font-bold text-gray-100 lg:text-lg text-center lg:text-left">
                      Caixa de madeira maravilhosa, para você organizar seu
                      material e levar junto com você{' '}
                    </span>
                    <span className="max-w-[325px] w-full font-medium text-gray-100 lg:text-lg text-center lg:text-left">
                      No valor de R$ 150,00
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-around space-y-6 lg:space-y-0 gap-6">
                  <div className="flex items-center my-2">
                    <Image
                      src={'/incenso.webp'}
                      alt="Incenso"
                      height={250}
                      width={250}
                      className="mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col gap-4 my-2">
                    <span className="max-w-[325px] w-full font-bold text-gray-100 lg:text-lg text-center lg:text-left">
                      Caixa de incenso Kuanyin para purificação do ambiente
                    </span>
                    <span className="max-w-[325px] w-full font-medium text-gray-100 lg:text-lg text-center lg:text-left">
                      No valor de R$ 22,00
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-around border-solid border-2	border-white p-6">
                  <div className="flex items-center justify-center gap-4">
                    <Package size={48} />
                    <span className="max-w-[423px] w-full font-bold uppercase text-gray-100 lg:text-2xl">
                      Frete gratuito para o Brasil
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-fit overflow-hidden border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border rounded-full">
                      <div className="flex max-h-8 w-fit items-center bg-black/50 p-2 lg:h-9 lg:px-4 rounded-full">
                        <span className="text-xs lg:text-sm font-mono font-medium">
                          <div className="flex items-center gap-2 text-green-400">
                            <Ticket size={20} />
                            <span>30% OFF</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                      1 ano de acesso
                    </span>
                  </div>
                  <span className="text-2xl lg:text-3xl">
                    12x De{' '}
                    <strong className="text-3xl lg:text-5xl">R$ 139,72</strong>
                  </span>
                  <p>
                    De <span className="line-through">R$ 2.000</span> por apenas
                    R$ 1400 à vista
                  </p>{' '}
                  <span className="flex items-center gap-2 text-xs font-bold uppercase text-green-400">
                    <PiggyBank size={24} />
                    economia de R$ 600
                  </span>
                  <a
                    href="https://hotm.art/ccnrn70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-md font-bold uppercase leading-[16.41px] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-[#390a57] hover:bg-purple-700"
                  >
                    Eu quero a Minha MRK
                  </a>
                </div>
              </div>
            </div>
          </div>
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
              href="https://api.whatsapp.com/send?phone=5516991825671&amp;text=Oi!%20Preciso%20de%20ajuda!"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-black pb-2">
        <div className="flex items-start justify-between mx-auto max-w-[1256px] px-5">
          <span className="text-gray-600 text-sm">
            Feito com ❤️ por{' '}
            <a
              href="https://www.linkedin.com/in/joao-pedro-beck-land/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Beck Land
            </a>
          </span>

          <span className="text-gray-600 text-sm">2024</span>
        </div>
      </section>
    </main>
  )
}
