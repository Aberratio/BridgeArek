import React from "react";

export default function Home() {
    return (
        <main>
            <div className="p-5 mt-12 sm:mt-48 lg:mt-24 container mx-auto">
                <section className="bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-4xl lg:text-6xl text-green-300 mb-4 pb-4">Regionalne Turnieje Wtorkowe 
                         </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p><b>Kiedy?</b>  W każdy powszedni wtorek *<br />
                            <b>O której?</b>  17:30<br />
                            <b>Ilość rozdań:</b>  28-30<br />
                            <b>Gdzie?</b> <a href="https://azswratislavia.pl/kontakt/" target="_blank"> <i className="wo-text-decoration text-green-300">Klub AZS Wratislavia Na Grobli 30-32</i></a>, drugie piętro<br />
<br />
<i>* w drugi poniedziałek miesiąca rozgrywamy turniej KMP, w tym tygodniu nie ma turnieju we wtorek.</i>
                            </p> </div>
                    </div>
                </section>
                <section className="mt-20 bg-black opacity-80 rounded-lg shadow-2xl lg:flex p-10">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-4xl lg:text-6xl text-green-300 mb-4 pb-4">Cennik 
                         </h1>
                        <div className="prose lg:prose-xl text-white">
                            <p><b>Ulgowe (juniorzy + seniorzy, w PZBS)</b>  -  15zł<br />
                            <b>Normalne</b>  -  20zł</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        )
} 