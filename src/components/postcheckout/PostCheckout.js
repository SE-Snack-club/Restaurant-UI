import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdOutlineVerifiedUser } from 'react-icons/md';


const PostCheckout = () => {

    const [transactionData, setTransactionData] = useState(null);

    const userId = useSelector((state) => state.loginReducer.userInfo.userId);

    function AnimatedExample(props) {
        console.log(props.maxPrep);
        let maxTotalTime = 0;
        for (let item of props.maxPrep) {
            let totaltimeForcook = parseInt(item.itemCookTime) + parseInt(item.itemPrepTime);
            if (totaltimeForcook > maxTotalTime) {
                maxTotalTime = totaltimeForcook;
            }
        }
        //console.log(maxTotalTime);
        let timeLeft = new Date()
        let ptime = new Date(props.purchaseTime);
        //console.log(timeLeft,ptime,"timeleft");
        // console.log((timeLeft-ptime)/(1000*60),"timeleft");
        let timeleftFororder = parseInt((timeLeft - ptime) / (1000 * 60))
        return <ProgressBar animated min={props.min} max={maxTotalTime} now={timeleftFororder + 1} />;
    }

    const getTranasctions = async () => {
        try {
            let getrecentTransactions = await axios.get(`${process.env.REACT_APP_API_URL}/transaction/getRecentTransactions/${userId}`);
            console.log(getrecentTransactions.data, "get progress Data");
            setTransactionData(getrecentTransactions.data);
        }
        catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {

        getTranasctions();

    }, [])

    return (
        <>

            <div className="container mt-3">
                <div className="row mt-2">
                    <div className="col text-center">
                        <h2>Your order progress</h2>
                    </div>
                </div>
                {transactionData && transactionData.map((transaction, i) => <div key={i} className="card mt-2">

                    <div className="row text-center">
                        <div className="col">
                            <span style={{ color: "green",height:"200px" }}> <MdOutlineVerifiedUser /> </span>
                        </div>

                    </div>

                    <div className="row mt-2">

                        <div className="col offset-md-5">
                            <h4 className="text-success">Payment : {transaction.transaction.transactionStatus}  </h4>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-md-4">
                            <h6>Payment Ref# : {transaction.transaction.transactionId}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col offset-md-4">
                            <h6>Amount : $ {transaction.transaction.transactionTotal}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col offset-md-4">
                            <h6>Purchase Date : {new Date(transaction?.transaction?.transactionDate).toDateString()}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col offset-md-4">
                            <h6>Items purchased: </h6>
                            <ul>
                                {transaction.transaction.transactionItems.map((item, i) => <li key={i}> {item.itemName} </li>)}

                            </ul>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-10 offset-md-1">
                            <AnimatedExample min={0} max={60} maxPrep={transaction.menuDetails} purchaseTime={transaction.transaction.transactionDate} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col offset-md-1">
                            <p>prep/cook phase</p>
                        </div>
                        <div className="col offset-md-7">
                            <p>Ready to pick</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <p>Enjoy your meal</p>
                        </div>
                    </div>


                </div>)}


            </div>

        </>
    )

}

export default PostCheckout;