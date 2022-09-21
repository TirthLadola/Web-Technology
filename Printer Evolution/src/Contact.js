import './index.css';
import {useNavigate, useParams} from "react-router-dom"
function Contact(){
    return(
    <>
        <div className='contactfrom'>
            <h1 className='conhead text-light'>Contact Us</h1>
            <h6>You can contact us and give you feedback.</h6>
            <div className='conform'>
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control formcon mt-4" placeholder="Name" aria-label="First name"></input>
                    <label for="floatingTextarea2">Name</label>
                    </div>
                    <div class="col">
                    <input type="email" class="form-control formcon mt-4" placeholder="Email" aria-label="Email"></input>
                    <label for="floatingTextarea2">Email</label>
                    </div>
                </div>
                <div class="form-floating mt-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2">Massage</label>
                </div>
                <div className='submit-button-container'>
                    <button type="button" class="btn btn-primary submit-button">Submit</button>
                    <p className='text-light mt-3'>_______________________________________________________</p>
                </div>
                <div className='content-contant'>
                    <p className='text-light'>T I R T H &nbsp;&nbsp; L A D O L A<br/>
                    <a href='#'>Darshan University</a><br/>
                    Rajkot.
                    </p>
                </div>
                <div>
                <i class="fa-brands fa-instagram"></i>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default Contact;