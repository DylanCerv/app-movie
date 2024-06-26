import { useState } from 'react'
import { OrganizarPorItem } from '../../types/types'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SelectDesign({
    options,
    paramName,
    title,
}: {
    options: OrganizarPorItem[]
    paramName: string
    title: string
}) {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeSelect, setActiveSelect] = useState(false)

    const handleActiveSelect = () => {
        setActiveSelect(!activeSelect)
    }

    const handleSelectValue = (id: string | number) => {
        const currentSearch = new URLSearchParams(location.search);
        currentSearch.set(paramName, String(id));

        if (location.pathname.includes('search')) {
            return navigate(`${location.pathname}?${paramName}=${id}`)
        }
        navigate(`/search/movie?${paramName}=${id}`)
    }

    return (
        <div className='relative text-[#999]'>
            <button
                onClick={handleActiveSelect}
                className='w-full rounded-lg text-xs lg:text-sm hover:text-white'
                aria-label='Desplegar opciones'
            >
                {title}
            </button>

            {activeSelect && (
                <ul
                    onMouseLeave={() => setActiveSelect(false)}
                    className='bg-[#111] rounded-lg mt-5 absolute z-50 w-52 text-xs font-semibold'
                >
                    {options.map(({ id, name }) => (
                        <li
                            key={id}
                            onClick={() => handleSelectValue(id)}
                            className='px-4 py-3 flex cursor-pointer  rounded-lg items-center hover:bg-zinc-900 transition-colors'
                        >
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
