import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import back from "../background_img.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
         name, 
         bio,
         "authorImage": image.asset->url    
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, [])

    if (!author) return <div>Loading...</div>

    return (
        <main className="mt-12 sm:mt-48 lg:mt-24">
            <div className="p-5 pt-150 lg:pt-200 container mx-auto relative">
                <section className="bg-black bg-opacity-80 rounded-lg shadow-2xl md:flex p-10">
                    <img src={urlFor(author.authorImage).url()} className="rounded md-8 w-32 h-40 m-auto md:w-80 md:h-96 md:mr-4" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center ml-1 mr-1 lg:ml-48 lg:mr-12 md:ml-12">
                        <h1 className="text-2xl cursive text-green-300 mb-4 md:text-6xl">Cześć! Jestem
                        <span className="text-green-100"> Arek</span></h1>
                        <div className="prose lg:prose-xl text-white">
                        <p>Jestem sędzią, organizatorem oraz graczem w brydża sportowego. 
                        Sędziowałem zarówno w zawodach ogólnopolskich m.in w finale MP Par, 
                        finałowym kryterium Kadry Juniorów, zawodach regionalnych jako sędzia główny m.in.
                        Liga Okręgowa Wrocławska, w internecie na BBO i RealBridge, a na co dzień prowadzę 
                        niniejsze turnieje. Jako gracz jestem multimedalistą mistrzostw akademickich i juniorów, 
                        a w sezonie 2020/2021 grałem w ogólnopolskiej I lidze. </p>
                        <p>Poza brydżem moje pasje i zainteresowania to: bieganie, wędrówki górskie, 
                        finanse i psychologia. </p>
                        <p><b>Zapraszam do kontaktu!</b> </p>
                        <p><b>email:</b> arkadiusz.poziemski@gmail.com </p>
                        <p><b>telefon: </b>697-970-556</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
} 