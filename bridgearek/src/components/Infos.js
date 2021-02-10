import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title, 
            date,
            place,
            description,
            projectType,
            link, 
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-100 min-h-screen p-5 pt-12 mt-12 sm:mt-48 lg:mt-24">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive my-primary-text">Ogłoszenia</h1>
                <section className="grid md:grid-cols-2 grid-cols-1 gap-8 p-4 md:p-12">
                    {projectData && projectData
                    .sort((a, b) => a.date < b.date ? 1 : -1)
                    .map((project, index) => (
                        <article className="relative rounded-lgt shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener norefeerer">{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Opublikowano</strong>:{" "}
                                    { new Date(project.date).toLocaleString() }
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener norefeerer" className="text-red-500 font-bold hover:underline hover:text-red-400">
                                    Zobacz{" "}
                                    <span role="img" aria-label="right pointer">

                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
        )
} 