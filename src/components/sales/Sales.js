
import React from "react";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";


const Sales=()=>{
    return(
    <div>

    <MDBCol lg='7'>
      <MDBChart
        type='line'
        data={{
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'Traffic',
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
          ],
        }}
      />
    </MDBCol>
 </div>
    )}
export default Sales;