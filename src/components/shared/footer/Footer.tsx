import RevisaNuestroCatalogo from '@/components/home/RevisaNuestroCatalogo'
import {
    GitHub,
    Instagram,
    Linkedin,
    Portafolio,
} from '@/components/icons/Icons'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <div className='bg-black'>
            <RevisaNuestroCatalogo />
            <footer className='scrollMove lg:mt-20 w-full relative bg-footerGradiant pt-8 md:pt-20'>
                <div className='max-w-6xl mx-auto mb-8 '>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>
                                Navegación
                            </h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-4'>
                                <li>
                                    <Link
                                        to={'/search/movie'}
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explora lo más popular
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={'/search/tv'}
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explorar series populares
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={'/search/movie?genre=27'}
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explorar géneros
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href='/search/person'
                                        rel='noopener noreferrer'
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explorar personas populares
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>
                                Contactame
                            </h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-2'>
                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href='https://github.com/DylanCerv'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <GitHub />
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href='https://dylan-cerv.web.app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Portafolio />
                                        </span>
                                        <span>Portafolio</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href='https://www.linkedin.com/in/dylan-espana/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Linkedin />
                                        </span>
                                        <span>Linkedin</span>
                                    </a>
                                </li>

                                {/* <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href=''
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Instagram />
                                        </span>
                                        <span>Instagram</span>
                                    </a>
                                </li> */}

                                {/* <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href=''
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Instagram />
                                        </span>
                                        <span>TikTok</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12 hidden sm:block'>
                            <h4 className='text-sm mb-4 uppercase'>Flix</h4>
                            <p className='text-txtGray1 text-xs leading-7'>
                                Ofrece entretenimiento
                                <br />
                                a través de la API
                                <br />
                                The Movie Database (TMDb).
                                <br />
                                Nuestro enfoque es
                                <br />
                                para fines
                                <br />
                                educativos y demostrar
                                <br />
                                las capacidades de la API.
                            </p>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12 hidden lg:block'>
                            <h4 className='text-sm mb-4 uppercase'>Cuenta</h4>
                            <p className='text-txtGray1 text-xs leading-7'>
                                Proporcionamos servicios
                                <br />
                                de página web
                                <br />
                                y enlazamos a terceros.
                                <br />
                                Si tienes inquietudes sobre
                                <br />
                                derechos de autor contáctanos
                                <br />
                                <span className='select-text'>
                                    erickjosepsalazar2@gmail.com
                                </span>
                                <br />
                                ¡Disfruta de la experiencia Flix!
                            </p>
                        </div>
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
                    <div className='text-txtGray1 py-8 border-t-[1px] border-t-gray-700 flex justify-between'>
                        <h5 className='text-xs'>
                            Hecho con 💙
                            <span className='text-xs'> © {currentYear}</span>
                        </h5>
                        <h6 className='text-xs'>DylanCerv</h6>
                    </div>
                </div>
            </footer>
        </div>
    )
}
