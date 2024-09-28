import { TooltipCom } from '@/components/Auth/Tooltip-Com/TooltipCom'
import { Input } from '@/components/ui/input';
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faLink } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Navbar from '@/components/Layout/Navbar/Navbar';
import Footer from '@/components/Layout/Footer/Footer';

const BlogPage = () => {
    return (
        <>
            <Navbar />
            <div id='top' className='relative w-full px-4 md:px-14 xl:px-40 py-20'>
                <div className='fixed bottom-5 right-5'>
                <a href='#top'>
                <FontAwesomeIcon icon={faAnglesUp} className='text-3xl bg-second text-white p-2 rounded-md'/>
                </a>
                </div>
                <div className='flex flex-col gap-5'>
                    <hr className='border-2 border-[#000000]' />
                    <div className='flex flex-col-reverse lg:flex-row gap-5'>
                        <div className='w-full lg:w-1/2'>
                            <div>
                                <span className='text-xs md:text-base font-semibold bg-black text-white rounded-sm p-2'>DEVOPS</span>
                                <h1 className='text-2xl md:text-5xl mt-5 font-bold'>
                                    Top 10 AI Tools for DevOps
                                </h1>
                            </div>
                            <div className='flex items-center gap-4 mt-10'>
                                <TooltipCom icon={faTwitter} tooltipText="Twitter" />
                                <TooltipCom icon={faFacebook} tooltipText="Facebook" />
                                <TooltipCom icon={faInstagram} tooltipText="Instagram" />
                                <TooltipCom icon={faLink} tooltipText="Copy Link" />
                                <span className='border h-2 border-gray-400'></span>
                                <span className='text-gray-500 text-base'>13 Min Read</span>
                            </div>
                            <div className='mt-5'>
                                <span className='text-gray-500'>Written by: </span>
                                <span className='text-base hover:text-blue-600 hover:border-blue-600 duration-200 cursor-pointer font-semibold border-b-2 border-black'>MAYANK GUPTA</span>
                                <span className='text-gray-500'> - Lorem ipsum dolor sit amet.</span>
                            </div>
                            <div className='mt-1'>
                                <span>Last updated: </span>
                                <span className='text-gray-500'>September 13, 2024 4:19 pm</span>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img className='w-full h-[300px] md:h-[450px] object-cover' src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" alt="" />
                        </div>
                    </div>
                    <hr className='border-2 border-[#000000]' />
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='w-full lg:w-[70%]'>
                            <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                                What are AI Tools in DevOps?
                            </h1>

                            <p class="text-base md:text-lg text-gray-700 mb-6">
                                AI tools in <span class="text-blue-600 font-semibold">DevOps</span> are specialized software solutions that leverage artificial intelligence technologies to enhance various aspects of the software development and delivery process. By automating repetitive processes, analyzing massive volumes of data, offering perceptive insights, and promoting data-driven decision-making, they enable DevOps teams to operate more efficiently and quickly.
                            </p>

                            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                Key features AI brings to DevOps include:
                            </h2>

                            <ul class="list-disc pl-5 space-y-4 text-gray-700">
                                <li>
                                    <span class="font-semibold">Automation:</span> AI automates repetitive and time-consuming tasks, such as code reviews, testing, and deployment, freeing up developers to focus on more strategic and creative work.
                                </li>
                                <li>
                                    <span class="font-semibold">Intelligent Monitoring:</span> AI-powered monitoring systems can analyze logs, metrics, and other data sources in real-time, detecting anomalies and potential issues before they impact users.
                                </li>
                                <li>
                                    <span class="font-semibold">Predictive Analytics:</span> AI systems are able to anticipate future trends by analyzing past data and patterns. This allows for resource optimization and proactive decision-making.
                                </li>
                                <li>
                                    <span class="font-semibold">Root Cause Analysis:</span> When issues occur, AI can help pinpoint the root cause by analyzing logs and system data, enabling faster resolution and preventing similar problems in the future.
                                </li>
                                <li>
                                    <span class="font-semibold">Improved Collaboration:</span> By automating alerts, offering astute insights, and encouraging knowledge sharing, AI can improve teamwork and communication.
                                </li>
                            </ul>
                            <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mt-5 mb-4">
                                Top 10 AI Tools for DevOps Teams
                            </h1>

                            <p class="text-base md:text-lg text-gray-700 mb-6">
                                The availability of AI tools for DevOps is growing quickly, providing teams with a wide range of choices to improve productivity and optimize their workflows. Here's a more in-depth look at 10 exceptional AI tools that DevOps teams should consider incorporating into their practices:
                            </p>

                            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                1. Amazon CodeGuru
                            </h2>

                            <p class="text-base md:text-lg text-gray-700 mb-4">
                                Amazon CodeGuru is a powerful tool that acts as an AI-powered code reviewer and profiler. It makes use of machine learning to evaluate your code, spot possible problems, and provide suggestions for enhancing the functionality and code quality of your application.
                            </p>

                            {/* <img src="your-image-url.jpg" alt="Master Coding Program" class="mb-6" /> */}

                            <h3 class="text-xl font-bold text-gray-900 mb-3">
                                Key Features:
                            </h3>

                            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                                <li>
                                    Automated code reviews to identify critical issues, security vulnerabilities, and resource leaks.
                                </li>
                                <li>
                                    Performance recommendations to optimize code and reduce costs.
                                </li>
                                <li>
                                    Constantly picks up knowledge from your codebase and adjusts to your unique coding styles.
                                </li>
                            </ul>
                            <h2 class="text-xl md:text-2xl font-bold mt-2 text-gray-900 mb-2">
                                2. Kubiya
                            </h2>
                            <p class="text-base md:text-lg text-gray-700 mb-4">
                                Kubiya revolutionizes DevOps workflows by providing an AI-driven assistant that interacts using natural language. It enables teams to easily automate processes across multiple tools and platforms and carry out difficult tasks.
                            </p>

                            <h3 class="text-xl font-bold text-gray-900 mb-3">
                                Key Features:
                            </h3>
                            <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                                <li>Uses natural language interactions to comprehend and carry out complicated commands.</li>
                                <li>Automates workflows seamlessly across multiple DevOps tools and platforms.</li>
                                <li>Simplifies collaboration and information sharing between teams by centralizing communication and knowledge.</li>
                            </ul>

                            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                3. PagerDuty
                            </h2>
                            <p class="text-base md:text-lg text-gray-700 mb-4">
                                PagerDuty is an incident response platform that leverages AI to enhance incident management and resolution. It ensures quicker and more effective handling of critical issues by intelligently automating several incident response process steps.
                            </p>

                            <h3 class="text-xl font-bold text-gray-900 mb-3">
                                Key Features:
                            </h3>
                            <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                                <li>Intelligent incident routing and escalation based on severity and on-call schedules.</li>
                                <li>Automated diagnostics and remediation suggestions to speed up incident resolution.</li>
                                <li>Proactive issue management through incident prediction and prevention driven by machine learning.</li>
                            </ul>

                            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                4. Sysdig
                            </h2>
                            <p class="text-base md:text-lg text-gray-700 mb-4">
                                Using artificial intelligence (AI), Sysdig is a cloud-native security and monitoring platform that can see deep into containerized environments and quickly identify threats. It helps ensure the security and performance of applications running on containers, Kubernetes, and cloud infrastructure.
                            </p>

                            <h3 class="text-xl font-bold text-gray-900 mb-3">
                                Key Features:
                            </h3>
                            <ul class="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Identifies security and performance issues in containerized environments.</li>
                                <li>Provides real-time monitoring of Kubernetes and cloud infrastructure.</li>
                                <li>Uses AI-driven threat detection to enhance system security.</li>
                            </ul>
                            <h1 class="text-2xl md:text-4xl mt-2 font-bold text-gray-900 mb-4">
                                What are AI Tools in DevOps?
                            </h1>

                            <p class="text-base md:text-lg text-gray-700 mb-6">
                                AI tools in <span class="text-blue-600 font-semibold">DevOps</span> are specialized software solutions that leverage artificial intelligence technologies to enhance various aspects of the software development and delivery process. By automating repetitive processes, analyzing massive volumes of data, offering perceptive insights, and promoting data-driven decision-making, they enable DevOps teams to operate more efficiently and quickly.
                            </p>

                            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                Key features AI brings to DevOps include:
                            </h2>

                            <ul class="list-disc pl-5 space-y-4 text-gray-700">
                                <li>
                                    <span class="font-semibold">Automation:</span> AI automates repetitive and time-consuming tasks, such as code reviews, testing, and deployment, freeing up developers to focus on more strategic and creative work.
                                </li>
                                <li>
                                    <span class="font-semibold">Intelligent Monitoring:</span> AI-powered monitoring systems can analyze logs, metrics, and other data sources in real-time, detecting anomalies and potential issues before they impact users.
                                </li>
                                <li>
                                    <span class="font-semibold">Predictive Analytics:</span> AI systems are able to anticipate future trends by analyzing past data and patterns. This allows for resource optimization and proactive decision-making.
                                </li>
                                <li>
                                    <span class="font-semibold">Root Cause Analysis:</span> When issues occur, AI can help pinpoint the root cause by analyzing logs and system data, enabling faster resolution and preventing similar problems in the future.
                                </li>
                                <li>
                                    <span class="font-semibold">Improved Collaboration:</span> By automating alerts, offering astute insights, and encouraging knowledge sharing, AI can improve teamwork and communication.
                                </li>
                            </ul>
                            <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mt-5 mb-4">
                                Top 10 AI Tools for DevOps Teams
                            </h1>

                            <p class="text-base md:text-lg text-gray-700 mb-6">
                                The availability of AI tools for DevOps is growing quickly, providing teams with a wide range of choices to improve productivity and optimize their workflows. Here's a more in-depth look at 10 exceptional AI tools that DevOps teams should consider incorporating into their practices:
                            </p>

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
            <Footer />
        </>
    );
}

export default BlogPage;
