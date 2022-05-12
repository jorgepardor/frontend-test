import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller';


export const Photofeed = () => {

    const [pictures, setPictures] = useState([])
    const [blocks, setBlocks] = useState(1)
    // const [like, setLike] = useState();


    const more = async () => {
        const more_images = await fetch_images(blocks + 1)
        setBlocks(prev => prev + 1)
        setPictures(prev => [...prev, ...more_images])
      }

    const fetch_images = async page => (await fetch(`http://localhost:3100/images?page=${page}&limit=10`)).json()

    useEffect(() => {
        ;(async () => {
          const pictures = await fetch_images(0)
          setPictures(pictures)
        })()
      }, [])

    // const liked = () => {
        
    //         fetch("http://localhost:3100/images/:id/likes", {
    //           method: "POST",
    //           headers: {},
    //         })
    //           .then((resp) => resp.json())
    //           .then((data) => setSessionsTypeList(data));
          
    // }

    const [display, setDisplay] = useState("notdisplayed");
    
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };
    
    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };


    
    return (
        <div className="Photofeed-base">
            <div className='test'>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={more}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                ><ul className="Photofeed-container">
                    {pictures.map((value, index) => {
                                return (
                                    
                                    <li className='card'
                                        onMouseEnter={e => showButton(e)}
                                        onMouseLeave={e => hideButton(e)}>
                                        
                                        <div key={index}>
                                            <img key={index} src={value.main_attachment.small} alt={value.title}/>
                                            <div className={display}>

                                                <div className="topright">

                                                    <div className="interactions">
                                                    <button onClick={() => {
                                                        fetch("http://localhost:3100/images/:id/likes", {
                                                        method: "POST",
                                                        body: [],
                                                        })

                                                    }}>

                                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"/></svg>
                                                    
                                                    </button>
                                            
                                                    <p className='interactions'>{value.likes_count}</p>

                                                    </div>

                                                    <div className="interactions">

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"/></svg>
                                        
                                                    <p className='interactions'>{value.likes_count}</p>

                                                    </div>
                                                  
                                            
                                               

                                                </div>
                                    
                                            </div>

                                            <div className="topleft">
                                                <p className='picture_price'>{value.price}<span className='currency'>€</span></p>
                                            </div>

                                            <div className='container'><p className='picture_title'>{value.title}</p>
                                                <p className='picture_author'>by <span className='author'>{value.author}</span></p>
                                            </div>

                                        </div>
                                    </li>
                                
                                );})} 
                            </ul>
                </InfiniteScroll>
            </div>
        </div>       
    )
}