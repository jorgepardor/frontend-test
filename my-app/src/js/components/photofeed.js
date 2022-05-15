import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Card from './card';	

export const Photofeed = (props) => {

    const [loading, isLoading] = useState(false)
    

    //Funcion que se encarga de hacer la peticion a la API para obtener las imagenes.

    const more = async (page) => {

      if (!loading) {

        isLoading(true)
        const more_images = await fetch_images(page)
        props.setResult(prev => [...prev, ...more_images])
        isLoading(false)

      }
       
    }

    //Funcion que se encarga de hacer la primera peticion a la API.

    const fetch_images = async page => (await fetch(`http://localhost:3100/images?page=${page}`)).json()  

    const populates = () => {
      const pictures = async () => {
        isLoading(true)
        const result = await fetch_images(0) 
        isLoading(false)
        props.setResult(result) 
      }
      if (!loading){
        pictures()
      }
    }

    useEffect(() => {
      populates()
      },[]) 

    return (
        <div className="photofeed"> 
                <InfiniteScroll
                    pageStart={1}
                    loadMore={more}
                    hasMore={true || false}
                    loader={""}
                    initialLoad={false}
                    useWindow={false}
                >
                    <ul className="photofeed__container">
                    {props.result.map((content, index) => {
                                return (
                                  // Componente que se encarga de renderizar cada imagen
                                  <li key={index} className='photofeed__container__element'> 
                                      <Card content = {content} /> 
                                  </li> 
                                );})} 
                            </ul>
                </InfiniteScroll>
        </div>       
    )
}