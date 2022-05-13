import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Card from './card';	


export const Photofeed = (props) => {

    const [blocks, setBlocks] = useState(1)

    const more = async () => {
        const more_images = await fetch_images(blocks + 1)
        setBlocks(prev => prev + 1)
        props.setPictures(prev => [...prev, ...more_images])
      }

    const fetch_images = async page => (await fetch(`http://localhost:3100/images?page=${page}&limit=10`)).json()

    useEffect(() => {
        ;(async () => {
          const pictures = await fetch_images(0)
          props.setResult(pictures)
        })()
      })

    return (
        <div className="Photofeed-base">
            <div className='test'>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={more}
                    hasMore={true || false}
                    loader={""}
                    useWindow={false}
                >
                    <ul className="Photofeed-container">
                    {props.result.map((value, index) => {
                                return (
                                   <li className='card'>
                                       <Card value = {value} />
                                   </li> 
                                );})} 
                            </ul>
                </InfiniteScroll>
            </div>
        </div>       
    )
}