'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    console.log(form);
    
    const email = (e: FormEvent) => {
        e.preventDefault();
        
        if (form.current) {
            emailjs
                .sendForm('service_z4e1eyk', 'template_201lb4m', form.current, '409e08hDdmtDvgjBa')
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert('Sent Succesfully!')
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        alert('FAILED...')
                    }
                );
        }
    }

    return (
        <div className='flex flex-col items-center m-20 mb-20 gap-8'>
            <h1 className="text-4xl font-semibold mt-14">Contact Me</h1>
            <p className='text-xl'>Please fill out the form below to discuss any work opportunities.</p>
            <form className='flex flex-col gap-5' ref={form} onSubmit={email}>
                <label>Name</label>
                <input className='border rounded-sm h-10 w-96 border-black outline-none p-4' type="text" name="to_name" />
                <label>Email</label>
                <input className='border rounded-sm h-10 w-96 border-black outline-none p-4' type="email" name="from_name" />
                <label>Message</label>
                <textarea name="message" className='border border-black p-4 outline-none'/>
                <input className='flex items-center border rounded-sm h-14 w-96 outline-none text-white' style={{ background: form.current === null ? '#D1D1D1' : '#90D%FF' }} type="submit" value="Send" />
            </form>
        </div>
    );
}
