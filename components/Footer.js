import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=" bg-[#0E2954] text-white shadow-md pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 flex gap-x-5 mb-6">

                              <Link href={'https://www.linkedin.com/in/gopivaibhav/'}>
                                    <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1"
                                    viewBox="-143 145 512 512" >
                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
                                    V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
                                    C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
                                    c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
                                    "/>
                                    </svg>
                              </Link>

                              <Link href={'https://www.instagram.com/_inert___/'}>
                                <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1" 
                                    viewBox="-143 145 512 512" >
                                <g>
                                    <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
                                        c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/>
                                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	"/>
                                    <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
                                        c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/>
                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8
                                        c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
                                        c27.3,0,49.5,22.2,49.5,49.5V374.7z"/>
                                </g>
                                </svg>
                                </Link>

                                <Link href={'https://github.com/gopivaibhav/'}>
                                <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1" 
                                    viewBox="-143 145 512 512" >
                                <g>
                                    <path d="M13.4,379.1c-6.2-2.6-13.8-0.4-18.4,5.1s-5.1,13.8-1.1,19.7C-1.4,394.3,5.3,386.2,13.4,379.1z"/>
                                    <path d="M195.9,325.6c6.4,0,11.5-5.3,11.5-11.7c0-6.4-5.1-11.5-11.5-11.6c-6.4,0-11.6,5.1-11.7,11.5
                                        C184.1,320.3,189.5,325.6,195.9,325.6z"/>
                                    <path d="M174.7,380.5c-17.5-9.8-36.5-14.6-56.4-16c-23.6-1.7-46.6,1.2-68.5,10.4c-13.7,5.7-25.9,13.5-35.3,25.2
                                        C0.8,417.3,0.3,438,13.2,455.7c6.7,9.2,15.5,16.1,25.4,21.6c21.1,11.6,43.9,16.1,65.1,16.2c22.3,0,41.4-3.2,59.6-10.9
                                        c13.6-5.7,25.9-13.5,35.2-25.3c13.7-17.3,14.1-37.7,1.2-55.6C193.1,392.7,184.4,385.9,174.7,380.5z M48.6,415
                                        c0.2-12,9.8-21.3,21.8-21.1c11.6,0.2,20.9,9.9,20.8,21.6c-0.1,11.8-10,21.2-22,21C57.8,436.2,48.5,426.5,48.6,415z M151.1,466.8
                                        c-7.1,6.5-15.6,10.2-24.8,12.1c-6.6,1.4-13.3,1.9-20,2.9c-11.4-0.6-22.4-2.2-32.6-7.4c-3.8-1.9-7.3-4.4-10.6-7.1
                                        c-3.9-3.3-4.1-8.2-1-11.6c3.1-3.3,7.9-3.2,11.6,0.1c5.5,4.9,12.1,7.2,19.2,8.5c12.4,2.3,24.7,1.8,36.6-2.8c3.9-1.5,7.5-3.9,11-6.4
                                        c3.6-2.6,8.3-2.5,11.1,0.6C154.6,459,154.4,463.8,151.1,466.8z M144.9,436.4c-11.4-0.2-20.9-10-20.7-21.5c0.2-12,10-21.4,22.2-21.1
                                        c11.4,0.3,20.7,10.1,20.5,21.6C166.7,427.5,157,436.7,144.9,436.4z"/>
                                    <path d="M200,379.1c3.6,4,7.4,7.7,10.7,11.8c3.2,4.2,5.9,8.8,8.9,13.1c4-5.5,3.6-13.7-0.8-19.4C214.2,378.8,206.3,376.5,200,379.1z
                                        "/>
                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M238,399
                                        c-0.1,0.2-0.3,0.5-0.3,0.7c-1.4,8.8-5.6,15.8-12.5,21.4c-0.5,0.4-0.7,1.5-0.6,2.2c1,12.5-1.6,24.1-7.9,34.9
                                        c-8.6,14.7-21.1,25.1-35.8,33.2c-20,11-41.7,16.3-64.4,17.6c-26.1,1.5-51.3-2.4-75.2-13.1c-16-7.1-30.1-16.9-40.6-31.2
                                        c-9.2-12.5-13.8-26.4-12.2-42c0.1-0.8-0.6-1.8-1.3-2.4c-4.1-3.5-7.4-7.6-9.3-12.7c-1-2.8-1.7-5.7-2.5-8.5c0-2.6,0-5.1,0-7.7
                                        c1.6-4.4,2.6-9.1,4.9-13.1c9.2-15.8,29.9-20.6,45.3-10.7c1.6,1,2.7,1,4.3,0.1c18.4-10.7,38.4-16.2,59.5-18.3
                                        c3.1-0.3,6.3-0.5,9.5-0.6c1.6,0,2.3-0.7,2.9-2.2c6.3-18.2,12.8-36.4,19.2-54.6c0.3-0.8,0.6-1.6,1-2.6c6.8,1.6,13.5,3.2,20.2,4.8
                                        c9.1,2.2,18.3,4.3,27.4,6.6c1.7,0.4,2.5,0.2,3.5-1.3c6.7-10.5,19-15,30.8-11.5c11.6,3.5,19.5,14.3,19.5,26.6
                                        c-0.1,13.3-10.5,25.1-23.5,26.6c-14.2,1.7-27.3-7.2-30.2-20.7c-0.6-2.9-1.7-4.1-4.7-4.8c-10.9-2.4-21.7-5.1-32.9-7.7
                                        c-4.8,13.6-9.5,27.1-14.3,40.7c6,0.8,11.8,1.4,17.6,2.3c17.2,2.8,33.4,8.3,48.5,17.1c1.3,0.8,2.2,0.9,3.6,0
                                        c20.1-13,45.9-1.8,50.3,21.8c0.1,0.4,0.3,0.8,0.5,1.1C238,393.5,238,396.2,238,399z"/>
                                </g>
                                </svg>
                                </Link>
                                
                                <Link href={'https://www.linkedin.com/in/gopivaibhav/'}>
                                <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1"  
                                    viewBox="-143 145 512 512" >
                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
                                    v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
                                    c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
                                </svg>
                                </Link>
                                    
                                <Link href={'https://twitter.com/gopi_vaibhav'}>
                                    <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="Layer_1" 
                                    viewBox="-143 145 512 512" >
                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
                                    c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
                                    c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
                                    C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
                                    c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
                                    c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
                                    </svg>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Featured Categories</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" /> AIO by
                                <a href="https://www.linkedin.com/in/gopivaibhav/" className="text-blueGray-500 hover:text-blueGray-800"> Team-55</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
