// Contact page style
import '../style/contact.scss'
function Contact(){
    return(
        <div className='contactCon'>
            <section className='contact'>
                <div className='contactIntro'>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me if you have anything in mind.</p>
                </div>
                <form className='contactForm'>
                    <div className='formRow'>
                        <div className='formGroup'>
                            <label for='first_name'>First Name</label>
                            <input type='text' name='first_name' id='first_name' placeholder='Enter your First Name'/>
                        </div>
                        <div className='formGroup'>
                            <label for='last_name'>Last Name</label>
                            <input type='text' name='last_name' id='last_name' placeholder='Enter your Last Name'/>
                        </div>
                    </div>
                    <div className='formGroup'>
                        <label for='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder='yourname@email.com'/>
                    </div>
                    <div className='formGroup'>
                        <label for='message'>Message</label>
                        <textarea 
                            id='message' 
                            name='message' 
                            rows='8'
                            placeholder="Send me a message, I'll reply as soon as possible"
                        >

                        </textarea>
                    </div>
                    <div className='checkGroup'>
                        <input type='checkbox' id='checked' name='checked' value='true'/>
                        <label for='checked'>You agree to provide your data to, Okeibunor Emmanuel who may contact you</label>
                    </div>
                    <input type='submit' id='btn__submit' value='Send Message'/>
                </form>
            </section>
        </div>
    )
}

export default Contact;