import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@/icons/Icons'

interface SearchFormProps {
    defaultValue: string
    type: string
}

const FormSearch: React.FC<SearchFormProps> = ({ defaultValue, type }) => {

    const navigate = useNavigate();
    const [query, setQuery] = useState(defaultValue);

    async function searchAction(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            navigate(`/search/${type ? type : 'movie'}?q=${encodeURIComponent(trimmedQuery)}`);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <form
            className='relative w-full md:w-48 lg:w-72'
            onSubmit={searchAction}
        >
            <input
                // defaultValue={defaultValue}
                name='query'
                type='text'
                className='w-full px-4 py-3 text-xs rounded-lg bg-[#111] text-white text-opacity-80 pl-10 placeholder:text-xs outline-none placeholder:text-[#999] placeholder:tracking-wide focus:bg-[#1B1A20]'
                placeholder={'¿Qué estás buscando?'}
                aria-label='Buscar'

                value={query}
                onChange={handleInputChange}
            />
            <button
                type='submit'
                className='absolute top-[50%] transform -translate-y-1/2 left-3'
                aria-label='Enviar búsqueda'
            >
                <Search clasName='w-4 h-4' />
            </button>
        </form>
    )
}

export default FormSearch
