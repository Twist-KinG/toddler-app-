import React from 'react'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png";

const transportations = [ 
    {id:"1", title:"Car", imgSrc: logo },
    {id:"2", title:"Bike", imgSrc: logo },
];

const devices = [ 
    {id:"1", title:"Smartphone", imgSrc: logo },
    {id:"2", title:"Laptop", imgSrc: logo },
    {id:"3", title:"Smartwatch", imgSrc: logo },
];

const transportation = () => {
    return (
        <div className="bg-white min-h-screen max-w-md flex flex-col items-center pt-8 px-6 font-indie relative">
            <Link to="/picturelearning">
                <button className="absolute top-4 left-4 p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition">
                    <MdChevronLeft className="text-white text-2xl" />
                </button>
            </Link>

            {/* Logo */}
            <img
                src={logo} // Using the imported logo image
                alt="Toddler Fun Learning logo with two kids and stars"
                className="w-30 h-30 mb-1"
                width={60}
                height={60}
            />
            {/* Title */}
            <h1 className="text-purple-600 text-5xl leading-tight mb-0">Transportation</h1>
            <p className="text-purple-600 text-3xl mb-6">and Devices</p>
            {/*Fruit Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600'>Transportation</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {transportations.map((transportation) => (
                    <div
                        key={transportation.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${transportation.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={transportation.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{transportation.title}</p>
                    </div>
                ))}
            </section>
            {/*Vegetable Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mt-5'>Devices</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {devices.map((device) => (
                    <div
                        key={device.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${device.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={device.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{device.title}</p>
                    </div>
                ))}
            </section>
        </div>

    )
}

export default transportation;