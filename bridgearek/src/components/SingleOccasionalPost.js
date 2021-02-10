import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SingleOccasionalPost() {
    const [singleOccasionalPost, setSingleOccasionalPost] = useState(null);
    const { slug } = useParams(); 

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            date,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image,
            "placeName": place->name,
        }`).then((data) => setSingleOccasionalPost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singleOccasionalPost) return <div>Ładowanie...</div>;

    return (
        <main className="bg-gray-200 min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24">
            <article className="container shadow-lg mx-auto bg-black opacity-80 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-95 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">{singleOccasionalPost.title}</h1>
                            <span className="block relative h-full flex justify-end items-end pb-4">
                                <p className="bold flex items-center pl-2 text-1xl bg-yellow-500 font-bold text-white pr-2 mr-2 rounded">{singleOccasionalPost.date}</p>
                                <p className="bold flex items-center pl-2 text-1xl bg-red-500 font-bold text-red-100 pr-2 rounded">{singleOccasionalPost.placeName}</p>
                            </span>
                            <div className="flex mr-10 text-gray-800">
                                <img 
                                    src={urlFor(singleOccasionalPost.authorImage).url()}
                                    alt={singleOccasionalPost.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="bold flex items-center pl-2 text-2xl">{singleOccasionalPost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img 
                        src={singleOccasionalPost.mainImage.asset.url}
                        alt={singleOccasionalPost.name}
                        className="w-full object-cover rounded-t" 
                        style={{ height: "400px" }} 
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-white">
                    <BlockContent
                    blocks={singleOccasionalPost.body}
                    projectId="pt5uct8q"
                    dataset="production"
                    />
                </div>
            </article>
        </main>
        )
} 