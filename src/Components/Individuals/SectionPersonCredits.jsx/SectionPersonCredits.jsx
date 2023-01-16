import React from 'react'
import GridToPerson from '../GridToPerson/GridToPerson'
import GridNoIMG from '../GridToPerson/GridNoIMG'
import PerfilPerson from '../PerfilPerson/PerfilPerson'

export default function SectionPersonCredits({title, whitoutIMG, whitIMG}) {
  return (
    <>
        {whitIMG.length > 0 || whitoutIMG.length > 0 ?
            <>
                <h2 className='text-xl text-black'>{title}</h2>
                <GridToPerson>
                    {
                        whitIMG.map((data, index)=>(
                        <PerfilPerson
                            name={data.name}
                            img={data.profile_path}
                            id={data.credit_id}
                            key={index}
                        />
                        ))
                    }
                </GridToPerson>
                <GridNoIMG>
                    {
                        whitoutIMG.map((data, index)=>(
                        <PerfilPerson
                            name={data.name}
                            img={data.profile_path}
                            id={data.credit_id}
                            key={index}
                        />
                        ))
                    }
                </GridNoIMG>
            </>
            :""
        }
    </>
  )
}
