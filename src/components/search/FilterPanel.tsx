import { categoriaPanel, genresPanel } from '@/lib/data'
import SelectDesign from './SelectDesign'
import { useLocation } from 'react-router-dom'

export default function FilterPanel() {
    const location  = useLocation()
    const pathname = location.pathname;
    const type = pathname.split('/').at(-1)

    const optionsGenre =
        type === 'tv' ? genresPanel.tv.generos : genresPanel.movie.generos
    const optionsCategoria =
        type === 'tv'
            ? categoriaPanel.tv.organizarPor
            : categoriaPanel.movie.organizarPor

    return (
        <div className='flex gap-4 lg:gap-6 text-black'>
            <SelectDesign
                options={optionsCategoria}
                paramName='filter'
                title='Explora'
            />
            <SelectDesign
                options={optionsGenre}
                paramName='genre'
                title='Géneros'
            />
        </div>
    )
}
