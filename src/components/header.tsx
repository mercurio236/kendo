const IMG_GIF =
  'https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif'
export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={IMG_GIF} className="w-[300px]" alt="" />
      </div>
    </div>
  )
}
