import React from 'react'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png";

const wildanimals = [ 
    {id:"1", title:"Lion", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
];

const domesticanimals = [ 
    {id:"1", title:"Goat", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
];

const flowers = [ 
    {id:"1", title:"Mustard", imgSrc: logo },
    {id:"2", title:"Weed", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
];

const plant = [ 
    {id:"1", title:"Mustard", imgSrc: logo },
    {id:"2", title:"Weed", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
];

const plants = () => {
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
            <h1 className="text-purple-600 text-5xl leading-tight mb-0">Animals</h1>
            <p className="text-purple-600 text-3xl mb-6">and Plants</p>
            {/*Fruit Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600'>Wild Animals</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {wildanimals.map((animal) => (
                    <div
                        key={animal.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${animal.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={animal.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{animal.title}</p>
                    </div>
                ))}
            </section>
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mt-10'>Domestic Animals</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {domesticanimals.map((animal) => (
                    <div
                        key={animal.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${animal.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={animal.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{animal.title}</p>
                    </div>
                ))}
            </section>
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mt-5'>Flowers</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {flowers.map((plant) => (
                    <div
                        key={plant.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${plant.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={plant.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{plant.title}</p>
                    </div>
                ))}
            </section>
            {/*Vegetable Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mt-5'>Plants</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {plant.map((plant) => (
                    <div
                        key={plant.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${plant.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={plant.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{plant.title}</p>
                    </div>
                ))}
            </section>
        </div>

    )
}

export default plants;