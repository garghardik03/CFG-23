'use client';
import React from 'react'
import { Button, Card ,Carousel} from 'flowbite-react';

function Programmes() {
    return (
        <div >
       
   
            
        <div
            className='flex flex-wrap space-y-4'>
            <div>
                <Card imgAlt = "..." imgSrc = "women.jpeg" className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-16 bg-gradient-to-r from-amber-100 to-amber-400 px-0.5 py-1">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p >
                            WOMEN EMPOWERMENT
                        </p>
                        <p >
                            (Self Help Groups)
                        </p>

                    </h5>
                    <p className="font-normal text-white-700 dark:text-white-400">

                        Navsanjeevan social trust works with women for the overall development of women through the self-help groups since 2013. A total of <b>17 villages </b> and <b>230 Self-help groups </b>were formed and training was provided to <b>2500</b> women. The organization helps the women to start small skills industries as well as provides technical support for business proposal preparation etc.to start their own businesses.
                    </p>




                </Card>
            </div>
            <div>
                <Card imgAlt="..." imgSrc='tree.jpeg' className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-16 bg-gradient-to-r from-amber-400 to-orange-300 px-0.5 py-1 mt-16">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p >
                            AGRICULTURAL DEVELOPMENT
                        </p>
                        

                    </h5>
                    <p className="font-normal text-white-700 dark:text-white-400">
                    The trust organized a tree plantation program at Susgaon, Pune city. We have done <b>1500 tree plantation programs</b> on 15 August. Tree Plantation is one of the best activities for making the planet greener, livelier and healthier. Planted trees help our biodiversity, ensure the supply of oxygen for the next generations, and provide us with various resources.
                    </p>




                </Card>
            </div>
            <div>
                <Card imgAlt='...' imgSrc='youth.jpeg' className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-16 bg-gradient-to-r from-orange-300 to-orange-400 px-0.5 py-1">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p >
                           YOUTH DEVELOPMENT
                        </p>
                        

                    </h5>
                    <p className="font-normal text-white-700 dark:text-white-400">

                    Skill Education Navsanjeevan Planned to work with youth through vocational education. We have started a vocational training program at the school level in the Pune district with 6th to 12th std with affiliation with DEVT and NSDC for certification purposes. The program also focuses on the internship model of gainfully learning employability skills through experiences in the real world of work.
                    </p>




                </Card>
            </div>
            </div>
          
        
        </div>

    )
}

export default Programmes;
