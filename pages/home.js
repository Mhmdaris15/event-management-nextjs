import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'


const Home = ({ data }) => {
  return (
    <>
    {/* Header */}
    <div className="font-sans bg-white flex flex-col min-h-screen w-full">
          <div>
            <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 px-4 py-4">
              <Navbar />
            </div>
            <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 md:overflow-hidden">
              <div className="px-4 py-16">
                <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
                  <h1 className="font-bold text-gray-100 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                    Tourist App for Indonesia Local Events
                  </h1>
                  <p className="text-gray-100 md:text-xl md:px-18">
                    Visit Indonesia and find the best local events in your area. We have a lot of events for you to choose from.
                  </p>
                  <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48" />
                  <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32" />
                </div>
              </div>
              <svg className="fill-current bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity={1} d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
              </svg>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block" style={{marginTop: '-320px', borderRadius: '20px'}}>
              <div className="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10" style={{zIndex: -1}} />
              <div className="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12" style={{zIndex: -1}} />
              <div className="h-10 bg-white rounded-t-lg border-b border-gray-100" />
              <div className="flex" style={{height: '550px'}}>
                <div className="w-32 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 p-6 overflow-hidden rounded-bl-lg">
                  <div className="text-center mb-10">
                    <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto" />
                    <div className="h-2 rounded-full bg-blue-800" />
                  </div>
                  <div className="text-center mb-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
                    <div className="h-2 rounded-full bg-gray-300" />
                  </div>
                  <div className="text-center mb-10">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
                    <div className="h-2 rounded-full bg-gray-300" />
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto" />
                    <div className="h-2 rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="flex-1 py-6 px-8">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-2/3 px-4">
                      <div className="flex flex-wrap -mx-4 mb-10">
                        <div className="w-1/4 px-4">
                          <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                            <div className="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto" />
                            <div className="h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                        </div>
                        <div className="w-1/4 px-4">
                          <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                            <div className="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto" />
                            <div className="h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                        </div>
                        <div className="w-1/4 px-4">
                          <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                            <div className="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto" />
                            <div className="h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                        </div>
                        <div className="w-1/4 px-4">
                          <div className="text-center mb-10 bg-white shadow rounded-lg p-6">
                            <div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto" />
                            <div className="h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="h-32 percentage mb-10 pt-2">
                        <div className="h-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-64 mb-4 block" />
                        <div className="h-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-32 mb-4 block" />
                        <div className="h-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-40 mb-4 block" />
                        <div className="h-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-20 mb-4 block" />
                      </div>
                      <div className="w-full flex flex-wrap mb-6">
                        <div className="w-1/2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-wrap">
                        <div className="w-1/2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                            <div>
                              <div className="h-2 w-16 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 px-4">
                      <div className="rounded-lg shadow-lg p-6">
                        <div className="block w-12 h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-6" />
                        <svg height={150} width={150} viewBox="0 0 20 20" className="mx-auto mb-12">
                          <circle r={10} cx={10} cy={10} fill="#4299e1" />
                          <circle r={5} cx={10} cy={10} fill="transparent" stroke="#2b6cb0" strokeWidth={10} strokeDasharray="11 31.4" transform="rotate(-90) translate(-20)" />
                        </svg>
                        <div className="flex flex-wrap -mx-2 mb-10">
                          <div className="w-1/3 px-2">
                            <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                          <div className="w-1/3 px-2">
                            <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                          <div className="w-1/3 px-2">
                            <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between my-10">
                        <div>
                          <div className="h-2 w-10 bg-gray-300 rounded-full mb-2" />
                          <div className="h-2 w-16 bg-gray-300 rounded-full mb-2" />
                          <div className="h-2 w-8 bg-gray-300 rounded-full" />
                        </div>
                        <div>
                          <div className="ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2" />
                          <div className="ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2" />
                          <div className="ml-auto h-2 w-8 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                      <div className="text-right flex justify-end">
                        <div className="rounded-lg h-8 w-20 px-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-2" />
                        <div className="rounded-lg h-8 w-20 px-4 bg-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 md:hidden">
              <div className="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20" style={{borderRadius: '20px'}}>
                <div className="h-10 bg-white rounded-t-lg border-b border-gray-100" />
                <div className="flex" style={{height: '340px'}}>
                  <div className="w-16 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 px-2 py-6 overflow-hidden rounded-bl-lg">
                    <div className="text-center mb-6">
                      <div className="w-4 h-4 rounded-full bg-blue-800 mb-2 mx-auto" />
                      <div className="h-2 w-8 mx-auto rounded-full bg-blue-800" />
                    </div>
                    <div className="text-center mb-6">
                      <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                      <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
                    </div>
                    <div className="text-center mb-6">
                      <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                      <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
                    </div>
                    <div className="text-center">
                      <div className="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto" />
                      <div className="h-2 w-8 mx-auto rounded-full bg-gray-300" />
                    </div>
                  </div>
                  <div className="flex-1 py-6 px-4">
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-1/3 px-2">
                        <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                          <div className="w-4 h-4 rounded-full bg-green-600 mb-2 mx-auto" />
                          <div className="h-2 w-8 mx-auto rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                        </div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                          <div className="w-4 h-4 rounded-full bg-blue-600 mb-2 mx-auto" />
                          <div className="h-2 w-8 mx-auto rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                        </div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                          <div className="w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto" />
                          <div className="h-2 w-8 mx-auto rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 mb-6">
                      <div className="w-1/2 px-2">
                        <div className="shadow h-24 p-2 rounded-lg">
                          <div className="h-20 percentage pt-2">
                            <div className="h-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-24 mb-2 block" />
                            <div className="h-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-12 mb-2 block" />
                            <div className="h-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-20 mb-2 block" />
                            <div className="h-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 w-8 mb-2 block" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 px-2">
                        <div className="rounded-lg shadow px-2 py-2">
                          <div className="block w-8 h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-2" />
                          <div className="mb-2">
                            <svg height={50} width={50} viewBox="0 0 20 20" className="mx-auto">
                              <circle r={10} cx={10} cy={10} fill="#ddd" />
                              <circle r={5} cx={10} cy={10} fill="transparent" stroke="#eee" strokeWidth={10} strokeDasharray="11 31.4" transform="rotate(-90) translate(-20)" />
                            </svg>
                          </div>
                          <div className="flex flex-wrap -mx-2">
                            <div className="w-1/3 px-2">
                              <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                            </div>
                            <div className="w-1/3 px-2">
                              <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                            </div>
                            <div className="w-1/3 px-2">
                              <div className="block h-2 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-2">
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                          <div>
                            <div className="h-2 w-10 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                          <div>
                            <div className="h-2 w-10 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap mb-6">
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                          <div>
                            <div className="h-2 w-10 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-4" />
                          <div>
                            <div className="h-2 w-10 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex justify-end">
                      <div className="rounded-lg h-6 w-16 px-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-200 to-red-600 mr-2" />
                      <div className="rounded-lg h-6 w-16 px-4 bg-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
    </div>
    {/* Hero */}
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
      <Image alt='Box Office Image' width={200} height={200} src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      </div>
    </div>
    {/* Events */}
    <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-100 dark:text-white lg:text-4xl">Portfolio</h1>
          <p className="mt-4 text-center text-gray-100 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
            {
              data.map((item) => (
                <Link href={`/events/${item.id}`} passHref={true}>
                  <Image width={200} height={200} className='h-96 w-full rounded-lg object-cover' src={item.image} alt={item.title} />
                  <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-100 dark:text-white">{item.title}</h2>
                  <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">{item.description}</p>
                </Link>
              ))
            }
          </div>
        </div>
    </section>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default Home

export async function getServerSideProps() { 
  
  const { events_categories } = await import('/data/data.json')
  console.log(events_categories)

  return { 
    props: { 
      // props for your component 
      data : events_categories
    } 
  }
}