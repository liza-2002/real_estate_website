import React from 'react'
import { useState } from 'react'
import './Maincard.css'
import img1 from '../assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg'
import img2 from '../assets/r-architecture-2gDwlIim3Uw-unsplash.jpg'
import img3 from '../assets/rivage-CwTfKH5edSk-unsplash.jpg'
import img4 from '../assets/sean-pollock-PhYq704ffdA-unsplash.jpg'
import img5 from '../assets/todd-kent-178j8tJrNlc-unsplash.jpg'
import img6 from '../assets/vu-anh-TiVPTYCG_3E-unsplash.jpg'
import imge1 from '../assets/Screenshot 2024-04-25 201522.png'
import imge2 from '../assets/Screenshot 2024-04-25 201528.png'
import imge3 from '../assets/Screenshot 2024-04-25 201539.png'

const Maincard = () => {
    const [cards] = useState([
        {
            image: img1,
            id: '128873  1÷2÷3 bdrm apts center',
            location: 'Bhubaneswar',
            price: '600000',
        },
        {
            image: img2,
            id: '398379  Two adja­cent plots for sale',
            location: 'Cuttack',
            price: '700000',
        }, 
        {
            image: img3,
            id: '763647  5 bdrm vil­la for sale',
            location: 'Delhi',
            price: '1300000',


        },
        {
            image: img4,
            id: '878738  Exclu­sive villa/​Pascal Area',
            location: 'Chennai',
            price: '1000000',


        },
        {
            image: img5,
            id: '873772  Vil­la for sale in Cyprus',
            location: 'Ranchi',
            price: '700000',


        },
        {
            image: img6,
            id: '665676 bdrm apart­ents for sale',
            location: 'Bengaluru',
            price: '850000',
        }

    ]);

    return (
        <>
            <div className='container'>
                <div className='bar'>
                    <h3>We Reccomend</h3>
                </div>
                <div className='cards'>
                    {cards.map((card, i) => (
                        <div key={i} className='card'>
                            <div className='card-image'>
                                <img src={card.image} />
                            </div>
                            <div>
                                <h2>Id:{card.id}</h2>
                                <h3>Location: <i className="fas fa-map-marker-alt"></i> {card.location}</h3>
                                <h3>Price:{card.price}</h3>
                                <div className='heart-icon'>
                                    <i className="far fa-heart"></i>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                <button className='btn'>View all</button>
            </div>
            <div className="crd-container">
                <div className="crd">
                    <img src={imge1} alt="Placeholder" />
                    <h3>Browse homes</h3>
                    <p>Find your place with an immersive the most listings, including things you won’t find anywhere else</p>
                    <button>Browse homes</button>
                </div>
                <div className="crd">
                    <img src={imge2} alt="Placeholder" />
                    <h3>Rent a home</h3>
                    <p>We’re creating a seamless online experience  from shopping on the largest rental network</p>
                    <button>Find rentals</button>
                </div>
                <div className="crd">
                    <img src={imge3} alt="Placeholder" />
                    <h3>Sell a home</h3>
                    <p>No matter what path you take to sell your home, we can help you navigate a success</p>
                    <button>see your options</button>
                </div>
            </div>

        </>
    )
}

export default Maincard