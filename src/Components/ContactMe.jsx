import React, {useState, forwardRef } from 'react'

const ContactMe= forwardRef((props,ref)=> {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <div className='contactMe' ref={ref}>
        <div className='border'></div>
        <div className='contactMeHead'>
            <p className='contactMePara'>CONTACT ME</p>
        </div>
        <div className='border'></div>
        <form className='contact' onSubmit={handleSubmit}>
            <div className='nameANDemail'>
                <div className='contactname'>
                    <label htmlFor="name">Name:</label>     
                    <input  type="text" name="name" onChange={handleChange} required/>
                </div>
                <div className='contactEmail'>
                    <label htmlFor="email">Email Id:</label>     
                    <input  type="email" name='email' onChange={handleChange} required/>
                </div>
            </div>
            <div className='contactPhone'>
                <div>
                <label htmlFor="phoneNumber">Phone Number:</label>     
                <input  type="number" name='phoneNumber' onChange={handleChange} required />
                </div>
            </div>
            <div className='contactSubject'>
                <div>

                <label htmlFor="subject">Subject:</label>     
                <textarea name='subject' onChange={handleChange} required></textarea>
                </div>
            </div>
            <div className='contactMeSubmit'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
})
export default ContactMe;