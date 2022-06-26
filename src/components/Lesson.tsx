import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEE' • 'd' de 'MMM' • 'k'h'mm",{
    locale: ptBR
  })

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300 ">
      {availableDateFormatted} 
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-1">
            <CheckCircle size={20}/>
            Conteúdo  liberado
          </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-1">
            <Lock size={20}/>
            Em breve
          </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-0.5 text-white border border-green-300 font-bold">
           {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <span>
          <strong className="text-gray-200 mt-4 block">
            {props.title}
          </strong>
        </span>
      </div>
    </Link>
  )
}

//justify-between"> conteu liberado totalmenter para esquerda e o ao vivo para direita

// <Link to="#" utiliza uma cara so que do route

