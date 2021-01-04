import React from "react";
import image from "../background_img.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Background" className="absolute object-cover w-full h-full" />
            <div className="p-5 lg:pt-24 container mx-auto relative">
                <section className="bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4 pb-4">Regularne turnieje wtorkowe 
                         </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p><b>Gdzie?</b>  -  Na Grobli (30-32, 50-421 Wrocław)<br />
                            <b>Sędzia:</b> Arkadiusz Poziemski<br />
                            <b>Liczba rozdań</b>  -  od 24 do 30, w zależności od frekwencji</p>
                        </div>
                    </div>
                </section>
                <section className="mt-20 bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4 pb-4">Cennik 
                         </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p><b>Ulgowy (seniorzy i młodzież szkolna)</b>  -  10zł<br />
                            <b>Normalny</b>  -  13zł</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        )
} 