import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="relative w-full pt-[190px] lg:pb-20">
        {/* <Image
            src={'/logo-suzy-new-3-branco.png'}
            width={120}
            height={96}
            alt="Logo"
          /> */}
        <div className="relative mx-auto z-10 flex w-full max-w-[78.5rem] flex-col items-center gap-6 px-5 lg:items-start lg:gap-8">
          <Image
            src={'/logo-suzy-new-3-branco-small.png'}
            width={450}
            height={96}
            alt="Logo"
          />
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
            <h1 className="max-w-[580px] text-3xl font-medium text-white lg:text-5xl/[57.6px]">
              Curso Mesa Radiônica Essencial KuanYin
            </h1>
            <p className="max-w-[580px] lg:text-xl">
              Aprenda inúmeras formas de tratar profundamente os processos de
              expansão de consciência, de seus clientes, em todas as áreas
              escolhidas.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
              <a
                href="#offer"
                className="group flex w-full items-center justify-center gap-2 rounded-[0.625rem] px-6 text-sm font-bold uppercase leading-[16.41px] text-white transition-colors disabled:cursor-not-allowed disabled:opacity-75 md:w-fit max-h-[3.25rem] py-[1.125rem] bg-red-900 hover:bg-red-600"
              >
                quero assinar agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
