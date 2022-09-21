import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addstudent(){
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    return(
        <>
        
        <div className="form-container">
            <h1 class="mb-3 head text-light">Add Printer Details</h1>
        {/* <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Created At.." onChange={(e)=>{
                setData({...data,createdAt:e.target.value})}}></input>
                <label for="floatingInput">Created At..</label>
        </div> */}
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingPassword" placeholder="PrinterName" onChange={(e)=>{
                setData({...data,PrinterName:e.target.value})}}></input>
                <label for="floatingPassword">Enter Printer Name</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="PrinterImage" onChange={(e)=>{
                setData({...data,PrinterImage:e.target.value})}}></input>
                <label for="floatingPassword">Enter Printer Image</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="PrinterPrice" onChange={(e)=>{
                setData({...data,PrinterPrice:e.target.value})}}></input>
                <label for="floatingPassword">Enter Printer Price</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="PrinterModel" onChange={(e)=>{
                setData({...data,PrinterModel:e.target.value})}}></input>
                <label for="floatingPassword">Enter Printer Model</label>
        </div>
        <div class="form-floating mt-3">
            <input type="text" class="form-control" id="floatingPassword" placeholder="PrinterMaker" onChange={(e)=>{
                setData({...data,PrinterMaker:e.target.value})}}></input>
                <label for="floatingPassword">Enter Printer Maker</label>
        </div>

            <input type="button" className="add-button mt-3" value="Add Printer" onClick={()=>{
                fetch('https://632140c382f8687273ae92a3.mockapi.io/Printer/'
                ,{method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
                })
                .then((res)=>{
                    navigate('/Student');
                })
            }}></input>
         </div>
        </>
    )
}
export default Addstudent;