
function Header({title, subtitle}:{title:string, subtitle:string}) {
  return (
    <header className="flex flex-col gap-1">
          <h1 className="text-gray-900 font-extrabold text-3xl tracking-tight">
            {title}
          </h1>
          <p className="text-gray-500 font-medium">
            {subtitle}
          </p>
        </header>
  )
}

export default Header