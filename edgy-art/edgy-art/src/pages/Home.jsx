import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Home = () => {
    return (
        <>
            <section className="bg-white"
                style={{
                    backgroundImage: 'url("public/hero1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '110vh',
                    paddingTop: "80px",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="text-stone-800">
                            <h2 className="text-4xl md:text-5xl font-semibold">I'm your creative
                                Graphic designer</h2>
                            <p className="text-xl md:text-2xl mt-5">I am an efficient, energetic and courageous. Make your project more efficient and faster with my work insights.</p>

                            <div className="flex items-center gap-5 mt-10">
                                <button className="bg-lime-700 px-4 py-2 rounded text-white">Let's talk</button>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/your-username"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 text-stone-900  p-2 rounded-full hover:bg-lime-700 hover:text-white transition-colors duration-200"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/your-username"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 text-stone-900 p-2 rounded-full hover:bg-lime-700 hover:text-white transition-colors duration-200"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div>
                            <img class="object-cover ..." src="public\img\hero.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-stone-950">
                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div className="card bg-gray-200 py-8 px-4 text-center" >
                            <div>

                            </div>
                            <h3>Creating Visual designs</h3>
                            <p>i am an efficient, energetic and couragous.</p>
                        </div>
                        <div className="card bg-gray-200 py-8 px-4 text-center">
                            <h3>understanding clients needs</h3>
                            <p>i am an efficient, energetic and couragous.</p>
                        </div>
                        <div className="card bg-gray-200 py-8 px-4 text-center">
                            <h3>maintaining consistency</h3>
                            <p>i am an efficient, energetic and couragous.</p>
                        </div>
                        <div className="card bg-gray-200 py-8 px-4 text-center">
                            <h3>up-to-date with design trends</h3>
                            <p>i am an efficient, energetic and couragous.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* about me */}
            <section className="bg-stone-950">
                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-2xl text-transform: uppercase">About Me</h4>
                            <h2 className="text-4xl mt-3 font-semibold">Make your project more efficient and faster with my work insights.</h2>
                            <p className="text-md mt-5">I am an efficient, energetic and courageous. Make your project more efficient and faster with my work insights.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                <div className="card bg-stone-100 text-stone-900 py-8 px-4">
                                    <div className="bg-green-700 p-5 w-20 rounded-[1vw]">
                                        <MdDesignServices className="inline-block mr-2 text-4xl text-stone-50" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">manage</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nobis?</p>
                                </div>
                                <div className="card bg-stone-100 text-stone-900 py-8 px-4">
                                    <div className="bg-blue-600 p-5 w-20 rounded-[1vw]">
                                        <MdDesignServices className="inline-block mr-2 text-4xl text-stone-50" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">manage</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nobis?</p>
                                </div>
                                <div className="card bg-stone-100 text-stone-900 py-8 px-4">
                                    <div className="bg-amber-500 p-5 w-20 rounded-[1vw]">
                                        <MdDesignServices className="inline-block mr-2 text-4xl text-stone-50" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">manage</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nobis?</p>
                                </div>
                                <div className="card bg-stone-100 text-stone-900 py-8 px-4">
                                    <div className="bg-red-500 p-5 w-20 rounded-[1vw]">
                                        <MdDesignServices className="inline-block mr-2 text-4xl text-stone-50" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">manage</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nobis?</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <img class="object-cover ..." src="public\img\aboutme.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-stone-950">
                <div className="container mx-auto px-4 py-20">
                    <h3 className="text-center text-4xl mb-10">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="card bg-gray-800 py-8 px-4 text-center cursor-pointer">
                            <i></i>
                            <h4 className="text-center  text-2xl">
                                Development</h4>
                            <p>Nam varius mauris eget sodales tempus. Quisque sollicitudin consectetur accumsan. Ut imperdiet mi velit, ut congue justo sagittis eget</p>
                        </div>
                        <div className="card bg-gray-800 py-8 px-4 text-center">
                            <i></i>
                            <h4 className="text-center text-2xl">
                                Development</h4>
                            <p>Nam varius mauris eget sodales tempus. Quisque sollicitudin consectetur accumsan. Ut imperdiet mi velit, ut congue justo sagittis eget</p>
                        </div>
                        <div className="card bg-gray-800 py-8 px-4 text-center">
                            <i></i>
                            <h4 className="text-center text-2xl">
                                Development</h4>
                            <p>Nam varius mauris eget sodales tempus. Quisque sollicitudin consectetur accumsan. Ut imperdiet mi velit, ut congue justo sagittis eget</p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                style={{
                    backgroundImage: 'url("public/hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    height: '80vh',
                    paddingTop: "90px",
                }}
            >
                <div className="container mx-auto px-4 py-20 text-center">
                    <p>Auctor elit sed vulputate mi sit amet mauris commodo quis.</p>
                    <button className="bg-lime-600 px-3 py-2 my-3 border rounded">CALL TO ACTION</button>
                </div>
            </section>
            <section className="bg-stone-950">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h3 className="text-center text-4xl mb-10">My Portfolio</h3>
                </div>
            </section>
            <section className="bg-stone-950">
                <div className="container mx-auto px-4 py-20">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam repellendus minus iusto id consequatur debitis suscipit nihil placeat cumque facilis officia ipsum labore quis possimus tempora neque accusantium eos.</p>
                </div>
            </section>
        </>
    )
}

export default Home;