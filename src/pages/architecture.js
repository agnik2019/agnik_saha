import React from "react";
//import { Container, Row, Col } from "react-bootstrap";

import Table from 'react-bootstrap/Table';

import "./MovieDetails.css"



function Me() {
  return (
  
    <div>
            <h1 style={{ fontSize: "2.1em", paddingTop: "80px" , color:"wheat"}}>
            Computer Architecture
            </h1>


            
        
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Topic</th>
            <th>Details</th>
            <th>Slide</th>
            <th>References</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Introduction to VLSI design</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>BJTs and MOSFETs</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>NMOS and CMOS</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

          </tr>
        </tbody>
      </Table>
      
    </div>

    


    
  );
}

export default Me;
