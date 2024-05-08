import { useState } from "react";
import styles from "./Modal.module.css"
import { toast } from "react-toastify";
export const BookingBlock =(id)=>{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [bookingDate, setBookingDate] = useState(Date.now())
     const [comment, setComment]= useState('')
       const handleSearchChange = (event) => {
       
        if (event.currentTarget.id ==="name"){

            setName(event.currentTarget.value.toLowerCase());
        } if (event.currentTarget.id ==="email") {
             setEmail(event.currentTarget.value.toLowerCase());
        } if (event.currentTarget.id ==="bookingDate") {
             setBookingDate(event.currentTarget.value.toLowerCase());
        } if (event.currentTarget.id ==="comment") {
             setComment(event.currentTarget.value.toLowerCase());
        }
  };
    const booked =() =>{
      
toast.success("You booked your cumper successfully! We wish you amazing trip!")
setName("")
setEmail(" ")
setBookingDate(" ");
setComment(" ");
}
    return (
        <form className={styles.bookingForm} onSubmit={booked}>
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <input id = "name" type="text" placeholder="Name" value={name}  onChange={handleSearchChange} required/>
            <input id = "email" type="email" placeholder="Email" value={email} onChange={handleSearchChange}  required/>
            <input id = "bookingDate" type="date" placeholder="Booking date" value={bookingDate} onChange={handleSearchChange} required/>
             <input id = "comment" type="text" placeholder="Comment" value={comment} onChange={handleSearchChange}/>
<button type="submit">Send</button>
        </form>
    )
}