import React, { useState, useEffect } from 'react'

export const Photofeed = () => {

    const [pictures, more] = useInfScroll()
    
    return (
        <div className="App">
        <div>
            {pictures.map((value, index) => (
            // <p key={index}>{value.title}</p>
            <img className="Photofeed-img" key={index} src={value.main_attachment.small} alt={value.title}/>
            ))}
        </div>
        <button style={{ marginBottom: '100px' }} onClick={more}>
            more images
        </button>
        </div>
    )
    }
    
    const useInfScroll = () => {
    // estado para almacenar las imágenes
    const [pictures, setPictures] = useState([])
    // estado para contar el número de bloques que pido, lo necesito para que picsum no me devuelva siempre las mismas imágenes
    const [pages, setPages] = useState(1)
    
    // función para pedir más imágenes
    const more = async () => {
        const more_pictures = await fetch_pictures(pages + 1)
        setPages(prev => prev + 1)
        setPictures(prev => [...prev, ...more_pictures])
    }
    
    // función para pedir (esta vez literalmente) las imagenes a picsum
    const fetch_pictures = async page => (await fetch(`http://localhost:3100/images/?page=1`)).json()
    
    // useEffect para ejecutar al principio la primera "pedida" de imágenes
    useEffect(() => {
        ;(async () => {
        const feed = await fetch_pictures(0)
        setPictures(feed)
        })()
    }, [])
    
    return [pictures, more]
    }
