import React from 'react'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdChevronLeft } from "react-icons/md";
import logo from "../../assets/img/Toodler.png";

const fruit = [ 
    {id:"1", title:"Apple", imgSrc: "/src/assets/Fruits/apple.png" },
    {id:"2", title:"Banana", imgSrc: "/src/assets/Fruits/banana.png" },
    {id:"2", title:"Mango", imgSrc: "/src/assets/Fruits/mango.png" },
    {id:"2", title:"Watermelon", imgSrc: "/src/assets/Fruits/watermelon.png" },
    {id:"2", title:"Pineapple", imgSrc: "/src/assets/Fruits/pineapple.png" },
    {id:"2", title:"Grapes", imgSrc: "/src/assets/Fruits/grapes.png" },
    {id:"2", title:"Orange", imgSrc: "/src/assets/Fruits/orange.png" },
    {id:"2", title:"Dragonfruit", imgSrc: "/src/assets/Fruits/dragonfruit.png" },
    {id:"2", title:"Guava", imgSrc: "/src/assets/Fruits/guava.png" },
    {id:"2", title:"Avocado", imgSrc: "/src/assets/Fruits/avocado.png" },
    {id:"2", title:"Pomegrenade", imgSrc: "/src/assets/Fruits/pomegrenade.png" },
    {id:"2", title:"Starfruit", imgSrc: "/src/assets/Fruits/starfruit.png" },
    {id:"2", title:"Strawberry", imgSrc: "/src/assets/Fruits/strawberry.png" },
    {id:"2", title:"Litchi", imgSrc: "/src/assets/Fruits/litchi.png" },
    {id:"2", title:"Plum", imgSrc: "/src/assets/Fruits/plum.png" },
    {id:"2", title:"Kiwi", imgSrc: "/src/assets/Fruits/kiwi.png" },
    {id:"2", title:"Papaya", imgSrc: "/src/assets/Fruits/papaya.png" },
    {id:"2", title:"Peach", imgSrc: "/src/assets/Fruits/peach.png" },
    {id:"2", title:"Cherry", imgSrc: "/src/assets/Fruits/cherry.png" },
    {id:"2", title:"Coconut", imgSrc: "/src/assets/Fruits/coconut.png" },
];

const vegetables = [ 
    {id:"1", title:"Potato", imgSrc: "/src/assets/Vegetables/potato.png" },
    {id:"2", title:"Brocoli", imgSrc: "/src/assets/Vegetables/brocoli.png" },
    {id:"3", title:"Bitter Gourd", imgSrc: "/src/assets/Vegetables/bittergourd.png" },
    {id:"3", title:"Onion", imgSrc: "/src/assets/Vegetables/onion.png" },
    {id:"3", title:"Chilli", imgSrc: "/src/assets/Vegetables/chilli.png" },
    {id:"3", title:"Mushroom", imgSrc: "/src/assets/Vegetables/mushroom.png" },
    {id:"3", title:"Carrot", imgSrc: "/src/assets/Vegetables/carrot.png" },
    {id:"3", title:"Garlic", imgSrc: "/src/assets/Vegetables/garlic.png" },
    {id:"3", title:"Lettuce", imgSrc: "/src/assets/Vegetables/lettuce.png" },
    {id:"3", title:"Tomato", imgSrc: "/src/assets/Vegetables/tomato.png" },
    {id:"3", title:"Ladyfinger", imgSrc: "/src/assets/Vegetables/ladyfinger.png" },
    {id:"3", title:"Capsicum", imgSrc: "/src/assets/Vegetables/capsicum.png" },
    {id:"3", title:"Brinjal", imgSrc: "/src/assets/Vegetables/brinjal.png" },
    {id:"3", title:"Cauliflower", imgSrc: "/src/assets/Vegetables/cauliflower.png" },
    {id:"3", title:"Cucumber", imgSrc: "/src/assets/Vegetables/cucumber.png" },
    {id:"3", title:"Cabbage", imgSrc: "/src/assets/Vegetables/cabbage.png" },
    {id:"3", title:"Pumpkin", imgSrc: "/src/assets/Vegetables/pumpkin.png" },
    {id:"3", title:"Green Peas", imgSrc: "/src/assets/Vegetables/peas.png" },
    {id:"3", title:"Snake Gourd", imgSrc: "/src/assets/Vegetables/snakegourd.png" },
    {id:"3", title:"Bottle Gourd", imgSrc: "/src/assets/Vegetables/bottlegourd.png" },
];

const fruits = () => {
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
            <h1 className="text-purple-600 text-5xl leading-tight mb-0">Fruits</h1>
            <p className="text-purple-600 text-3xl mb-6">and Vegetables</p>
            {/*Fruit Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600'>Fruits</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {fruit.map((fruit) => (
                    <div
                        key={fruit.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${fruit.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="180"
                            src={fruit.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{fruit.title}</p>
                    </div>
                ))}
            </section>
            {/*Vegetable Section */}
            <span className='text-2xl text-white px-3 py-2 rounded-lg bg-purple-600 mt-5'>Vegetables</span>
            <section className="grid grid-cols-2 gap-2 w-full mt-5">
                {vegetables.map((vegetable) => (
                    <div
                        key={vegetable.id}
                        className="bg-purple-600 rounded-xl p-3 flex flex-col mb-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                        style={{ width: '180px', height: '230px' }}
                    >
                        <img
                            alt={`Image for ${vegetable.title}`}
                            className=" bg-white rounded-md mb-3"
                            height="180"
                            src={vegetable.imgSrc}
                            width="180"
                        />
                        <p className="text-white text-center text-2xl">{vegetable.title}</p>
                    </div>
                ))}
            </section>
        </div>

    )
}

export default fruits;