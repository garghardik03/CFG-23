import React from 'react'
import { Card, Avatar } from 'flowbite-react';

const Testimonials = () => {
  return (

    <div>
      <section className="bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=')] bg-gray-700 bg-blend-multiply">
        
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Our Honest Testimonials
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          771 million people lack basic access to clean and safe drinking water. We've been on a mission to end the water crisis since 2006, and with the help of generous supporters like you, we're getting closer every day
          </p>
        </div>
      </section>

      <div className='flex justify-center gap-5 my-10 flex-wrap' >

        <Card
          className="max-w-sm h-500px "
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
        </Card>

        <Card
          className="max-w-sm h-500px "
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
        </Card>

        <Card
          className="max-w-sm h-500px "
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
        </Card>

      </div>
    </div>
  );
}
export default Testimonials


