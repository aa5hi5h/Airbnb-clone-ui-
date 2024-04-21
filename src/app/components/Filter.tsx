
interface FilterProp{
    title: string
    icon: React.ReactNode
}

const Filter : React.FC<FilterProp> = ({title, icon})  => {
    return (
        <div className="flex   group flex-col cursor-pointer items-center">
          <div className=" p-1 opacity-60 group-hover:opacity-100">{icon}</div>
          <h2 className="text-lg opacity-80 group-hover:opacity-100 pb-2">{title}</h2>
          <div className="w-full bg-neutral-400 h-0.5 opacity-0 group-hover:opacity-100 transition-all"></div>
        </div>
    )
}

export default Filter