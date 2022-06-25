import { Logo } from "./Logo";

export function Header(){
  return(
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600"> 
      <Logo/>
    </header>
  )
}



// w significa widhif = full significa 100 porcento

//py pading no eixo y  1 e e igual a 4 px