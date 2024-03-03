import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@progress/kendo-react-inputs'
import { Button } from '@progress/kendo-react-buttons'
import { Loader } from '@progress/kendo-react-indicators'
import { api } from '../../lib/axios'
import { env } from '../../env'
import { useEffect, useState } from 'react'
import { Gifs } from '../../dto/gifsDTO'
import { GridGifs } from './components/GridGifs'

const gifsFilterSchema = z.object({
  search: z.string().default('').optional(),
})

type FilterSchema = z.infer<typeof gifsFilterSchema>

export function Home() {
  const [getGifs, setGetGifs] = useState<Gifs[]>([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<FilterSchema>({
    resolver: zodResolver(gifsFilterSchema),
  })

  const EMPTY_VALUE = watch('search')

  async function handleSubmitForm(data?: FilterSchema) {
    try {
      if (data?.search) {
        const response = await api.get(
          `gifs/search?api_key=${env.VITE_APP_KEY}&q=${data?.search}&limit=&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        setGetGifs(response.data.data)
      } else {
        const response = await api.get(
          `gifs/trending?api_key=${env.VITE_APP_KEY}&limit=&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        )
        setGetGifs(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleSubmitForm()
  }, [EMPTY_VALUE])

  return (
    <div className="p-10">
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex flex-row gap-3">
            <Input placeholder='Buscar por gifs' {...register('search')} />
            <Button disabled={isSubmitting} themeColor={'base'} type="submit">
              {isSubmitting ? <Loader size="small" /> : 'Buscar'}
            </Button>
          </div>
        </form>
        <GridGifs data={getGifs} />
      </div>
    </div>
  )
}
