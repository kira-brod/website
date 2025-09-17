'use client'
import React, { useState } from 'react';
import Link from "next/link"

export default function Login() {
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [state, setState] = useState('hidden')

    const password = "123hello"



    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted text:', text);
        setSubmitted(text);

        if (text == password) {
            setState("");
        }

        // You can send this data to an API or perform other actions
    };

    return (
        <div className='mx-auto max-w-5xl'>
            <h1 className="flex justify-center mt-20">Enter Password</h1>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center mt-10'>
                <textarea
                    id="myTextarea"
                    value={text}
                    onChange={handleChange}
                    rows="3" // Optional: specify default height
                    cols="50" // Optional: specify default width
                    className='border'
                />
                <button type="submit" className='mt-5' >Submit</button>
            </form>

            <p>{submitted}</p>

            <Link href="/work/palantir/projects" className = {state}>
                <p>Link to project</p>
            </Link>
        </div>


    )
}