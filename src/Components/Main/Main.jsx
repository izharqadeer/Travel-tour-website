import React, {useEffect} from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL RELAX',
        fees: '$850',
        description: 'France`s magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. The place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Glacier National Park',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'Snow-capped peaks, alpine meadows and azure lakes are just a few reasons why Glacier National Park is one of America`s most striking parks. One of the best destination for summers as well as winters.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Rome',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$780',
        description: 'When you visit Italy`s capital city, prepare to cross a few must-see landmarks including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can also see some of Italy`s greatest treasures.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Swiss Alps',
        location: 'Switzerland',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing in locales such as the exclusive St. Moritz and the picturesque Zermatt,'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Maui',
        location: 'Hawaii',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The island of Maui is the second largest of the islands of the state of Hawaii, and famous for enjoying a bird`s-eye view of Maui`s lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'London',
        location: 'England',
        grade: 'CULTURAL RELAX',
        fees: '$950',
        description: 'London city, capital of the United Kingdom. It is among the oldest of the world`s great cities, its history spanning nearly two millennia—and one of the most cosmopolitan. It is one of the greatest city to spend holidays.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Maldives',
        location: 'South Asia',
        grade: 'CULTURAL RELAX',
        fees: '$740',
        description: ' The Maldives is an Indian Ocean tropical paradise which is made up of more than 1,000 islands, thatched-roof overwater bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Tokyo',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$860',
        description: 'Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover. Foodies won`t be let down by Tokyo`s fresh sushi and hearty ramen, also famous for manga series and anime.'
    },

]

const Main = () => {
    // Lets create a react hook to add a scroll animation.....
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default Main
