import {useRouter} from "next/router";
import React, { useRef, useState } from 'react';
import Navbar from "../../../components/Navbar";
import Image from "next/image";

const SinglePageEvent = ({ data }) => {

  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage('Please introduce a correct email address');
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-yellow-200">{ data.title }</h1>
      <Image src={data.image} alt={data.title} width={700} height={400} />
      <p className="text-2xl text-white">{ data.description }</p>

      {/* Subscribe email */}
      <form method="POST" action="" onSubmit={onSubmit} className="email_registration flex flex-col items-center justify-center w-6/12 m-auto h-full p-4 mt-4 bg-gray-800 rounded-md">
        <h2 className="text-2xl font-bold text-yellow-200">Subscribe to our newsletter</h2>
        <p className="text-xl text-white">Get the latest news and updates</p>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <input type="email" ref={inputEmail} id={'email'} placeholder="Enter your email" className="w-full p-2 text-black bg-gray-200 rounded-md" />
          <button type="submit" className="px-4 py-2 mt-4 text-white bg-yellow-200 rounded-md">Subscribe</button>
        </div>
      </form>

    
    </div>
  );
}

export default SinglePageEvent;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const paths = allEvents.map((event) => ({
    params: { 
      cat: event.city,
      id: event.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context?.params?.id;
  const data = allEvents.filter((event) => event.id === id);
  console.log(data);
  return {
    props: {
      data: data[0],
    },
  };
}