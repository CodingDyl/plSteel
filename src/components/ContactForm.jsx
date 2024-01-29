import React, { useRef, useState} from 'react'
import { styles } from '../styles';

const ContactForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_9pvw52e',
                'template_li79xnj',
                {
                    from_name: form.name,
                    to_name: "mPowerRatings",
                    from_email: form.email,
                    to_email: "info@mpowerratings.co.za",
                    message: form.message,
                },
                'Oey1QJ3g-VzBNrF_V'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. We will get back to you as soon as possible.");

                    setForm({
                        company: "",
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };
  return (
    <div className={`${styles.paddingX} mt-5 bg-secondary rounded-2xl`} >
            <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 mb-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-tertiary font-medium mb-4'>Company</span>
                        <input
                            type='text'
                            name='company'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Company"
                            className='bg-primary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-tertiary font-medium mb-4'>Name</span>
                        <input
                            type='text'
                            name='company'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className='bg-primary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-tertiary font-medium mb-4'>Phone Number</span>
                        <input
                            type='text'
                            name='company'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className='bg-primary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-tertiary font-medium mb-4'>Email</span>
                        <input
                            required
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className='bg-primary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-tertiary font-medium mb-4'>Your Message</span>
                        <textarea
                            required
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Want to find out more? write us a message...'
                            className='bg-primary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
  )
}

export default ContactForm