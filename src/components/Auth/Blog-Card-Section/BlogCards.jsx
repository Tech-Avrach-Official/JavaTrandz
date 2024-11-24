import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = ({ blog }) => {

    console.log(blog)

    return (
        <>


            <div className="w-[350px] cursor-pointer rounded-lg shadow-sm shadow-slate-300 border border-gray-100 bg-white">
                <Link to={ `/blogpage/${blog?._id}`}>
                    <img
                        alt=""
                        src={blog?.image}
                        className="h-56 w-full object-cover"
                    />

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                                {blog?.title}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {blog?.description}
                        </p>

                        <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                            Find out more

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 ">
                                &rarr;
                            </span>
                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}

export default BlogCards