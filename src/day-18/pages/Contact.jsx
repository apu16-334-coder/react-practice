import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();


    function handleSubmit (e) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name</label><br />
                <input type="text" placeholder="type..."/><br />
                <label>Write Your Message</label><br />
                <input type="text" placeholder="type..."/><br /><br />
                <button type="submit">Submit</button>
            </form>

            <h2>Contact</h2>
            <p>GitHubLink: https://github.com/apu16-334-coder</p>
            <p>LinkedIn: https://www.linkedin.com/in/muhammad-apu-hossain/</p>
            <p>Gmail: mdapuhossain.dev@gmail.com</p>
        </>
    )
}

export default Contact;