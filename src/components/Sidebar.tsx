import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`

query  {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}

`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar(){
  const { data } = useQuery <GetLessonsQueryResponse>(GET_LESSONS_QUERY)



  return(
    <aside className="w-[400px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson =>{
          return(
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
        
          )
        })}
      </div>
    </aside>
  )
}

// colocar conchets para saber o valor exato
// p = e padding 

// border l que e so a esquerda

// block"> ter um widtfh de 100%

//"flex flex-col uma lesson abaixo da outra 

//gap-8"> espaçamento entre as aulas