import  {useEffect, useState}  from "react";
import  {useNavigate, useParams}  from "react-router-dom"
import './index.css';

function Studentdetails(){
    let param = useParams();
    const [data,setdata]=useState([]);
    const  navigate= useNavigate();
    useEffect(()=>{
        fetch('https://632140c382f8687273ae92a3.mockapi.io/Printer/' + param.id,{method:"GET"}).then((res)=>{
            return  res.json();
        }).then((res)=>{
            setdata(res)
            console.log(res);
        });
    },[])

    return(<>
      <section class="text-gray-600 body-font mainContainer">
        <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-augmented-reality-urban-modeling-image_1091516.jpg"/>
        </div>
        <div  class="flex flex-col sm:flex-row mt-10">
        <div  class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div class="inline-flex items-center justify-center">
            <img src={data.PrinterImage} className="imagede"></img>
        </div>
        <div class="flex flex-col items-center text-center justify-center">
            <h5 class="font-medium title-font mt-4 text-gray-900 text-lg">{data.PrinterName}</h5>
            <h3 style={{textAlign:"center",color:"tomato",textDecoration:"none"}}>{data.rollno}</h3>
            <div  class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <h6 style={{textAlign:"center"}} className="text-light">{data.city}</h6>
            <h6 style={{textAlign:"center"}} className="text-light">{data.PrinterModel}</h6>
            <p class="text-base text-light">PrinterMaker : {data.PrinterMaker}</p>
        </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-light">{data.PrinterDecription}</p>
          <p id='create' className="text-light">{data.createdAt}</p>
          <div className="icons">
                  <i class="fa fa-instagram" style={{fontSize:"20px",color:"gray"}}/>
                  <i class="fa fa-facebook-f" style={{fontSize:"20px",color:"gray"}}/>
                  <i class="fa fa-linkedin" style={{fontSize:"20px",color:"gray"}}/>
                  </div>

          {/* -----------------DELETE API----------------- */}
          <button onClick={()=>{
             fetch('https://632140c382f8687273ae92a3.mockapi.io/Printer/' + param.id,{method:"DELETE"})
             .then((res)=>{
              navigate('/Student')
             })
           }} class="delete-button m-2"><span style={{fontSize:'15px'}}>&#10060;</span>DELETE</button>
          {/* ------------EDIT API------------ */}
          <button onClick={()=>{
            navigate('../Student/EditStudent/' + param.id);
          }} class="edit-button m-4"><span style={{fontSize:'18px'}}>&#9998;</span> EDIT</button>

        </div>
        </div>
        </div>
        </div>
      </section>
    </>)
}

export default Studentdetails;

// "https://www.infosensedigital.ai/images/ai-ml-banner.png"