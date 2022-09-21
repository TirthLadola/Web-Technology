import './index.css';
import {useNavigate, useParams} from "react-router-dom"
function Home(){
    const navigate= useNavigate();
    return (
    <>
    <div className='homecontaint'>
        <h1 className='text-dark'>P R I N T E R</h1>
        <p className='text-dark'>"Printer is the one of the greatest invention ever."
        </p>
        <button onClick={()=>{
            navigate("/About")
          }} class="home-button">History of Printer<span> <i class="fa fa-arrow-right"></i></span> </button>
    </div>
    </>
    )
}

export default Home;