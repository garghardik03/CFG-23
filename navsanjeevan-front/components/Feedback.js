import React, { useState, useEffect } from "react";
import { Button, Textarea, Label, TextInput } from 'flowbite-react';

export const Feedback = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        donor_UID: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (navigator.onLine) {
            localStorage.setItem("formData", JSON.stringify(formData));
            console.log(formData);
            setFormData({
                fullName: "",
                email: "",
            });
        } else {
            const queuedData = JSON.parse(localStorage.getItem("queuedData")) || [];
            queuedData.push(formData);
            localStorage.setItem("queuedData", JSON.stringify(queuedData));
            console.log(formData);
            setFormData({
                fullName: "",
                email: "",
            });
        }
    };

    useEffect(() => {
        const syncData = () => {
            if (navigator.onLine) {
                const queuedData = JSON.parse(localStorage.getItem("queuedData"));
                if (queuedData && queuedData.length > 0) {
                    console.log("Syncing data:", queuedData);

                    localStorage.removeItem("queuedData");
                }
            }
        };

        window.addEventListener("online", syncData);

        return () => {
            window.removeEventListener("online", syncData);
        };
    }, []);
    return (
        <div className="container">
            <div className="m-10 font-extrabold leading-none text-center md:text-5xl lg:text-6xl">
                We'll love to hear back from you !!
            </div>

            <div className="flex justify-evenly">

                <div className='flex items-center ' >
                    <img className="h-[30em] blur-sm " src="https://bhumi.ngo/wp-content/uploads/2022/08/HOME-FELLO-CHILDREN.webp" alt=""

                    />
                </div>

                <form className="flex max-w-md flex-col gap-3 w-screen " onSubmit={handleSubmit}>
                    {/* Name */}

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Full Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            defaultValue={formData.fullName}
                            placeholder="Enter your name..."
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email ID"
                            />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            defaultValue={formData.email}
                            placeholder="Enter your Email Id..."
                            onChange={handleChange}
                        />
                    </div>

                    {/* donor_id */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="donar_id"
                                value="Donar Id"
                            />
                        </div>
                        <TextInput
                            id="donor_UID"
                            required
                            type="text"
                            placeholder="Enter your Donor UId..."
                        />
                    </div>

                    {/* message */}
                    <div
                        className="max-w-md"
                        id="textarea"
                    >
                        <div className="mb-2 block">
                            <Label
                                htmlFor="message"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="message"
                            placeholder="Leave a FeedBack..."
                            required
                            rows={3}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Feedback;