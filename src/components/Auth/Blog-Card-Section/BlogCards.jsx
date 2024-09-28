import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
    return (
        <>
        
        <div className='w-full bg-[#F8F8F8] px-4 xl:px-40 py-20'>
            <div className='flex justify-center flex-wrap gap-10'>
                {
                    Array.from({ length: 8 }).map((_, i) => (
                        <div className="w-[350px] cursor-pointer rounded-lg shadow-sm shadow-slate-300 border border-gray-100 bg-white" key={i}>
                <Link to='/blogpage'>
                        <img
                            alt=""
                            src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
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
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default BlogCards