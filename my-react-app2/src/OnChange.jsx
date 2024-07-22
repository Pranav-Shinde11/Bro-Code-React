import react ,{useState} from 'react'

function Onchange (){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] =useState();

    function handlenamechange(event){
        setName(event.target.value);
    }

    function handleQuantitychange(event){
        setQuantity(event.target.value);
    }

    function handleCommentchange(event){
        setComment(event.target.value);
    }

    function handlePaymentchange(event){
        setPayment(event.target.value);
    }

    function handleShippingchange(event){
        setShipping(event.target.value);
    }

    return(
             <div>
                <input value={name} onChange={handlenamechange} placeholder='Enter Name'/>
                <p>Name : {name}</p>

                <input value={quantity} onChange={handleQuantitychange} type='number'/>
                <p>Quantity : {quantity}</p>

                <textarea value={comment}  onChange={handleCommentchange} placeholder='Enter Your Instructions Here'/>
                <p>Comment: {comment}</p>

                <select value={payment}  onChange={handlePaymentchange}> 
                    <option value="" >select an option</option>
                    <option value="Visa" >Visa</option>
                    <option value="Mastercard" >Mastercard</option>
                    <option value="UPI" >UPI</option>
                    <option value="Net Banking" >Net Banking</option>
                </select>
                <p>Payment Method:{payment}</p>


                <label>
                    <input type="radio" value="Pick Up"
                      checked ={shipping === "Pick Up"}
                      onChange={handleShippingchange} />
                    Pick Up</label>
        <br />
                <label>
                    <input type="radio" value="Deliver"
                    checked={shipping === "Deliver"}
                    onChange={handleShippingchange}/>
                    Deliver</label>
                    <p>Shipping Choice: {shipping}</p>
             </div>  
             
    )

}

export default Onchange