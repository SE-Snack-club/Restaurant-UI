
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setcheckoutInfo } from '../../redux-part/reducers/loginReducer';
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [cartMsg,setCartMsg] = useState(false);
    const [cartCheckItems,setCartItems]=useState([]);
    const [beforeTaxBill,setBeforeTaxBill] = useState(0);
    const [totalItemscount,setTotalItemsCount] = useState(0);
    const [taxAmount,setTaxAmount] = useState(0);
    const [finalBill,setFinalBill] = useState(0);
    
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const cartCount = useSelector((state) => state.loginReducer.cartVal);
    const userId = useSelector((state) => state.loginReducer.userInfo.userId);
    console.log(userId,"UserID");
//   const dispatch = useDispatch();
        console.log(cartCount);

        useEffect(() => {
            
            const getCartItems=async()=>{
            try{
                let cartItems=await axios.get(`${process.env.REACT_APP_API_URL}/cart/myitems/${userId}`);
                if(cartItems.data && cartItems.data.length>0){

                    setCartItems(cartItems.data);
                    setCartMsg(false);
                    handleCheckoutInfo(cartItems.data);
                   
                }   
                else{
                    console.log("exec false len <0");
                    setCartMsg(true);
                }
            }
            catch(e){
                console.log(e,"error res");
                setCartMsg(true);
            }
            }
        

            getCartItems();
            return () => {
                
            };
        }, []);

        const handleCheckoutInfo=(cartItems)=>{
            let sumofTotal=0;
            for(let cartItem of cartItems){
                sumofTotal+= parseInt(cartItem.totalPrice);
            }
            setBeforeTaxBill(sumofTotal);
            setTotalItemsCount(cartItems.length);
            setTaxAmount((sumofTotal*0.1).toFixed(2));
            setFinalBill( parseInt(sumofTotal)+ parseFloat((sumofTotal*0.1).toFixed(2)));
        }

        const handleCartIncrement =async(e,cartId)=>{
            try{
            let increaseCartQty= await axios.post(`${process.env.REACT_APP_API_URL}/cart/increaseQty`,{cartId,userId});
            if(increaseCartQty.data.length>0){
                
                setCartItems(increaseCartQty.data);
                setCartMsg(false);
                handleCheckoutInfo(increaseCartQty.data);
            }
        }
            catch(e){
                setCartMsg(true); //show cart empty
                console.log(e,"error");
            }
        }

        const handleCartDecrement = async(e,cartId)=>{
            try{
                let increaseCartQty= await axios.post(`${process.env.REACT_APP_API_URL}/cart/decreaseQty`,{cartId,userId});
                if(increaseCartQty.data.length>0){
                    
                    setCartItems(increaseCartQty.data);
                    setCartMsg(false);
                    handleCheckoutInfo(increaseCartQty.data);
                }
            }
                catch(e){
                    setCartMsg(true); //show cart empty
                    console.log(e,"error");

                }
        }

        const handleDeleteItem = async(e,cartId)=>{
            try{
                let deleteCartItem = await axios.delete(`${process.env.REACT_APP_API_URL}/cart/deleteCartItem`,{data:{cartId,userId}});
                if(deleteCartItem.data.length>0){
                    setCartItems(deleteCartItem.data);
                    setCartMsg(false);
                    handleCheckoutInfo(deleteCartItem.data);
                }
            }
            catch(e){
                setCartMsg(true);
                console.log(e, "delete error");
            }
        }

        const saveCheckoutInfo = async(e)=>{

            let checkoutData= {
                userId:userId,
                cartItems:cartCheckItems,
                totalBill:finalBill
            }

            dispatch(setcheckoutInfo(checkoutData));
            navigate("/checkout");

        }

    return (<>
        <div className="card mt-5">
            <div className="container mt-3 mb-3">
            {cartMsg===true? <h1>Cart is empty</h1>:
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-center"> Cart</h1>
                        { cartCheckItems && cartCheckItems.map(el =>
                            <div key={el.cartId} className="card  mt-2">
                                <div className="row ">
                                    <div className="col-md-3">
                                        <img height={170} width="100%" src={el.itemImage} alt="abc"></img>
                                    </div>
                                    <div className="col-md-3">
                                        <br></br>
                                        <br></br>
                                        <h6> {el.itemName} </h6>
                                        <p className='d-flex align-items-center'>
                                            {el.itemCategory}
                                        </p>
                                    </div>
                                    <div className="col-lg-3 ">

                                        <br></br>
                                        <br></br>
                                        <h6 className=''> <p>Quantity</p></h6>
                                        <div className="btn-group" role="group">
                                            <button className="btn d-flex align-items-center btn-outline-primary btn-sm" onClick={(e)=>{handleCartIncrement(e,el.cartId)}} >+</button>
                                            &nbsp; {el.itemQuantity} &nbsp;
                                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center" onClick={(e)=>{handleCartDecrement(e,el.cartId)}}>-</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex align-items-center">
                                        
                                    <span><h6>Price</h6> $ {el.totalPrice}</span>
                                    </div>
                                    <div className="col-lg-1 d-flex align-items-center">

                                        <button type="button" className="btn btn-outline-danger" onClick={(e)=>{handleDeleteItem(e,el.cartId)}}>X</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">

                        <h3 className="text-center"> Summary</h3>
                        <hr></hr>
                        <div className='row '>
                            <div className='col-md-6 '>
                                <h3 className=''>ITEMS {totalItemscount}</h3>
                            </div>
                            <div className='col-md-6'>
                                <h3> $ {beforeTaxBill} </h3>
                            </div>

                        </div>
                        <div className='row mt-3'>
                        <div className='col-md-6 '>
                            <h3 className=''>TAX</h3>
                        </div>
                        <div className='col-md-6'>
                            <h3> $ {taxAmount} </h3>
                        </div>

                    </div>
                        <div className='row mt-5'>
                            <div className='col'>
                                <h3>Enter promocode</h3>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col'>
                                <input type="text" className='form-control'></input>
                            </div>
                        </div>
                        <hr className='mt-5'></hr>
                        <div className='row'>
                            <div className='col'>
                                <h3>  Total Price : $ {finalBill} </h3>
                            </div>
                        </div>

                        <div className='row mt-3'>
                        <div className='col'>
                        <button className='btn btn-primary' onClick={(e)=>{saveCheckoutInfo(e)}} >Proceed to Checkout</button>
                        </div>
                        </div>
                    </div>
                </div>
                }
            </div>

        </div>
    </>)
}
export default Cart;