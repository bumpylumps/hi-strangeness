import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <h3>Contact form </h3>
      <div className='contact-form-container'>
        <h3>Got a Story request or ideas for topics? <br/>
        Let us know!</h3>

        <form action=''
              method="POST"
              name="contact-form"
              className='contact-form'
              id="contact-form">
          <input type="text"
            name="name"
            placeholder='Name'
            />
            <input type="text"
            name="email"
            placeholder="email"
            />
             <input type="subject"
            name="subject"
            placeholder="subject"
            />
            <textarea name='message'
                      placeholder='Message'
                      rows={5}/>
            <input type="button"
                value="Send"
            />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
