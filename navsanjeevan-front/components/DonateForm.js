import React from "react";
import { Label, TextInput, Button } from "flowbite-react";
import styles from "./components.module.css";
export const DonateForm = () => {
  return (
    <>
    <div className='text-cyan-600 text-5xl font-bold text-center'>
        <h1 >Donate Us</h1>
    </div>
    <div>
      <div >
        <div>
          <Label>Name</Label>
          <TextInput id="name" placeholder="Name" required></TextInput>
        </div>
        <div >
          <Label htmlFor="email">Email:</Label>
          <TextInput
            id="email"
            placeholder="name@flowbite.com"
            required
          ></TextInput>
        </div>
        <div >
          <Label id="Phone" placeholder="+91 ">
            Phone
          </Label>
          <TextInput></TextInput>
        </div>
        <div >
          <Label id="Address" placeholder="Enter Your Address" required>
            Address
          </Label>
          <TextInput></TextInput>
        </div>
        <div >
          <Label>Amount</Label>
          <TextInput
            id="Amount"
            placeholder="Enter Amount To Donate"
            required
          ></TextInput>
        </div>
        <div >
          <Label>Message</Label>
          <TextInput
            id="Message"
            placeholder="Enter Message"
            required
          ></TextInput>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <Button type="submit" className="w-full mx-20 my-5">
          Donate Now
        </Button>
      </div>
    </div>
    </>
  );
};
