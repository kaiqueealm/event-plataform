import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event(){ 
  const { slug } = useParams<{ slug: string }>()

  return(
   <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex flex-1">
      { slug 
        ? <Video lessonSlug={slug}/> 
        : <div className="flex-1"/>
      }
      <Sidebar/>
    </main>
   </div>
  )
}

//<div className="flex flex-col"> para que fique um abaixo do outro

// <main className="flex flex-1"> oculpe o maximo de espaço possivel

// <div className="flex flex-col min-h-screen"> coloca umvh de 100 %