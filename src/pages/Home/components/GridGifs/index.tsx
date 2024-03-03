import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout'
import { Gifs } from '../../../../dto/gifsDTO'

interface GifsProps {
  data: Gifs[]
}

export function GridGifs({ data }: GifsProps) {
  return (
    <GridLayout
      className="grid grid-cols-3 max-sm:grid-cols-2"
      gap={{ rows: 5, cols: 5 }}
    >
      {data &&
        data.map((gif, i) => {
          const row = Math.floor(i / 3) + 1
          return (
            <GridLayoutItem
              className="flex items-center justify-center mt-4 "
              row={row}
              col={(i % 3) + 1}
              key={gif.id}
            >
              <img
                className="object-cover"
                src={gif.images.fixed_height.url}
                alt=""
              />
            </GridLayoutItem>
          )
        })}
    </GridLayout>
  )
}
