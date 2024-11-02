import { useQueryBook } from "@/hooks/use-query-book"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export function Book() {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useQueryBook({ id: params.id ?? '' })
  
  useEffect(() => {
    if (!data && !isLoading) {
      return navigate('/dashboard')
    }

  }, [data, isLoading, navigate])

  if (isLoading) return 'Carregando...'
  
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-5xl font-bold">{data?.name}</h1>

      <img className="aspect-square max-w-96" src={data?.cover} alt="image" />

      <p>Ipsum ipsum excepteur aliquip sint. Fugiat id consectetur in enim deserunt commodo incididunt eiusmod. Non magna labore veniam eu amet. In incididunt do eu labore nostrud sit non irure. Ut aute excepteur consequat reprehenderit minim et officia velit duis laborum. Minim cillum esse sint cupidatat esse tempor cillum commodo elit quis ut. Ex ea laboris esse magna quis ex amet exercitation culpa qui laboris id pariatur.</p>

      <p>Quis esse aute laborum nulla quis cupidatat non irure. Ullamco elit est aute enim Lorem excepteur tempor mollit esse mollit mollit mollit voluptate. Est quis incididunt adipisicing quis ipsum occaecat elit pariatur anim id. Ipsum non anim do pariatur sint. Esse adipisicing duis cupidatat exercitation ad adipisicing. Aute est ex enim amet sunt velit deserunt non sit Lorem.</p>

      <p>Id nostrud ex proident id velit minim laborum quis incididunt do sint id veniam mollit. Duis eiusmod amet consequat amet irure dolore officia nulla eiusmod occaecat excepteur excepteur anim consectetur. Veniam ex consequat elit cillum nisi adipisicing elit sunt quis id aliquip est. Mollit sint ea irure nulla nisi incididunt. Occaecat nisi qui sint ea aliqua dolor est ipsum do aute nisi deserunt. Lorem voluptate eiusmod minim exercitation irure labore consequat labore et enim nisi id eu. Elit reprehenderit deserunt excepteur exercitation dolor ex id et nostrud cupidatat anim.</p>

      <p>Adipisicing Lorem labore exercitation aliqua culpa qui. Dolor sit et ea cillum excepteur duis minim fugiat. Ipsum deserunt fugiat magna adipisicing.</p>

      <p> Labore ea ullamco laboris laborum sit aute aliqua eu. Culpa officia enim quis non nostrud do id dolor mollit. Magna anim dolore voluptate cupidatat voluptate quis dolore Lorem est. Adipisicing ipsum minim occaecat adipisicing pariatur sint.</p>

    </div>
  )

}