import React from "react";

const Home = () => {
    return (
        <>
            <section
                style={{
                    backgroundImage: 'url("public/hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '110vh',
                    paddingTop: "80px",
                }}
            >
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-5xl font-bold text-center">Hi i am vignesh Frontend Developer</h2>
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