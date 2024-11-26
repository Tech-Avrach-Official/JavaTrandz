import { TooltipCom } from '@/components/Auth/Tooltip-Com/TooltipCom'
import { Input } from '@/components/ui/input';
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faLink } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Navbar from '@/components/Layout/Navbar/Navbar';
import Footer from '@/components/Layout/Footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogById, fetchBlogs } from '@/Redux/features/blog/blogApi';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading/Loading';
import toast from 'react-hot-toast';
import ConfirmationPopup from '@/components/confirmationPopup/confirmationPopup';



const BlogPage = () => {
    const { id } = useParams();
    const isAdmin = localStorage.getItem('tempData');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedBlog, isLoading, isError, error } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(getBlogById(id));
    }, [dispatch]);

    const handleDeleteBlog = () => {
        try {
            dispatch(deleteBlog(id)).then((response) => {
                if (response.error) {
                    console.log("Error deleting blog:", response.error);
                } else {
                    console.log("Blog deleted successfully");
                    toast.success("Blog deleted successfully");
                    dispatch(fetchBlogs());
                    navigate("/blog");
                }
            });
        } catch (error) {
            console.error("Error deleting blog:", error);
            toast.error("Error deleting blog");
        }
    }

    const handleCopyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success("Link copied to clipboard");
            })
            .catch((error) => {
                console.error("Error copying link:", error);
            });
    }

    console.log("selectedBlog", selectedBlog);

    if (isLoading) return <Loading />;

    if (isError) {
        toast.error("Error fetching blog"),
            console.log("Error fetching blog:", error)
        return <p>Error: {error}</p>;
    }



    return (
        <>
            <Navbar />
            <div id='top' className='relative w-full px-4 md:px-14 xl:px-40 py-20'>
                <div className='fixed bottom-5 right-5'>
                    <a href='#top'>
                        <FontAwesomeIcon icon={faAnglesUp} className='text-3xl bg-second text-white p-2 rounded-md' />
                    </a>
                </div>
                <div className='flex flex-col gap-5'>
                    <hr className='border-2 border-[#000000]' />
                    <div className='flex flex-col-reverse lg:flex-row gap-5'>
                        <div className='w-full lg:w-1/2'>
                            <div>
                                <span className='text-xs md:text-base font-semibold bg-black text-white rounded-sm p-2'>{selectedBlog?.slug}</span>
                                <h1 className='text-2xl md:text-5xl mt-5 font-bold'>
                                    {selectedBlog?.title}
                                </h1>
                            </div>
                            <div className='flex items-center gap-4 mt-10'>
                                <TooltipCom icon={faTwitter} tooltipText="Twitter" />
                                <TooltipCom icon={faFacebook} tooltipText="Facebook" />
                                <TooltipCom icon={faInstagram} tooltipText="Instagram" />
                                <span className='cursor-pointer hover:text-second' onClick={handleCopyLink}>
                                    <TooltipCom icon={faLink} tooltipText="Copy Link" />
                                </span>
                                <span className='border h-2 border-gray-400'></span>
                                <span className='text-gray-500 text-base'>{selectedBlog?.duration} Read</span>
                            </div>
                            <div className='mt-5'>
                                <span className='text-gray-500'>Written by: </span>
                                <span className='text-base hover:text-blue-600 hover:border-blue-600 duration-200 cursor-pointer font-semibold border-b-2 border-black'>{selectedBlog?.author?.name}</span>
                                <span className='text-gray-500'> - {selectedBlog?.author?.position}.</span>
                            </div>
                            <div className='mt-1'>
                                <span>Last updated: </span>
                                <span className='text-gray-500'>
                                    {selectedBlog?.lastUpdate
                                        ? new Date(selectedBlog.lastUpdate).toLocaleString([], {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                        : 'No date available'}
                                </span>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img className='w-full h-[300px] md:h-[450px] object-contain' src={selectedBlog?.image} alt="" />
                        </div>
                    </div>
                    <hr className='border-2 border-[#000000]' />
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='w-full lg:w-[70%]'>

                            {
                                selectedBlog?.content && parse(selectedBlog?.content)
                            }

                        </div>
                        <div id='box-1' className='border lg:h-[450px] p-5 border-gray-700 w-full lg:w-[30%] lg:sticky lg:top-20'>
                            <h1 className='text-xl font-bold'>Get Free Career Counselling</h1>
                            <div className='flex flex-col mt-5 gap-5'>
                                <Input placeholder='Enter your email' />
                                <Input placeholder='Full Name' />
                                <Input placeholder='Graduation Year' />
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Job Title" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Input placeholder='Phone Number' />

                                <button className='bg-black text-white rounded-sm px-5 py-2 '>Submit</button>
                            </div>
                        </div>

                        {/* <div id='box-1' className='bg-black h-80 w-[25%] sticky top-20'>
                    </div> */}
                    </div>
                    <div>

                    </div>

                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold'>You Might Also Like</h1>
                    <div className='mt-5 flex flex-wrap justify-center gap-7'>
                        <div className="w-[350px] cursor-pointer rounded-lg border border-gray-100 bg-white shadow-sm">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                        </div>
                        <div className="w-[350px] cursor-pointer rounded-lg border border-gray-100 bg-white shadow-sm">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                        </div>
                        <div className="w-[350px] cursor-pointer rounded-lg border border-gray-100 bg-white shadow-sm">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                        </div>
                    </div>
                </div>
            </div>
            {
                isAdmin &&
                <div className='flex gap-2 justify-center m-4'>
                    <Link to={`/blog-form/edit?id=${selectedBlog?._id}`}>
                        <Button variant="outline">Update</Button>
                    </Link>

                    <ConfirmationPopup onDelete={handleDeleteBlog}>
                    <Button variant="destructive">Delete</Button>{/* This is the trigger button */}
                    </ConfirmationPopup>
                </div>
            }
            <Footer />
        </>
    );
}

export default BlogPage;
