import NavBar from "../components/Navbar";
export default function Contact() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Us</h1>
      <p>
        Email: info@yourcompany.com<br/>
        Phone: (123) 456-7890
      </p>
      <form>
        <div>
          <label>Name:</label><br/>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label><br/>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label><br/>
          <textarea name="message" rows="4" required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
      </form>
    </div>
  )
}