import styles from "./Modal.module.css"
export const BookingBlock =(id)=>{
    return (
        <form className={styles.bookingForm}>
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="date" placeholder="Booking date"/>
            <input type="text" placeholder="Comment" />
<button>Send</button>
        </form>
    )
}