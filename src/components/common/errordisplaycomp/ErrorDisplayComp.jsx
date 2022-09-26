
import React  from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';


const ErrorDisplayComp =()=>{

    return(
        <>
         <Alert variant="danger"  >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          There is no data avaiable for your request.
        </p>
      </Alert>
      </>
    )

}

export default ErrorDisplayComp;