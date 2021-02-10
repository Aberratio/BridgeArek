import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "occasional"]{
            title, 
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-white min-h-screen p-12 mt-12 sm:mt-48 lg:mt-24">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive mb-12 my-primary-text">Turnieje okazjonale - wyniki</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData
                    .sort((a, b) => a.date < b.date ? 1 : -1)
                    .map((post, index) => (
                        <article>
                            <Link to={"/okazjonalne/" + post.slug.current} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 my-primary-border" key={index}>
                                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute" />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                            {post.title}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
} 