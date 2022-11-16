import React, {useState} from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const [rating, setRating] = useState(2);
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
      rating: rating,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5"  style={{height: '80vh'}}>
      <h2 className="mb-3">Contact us!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
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