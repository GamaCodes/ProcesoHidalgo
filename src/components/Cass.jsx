import React from 'react'
import { Link } from 'gatsby'

export default function Cass() {
    return (
        <div className="mt-8 px-6">
            <h2 className="text-3xl font-bold text-center">Videos</h2>
            <div className="max-w-6xl mx-auto overflow-x-scroll pb-2">
                    <nav className="flex mt-6">
                        <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size">
                            <div className="p-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3_fIExAuUY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <Link to={`/`} className="btn inline-block mt-4">
                                    Ver publicación
                                </Link>
                            </div>
                        </div>
                        <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size">
                            <div className="p-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3_fIExAuUY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <Link to={`/`} className="btn inline-block mt-4">
                                    Ver publicación
                                </Link>
                            </div>
                        </div>
                        <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size">
                            <div className="p-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3_fIExAuUY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <Link to={`/`} className="btn inline-block mt-4">
                                    Ver publicación
                                </Link>
                            </div>
                        </div>
                        <div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size">
                            <div className="p-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3_fIExAuUY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <Link to={`/`} className="btn inline-block mt-4">
                                    Ver publicación
                                </Link>
                            </div>
                        </div><div className="shadow bg-white mr-4 rounded flex-shrink-0 img-size">
                        <div className="p-8">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3_fIExAuUY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <Link to={`/`} className="btn inline-block mt-4">
                                Ver publicación
                            </Link>
                        </div>
                    </div>
                    </nav>
            </div>
        </div>
    )
}
