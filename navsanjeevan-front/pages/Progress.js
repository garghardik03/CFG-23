import React, { useState } from "react";
import { Button, Modal, Card, Avatar, Badge } from 'flowbite-react';

const ProgressMarker = () => {

    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <div>
            <section class="bg-cover bg-center bg-no-repeat bg-[url('https://neilpatel.com/wp-content/uploads/fly-images/144347/progress-bar-1200x675-c.jpg')] bg-gray-700 bg-blend-multiply">

                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Progress Tracker
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        <div className="font-bold text-xl">The one stop for Tracking progress of all our Benificiaries</div>
                        Non-governmental organizations (NGOs) play a vital role in society, providing essential services to people in need. However, in order to be effective, NGOs need to be able to track their progress and measure their impact.
                    </p>
                </div>
            </section>

            <div>
                <div className="text-center m-[50px] font-bold text-3xl">Our Beneficiaries</div>
                <div className="flex m-[100px] gap-10 ">
                    <Card
                        className="max-w-sm h-500px p-[20px] gap-5"
                        href="#"
                    >
                        <div>
                            <Avatar
                                alt="avatar of Jese"
                                img="https://www.w3schools.com/w3images/avatar6.png"
                                rounded
                            />
                        </div>
                        <div className='text-center'>
                            <h5 className="text-2xl  text-gray-900  ">
                                <p className='font-bold p-2'>
                                    Mrs.Anjali Shah
                                </p>
                            </h5>

                            <p className='text-gray-900 text-left' >
                                "I have been donating to navjeevan for the past few years, and I am so glad that I do. They are doing amazing work to empower women and girls in our community. I have seen firsthand the impact that their programs have had on the lives of women and girls. "
                            </p>
                        </div>

                        <Button onClick={() => props.setOpenModal('default')}>View Progress Report</Button>
                        <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                            <Modal.Header >
                                <div className="flex justify-center">
                                    <p>Anjali's Report</p>
                                    <Badge color="success">
                                        Master
                                    </Badge>
                                </div>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                        companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                </div>
                                <div ><p className=" m-[10px] font-bold">Total Sessions Attended : 10</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => props.setOpenModal(undefined)}>Great</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>

                    <Card
                        className="max-w-sm h-500px p-[20px] gap-5"
                        href="#"
                    >
                        <div>
                            <Avatar
                                alt="avatar of Jese"
                                img="https://www.w3schools.com/w3images/avatar6.png"
                                rounded
                            />
                        </div>
                        <div className='text-center'>
                            <h5 className="text-2xl  text-gray-900  ">
                                <p className='font-bold p-2'>
                                    Mr.Akash Yadav
                                </p>
                            </h5>

                            <p className='text-gray-900 text-left' >
                                Akash has made excellent progress in the sewing training program. She has learned the basics of sewing, including how to use a sewing machine, how to measure and cut fabric, and how to sew different types of seams. She has also developed the skills necessary to sew garments, including how to take measurements, how to draft patterns, and how to sew garments from start to finish.


                            </p>
                        </div>

                        <Button onClick={() => props.setOpenModal('default')}>View Progress Report</Button>
                        <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                            <Modal.Header >
                                <div className="flex justify-center">
                                    <p>Akash's Report</p>
                                    <Badge color="warning">
                                        Imtermidiate
                                    </Badge>
                                </div>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Akash has made excellent progress in the sewing training program. She has learned the basics of sewing, including how to use a sewing machine, how to measure and cut fabric, and how to sew different types of seams. She has also developed the skills necessary to sew garments, including how to take measurements, how to draft patterns, and how to sew garments from start to finish.
                                    </p>
                                </div>
                                <div ><p className=" m-[10px] font-bold">Total Sessions Attended : 5</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => props.setOpenModal(undefined)}>Great</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>

                    <Card
                        className="max-w-sm h-500px p-[20px] gap-5"
                        href="#"
                    >
                        <div>
                            <Avatar
                                alt="avatar of Jese"
                                img="https://www.w3schools.com/w3images/avatar6.png"
                                rounded
                            />
                        </div>
                        <div className='text-center'>
                            <h5 className="text-2xl  text-gray-900  ">
                                <p className='font-bold p-2'>
                                    Ms. Devi Mehta
                                </p>
                            </h5>

                            <p className='text-gray-900 text-left' >
                                "I have been donating to navjeevan for the past few years, and I am so glad that I do. They are doing amazing work to empower women and girls in our community. I have seen firsthand the impact that their programs have had on the lives of women and girls. "
                            </p>
                        </div>

                        <Button onClick={() => props.setOpenModal('default')}>View Progress Report</Button>
                        <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                            <Modal.Header >
                                <div className="flex justify-center">
                                    <p>Devi's Report</p>
                                    <Badge color="failure">
                                        Beginner
                                    </Badge>
                                </div>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Akash has made excellent progress in the sewing training program. She has learned the basics of sewing, including how to use a sewing machine, how to measure and cut fabric, and how to sew different types of seams. She has also developed.
                                    </p>
                                </div>
                                <div ><p className=" m-[10px] font-bold">Total Sessions Attended : 1</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => props.setOpenModal(undefined)}>Great</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default ProgressMarker