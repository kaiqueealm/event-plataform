import { DiscordLogo, Lightning } from "phosphor-react";

export function Video(){
  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh]  aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">

      <div className="flex items-start gap-16">

      <div className="flex-1">
        <h1 className="text-2xl font-bold">
          Aula - 01 Abertura do Ignite Lab
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <img  
          className="h-16 w-16 rounded-full border-2 border-blue-500"
          src="https://github.com/kaiqueealm.png" 
          alt="" />
        </div>

        <div className="leading-relaxed">
          <strong className="font-bold text-2xl block">
            Kaique Almeida
          </strong>

          <span className="text-gray-200 text-sm block">
            <a href="https://github.com/kaiqueealm" target="_blank">github.com/kaiqueealm</a>
          </span>

        </div>

      </div>

      <div className="flex flex-col gap-4">
        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-1 justify-center hover:bg-green-700 transition-colors">
          <DiscordLogo size={24}/>
          Comunidade do discord
        </a>

        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-1 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
          < Lightning size={24}/>
          Acesse o desafio
        </a>
      </div>

      </div>

      <div>

      </div>

      

      </div>

    </div>
  )
}

// flex 1 vai esticar ou diminui dependendo se eu preciso de mais tamanho ou menos tamanho

//"h-full"> vai tenta oculpar o maximo de altura

//hover:bg-green-700"> pra escureser o botao

//transition-colors"> colocar uma animação 