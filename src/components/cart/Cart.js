
import { useState } from 'react';
import logo from '../../logo.svg';

const Cart = () => {

    const [qnty,setQnty] = useState(1);
    // const []


    return (<>
        <div className="card mt-5">
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-center"> Cart</h1>
                        {["1", "2", "3", "4"].map(el =>
                            <div key={el} className="card  mt-2">
                                <div className="row ">
                                    <div className="col-md-3">
                                        <img height="90%" src={logo} alt="abc"></img>
                                    </div>
                                    <div className="col-md-3">
                                        <br></br>
                                        <br></br>
                                        <h3> Name </h3>
                                        <p className='d-flex align-items-center'>
                                            category
                                        </p>
                                    </div>
                                    <div className="col-lg-3 ">

                                        <br></br>
                                        <br></br>
                                        <h6 className=''> <p>Quantity</p></h6>
                                        <div className="btn-group" role="group">
                                            <button className="btn d-flex align-items-center btn-outline-primary btn-sm">+</button>
                                            &nbsp; 2 &nbsp;
                                            <button className="btn btn-sm btn-outline-danger d-flex align-items-center">-</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex align-items-center">
                                        <p> Price: $ 12 </p>
                                    </div>
                                    <div className="col-lg-1 d-flex align-items-center">

                                        <button type="button" className="btn btn-outline-danger">X</button>
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
                                <h3 className=''>ITEMS 3</h3>
                            </div>
                            <div className='col-md-6'>
                                <h3> $ 200 </h3>
                            </div>

                        </div>
                        <div className='row mt-3'>
                        <div className='col-md-6 '>
                            <h3 className=''>TAX</h3>
                        </div>
                        <div className='col-md-6'>
                            <h3> $ 11.1 </h3>
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
                                <h3>  Total Price : $ 500 </h3>
                            </div>
                        </div>

                        <div className='row mt-3'>
                        <div className='col'>
                        <button className='btn btn-primary'>Proceed to Checkout</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default Cart;