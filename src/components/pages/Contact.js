import React, {useState, useRef} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const [rating, setRating] = useState(2);
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')

    emailjs.sendForm(
      "service_1vgi888",
      "template_3pvrmea",
      form.current,
      "OFqvJNeXiCbFvLRCF"
    ).then(
      result => console.log(result.text), setFormStatus("Send"),console.log(form.current),
      error => console.log(error.text)
    )

    e.target.reset();
  }
  return (
    <div className="container mt-5"  style={{height: '80vh'}}>
      <h2 className="mb-3">Contact us!</h2>
      <form onSubmit={onSubmit} ref={form}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" required />
        </div>  
        <div className="mb-3">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>        

        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>      

      </form>
      <div style={{height: "1rem"}}></div>
    </div>
  )
}
export default Contact