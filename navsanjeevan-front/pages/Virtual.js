import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import { Accordion } from 'flowbite-react';



function VideoPlayer() {
    const playerRef = useRef(null);
    return (
        <div>
            <section class="bg-cover bg-center bg-no-repeat bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21efrZAUVBbO0gj5Otmf-tStdNt1-bFE-9w&usqp=CAU')] bg-gray-700 bg-blend-multiply">

                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Welcome to our Virtual Training Dashboard
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Virtual vocational training is a great way for NGOs to provide their staff with the skills they need to be successful. By using videos, NGOs can deliver training that is engaging, informative, and accessible to people all over the world.
                    </p>
                </div>
            </section>

            <Accordion className='m-[100px]'>
                <Accordion.Panel>
                    <Accordion.Title className='font-semibold'>
                        Activists Training for Skill Developement
                    </Accordion.Title>

                    <Accordion.Content>
                        <div className='flex justify-center'>
                            <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=RiJxBzUxNYU"} controls={true} />
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='font-semibold'>
                        Activists Training for Agriculture Developement
                    </Accordion.Title>

                    <Accordion.Content>
                        <div className='flex justify-center'>
                            <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=9_Q4RBTd3ws"} controls={true} />
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='font-semibold'>
                        Activists Training for Women Developement
                    </Accordion.Title>

                    <Accordion.Content>
                        <div className='flex justify-center'>
                            <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=QMFQ__TqZgk"} controls={true} />
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>


                <Accordion.Panel>
                    <Accordion.Title className='font-semibold'>
                        Activists Training for Community Developement
                    </Accordion.Title>

                    <Accordion.Content>
                        <div className='flex justify-center'>
                            <ReactPlayer ref={playerRef} url={"https://www.youtube.com/watch?v=JvTwGNfnXI8"} controls={true} />
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

        </div>
    )
};
export default VideoPlayer;
