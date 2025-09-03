import React from 'react'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png";

const wildanimals = [ 
    {id:"1", title:"Lion", imgSrc: logo },
    {id:"2", title:"Tiger", imgSrc: logo },
    {id:"2", title:"Leopard", imgSrc: logo },
    {id:"2", title:"Jackal", imgSrc: logo },
    {id:"2", title:"Fox", imgSrc: logo },
    {id:"2", title:"Jaguar", imgSrc: logo },
    {id:"2", title:"Bear", imgSrc: logo },
    {id:"2", title:"Honey Badger", imgSrc: logo },
    {id:"2", title:"Deer", imgSrc: logo },
    {id:"2", title:"Girrafe", imgSrc: logo },
    {id:"2", title:"Zebra", imgSrc: logo },
    {id:"2", title:"Rhinoceros", imgSrc: logo },
    {id:"2", title:"Elephant", imgSrc: logo },
    {id:"2", title:"Porcupine", imgSrc: logo },
    {id:"2", title:"Snake", imgSrc: logo },
    {id:"2", title:"Kangaroo", imgSrc: logo },
    {id:"2", title:"Hippopotamus", imgSrc: logo },
    {id:"2", title:"Crocodile", imgSrc: logo },
    {id:"2", title:"Monkey", imgSrc: logo },
    {id:"2", title:"Gorilla", imgSrc: logo },
];

const domesticanimals = [ 
    {id:"1", title:"Goat", imgSrc: logo },
    {id:"2", title:"Dog", imgSrc: logo },
    {id:"2", title:"Cow", imgSrc: logo },
    {id:"2", title:"Cat", imgSrc: logo },
    {id:"2", title:"Buffalo", imgSrc: logo },
    {id:"2", title:"Pig", imgSrc: logo },
    {id:"2", title:"Hen", imgSrc: logo },
    {id:"2", title:"Ox", imgSrc: logo },
    {id:"2", title:"Yak", imgSrc: logo },
    {id:"2", title:"Sheep", imgSrc: logo },
];

const insects = [ 
    {id:"1", title:"Ant", imgSrc: logo },
    {id:"2", title:"Cockroach", imgSrc: logo },
    {id:"3", title:"Louse", imgSrc: logo },
    {id:"3", title:"Beetle", imgSrc: logo },
    {id:"3", title:"Mantis", imgSrc: logo },
    {id:"3", title:"Grasshopper", imgSrc: logo },
    {id:"3", title:"Mosquito", imgSrc: logo },
    {id:"3", title:"Fly", imgSrc: logo },
    {id:"3", title:"Honey Bee", imgSrc: logo },
    {id:"3", title:"Hornet", imgSrc: logo },
    {id:"3", title:"Wasp", imgSrc: logo },
    {id:"3", title:"Spider", imgSrc: logo },
];

const flowers = [ 
    {id:"1", title:"Rose", imgSrc: logo },
    {id:"2", title:"Lily", imgSrc: logo },
    {id:"3", title:"Lotus", imgSrc: logo },
    {id:"3", title:"Rhododendron", imgSrc: logo },
    {id:"3", title:"Hibiscus", imgSrc: logo },
    {id:"3", title:"Marigold", imgSrc: logo },
    {id:"3", title:"Sunflower", imgSrc: logo },
    {id:"3", title:"Tulip", imgSrc: logo },
    {id:"3", title:"Jasmine", imgSrc: logo },
    {id:"3", title:"Orchid", imgSrc: logo },
    {id:"3", title:"Lavender", imgSrc: logo },
    {id:"3", title:"Violet", imgSrc: logo },
];

const plant = [ 
    {id:"1", title:"Mustard", imgSrc: logo },
    {id:"2", title:"Weed", imgSrc: logo },
    {id:"3", title:"Aloevera", imgSrc: logo },
    {id:"3", title:"Money Plant", imgSrc: logo },
    {id:"3", title:"Snake Plant", imgSrc: logo },
    {id:"3", title:"Rosemary", imgSrc: logo },
    {id:"3", title:"Spider Plant", imgSrc: logo },
    {id:"3", title:"Rubber Plant", imgSrc: logo },
    {id:"3", title:"Bamboo", imgSrc: logo },
    {id:"3", title:"Peace Lily", imgSrc: logo },
    {id:"3", title:"Jade Plant", imgSrc: logo },
    {id:"3", title:"Mint", imgSrc: logo },
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
                {insects.map((insect) => (
                    <div
                        key={insect.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${insect.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="200"
                            src={insect.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{insect.title}</p>
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