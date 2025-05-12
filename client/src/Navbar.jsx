import { Link, useLocation } from "react-router"

export const Navbar = ({ users }) => {
    const location = useLocation()
    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chat</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to='/'
                                    className={`block py-2 px-3 ${location.pathname === '/' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-900 dark:text-white'}  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/rooms'
                                    className={`block py-2 px-3 ${location.pathname === '/rooms' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-900 dark:text-white'}  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">
                                    Rooms
                                    <span className={`ml-1 inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold ${location.pathname === '/rooms' ? 'text-yellow-300 dark:text-yellow-300' : 'text-gray-900 dark:text-white'} bg-gray-100 rounded-full dark:bg-gray-700`}>
                                        {users.length}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/login'
                                    className={`block py-2 px-3 ${location.pathname === '/login' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-900 dark:text-white'}  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">
                                    Login
                                </Link>
                            </li>
                            {/* <li>
                                <Link 
                                    to='/' 
                                    className={`block py-2 px-3 ${location.pathname === '/' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-900 dark:text-white'}  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/' 
                                    className={`block py-2 px-3 ${location.pathname === '/' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-900 dark:text-white'}  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} aria-current="page">Home</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

