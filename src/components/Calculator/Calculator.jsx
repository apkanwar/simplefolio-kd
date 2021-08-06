import React from 'react';
import { Container } from 'react-bootstrap';

const Calculator = () => {
  //   useEffect(() => {
  //
  //   }, []);

  return (
    <section id="calculator">
      <Container>
        <div className="project-wrapper">
          <h2 className="title">Mortage Calculator</h2>
          <div id="payment-plan" className="content">
            <div className="calcInput">
              <h3 className="input_heading">
                Mortgage Amount
              </h3>
              <div className="amount">
                <div className="icon_left">$</div>
                <input
                  type="number"
                  placeholder="100000"
                  className="amount_input_right amount_input"
                />
              </div>
            </div>

            <div className="calcInput">
              <h3 className="input_heading">
                Interest Rate
              </h3>
              <div className="amount">
                <input
                  type="number"
                  placeholder="5.00"
                  className="amount_input_left amount_input"
                />
                <div className="icon_right">%</div>
              </div>
            </div>

            <div className="calcInput">
              <h3 className="input_heading">
                Amortization Period
              </h3>
              <div className="amount">
                <select className="amount_input">
                  <option className="input_select" value="1">1 Year</option>
                  <option className="input_select" value="2">2 Years</option>
                  <option className="input_select" value="3">3 Years</option>
                  <option className="input_select" value="4">4 Years</option>
                  <option className="input_select" value="5">5 Years</option>
                  <option className="input_select" value="6">6 Years</option>
                  <option className="input_select" value="7">7 Years</option>
                  <option className="input_select" value="8">8 Years</option>
                  <option className="input_select" value="9">9 Years</option>
                  <option className="input_select" value="10">10 Years</option>
                  <option className="input_select" value="11">11 Years</option>
                  <option className="input_select" value="12">12 Years</option>
                  <option className="input_select" value="13">13 Years</option>
                  <option className="input_select" value="14">14 Years</option>
                  <option className="input_select" value="15">15 Years</option>
                  <option className="input_select" value="16">16 Years</option>
                  <option className="input_select" value="17">17 Years</option>
                  <option className="input_select" value="18">18 Years</option>
                  <option className="input_select" value="19">19 Years</option>
                  <option className="input_select" value="20">20 Years</option>
                  <option className="input_select" value="21">21 Years</option>
                  <option className="input_select" value="22">22 Years</option>
                  <option className="input_select" value="23">23 Years</option>
                  <option className="input_select" value="24">24 Years</option>
                  <option selected className="input_select" value="25">25 Years</option>
                  <option className="input_select" value="26">26 Years</option>
                  <option className="input_select" value="27">27 Years</option>
                  <option className="input_select" value="28">28 Years</option>
                  <option className="input_select" value="29">29 Years</option>
                  <option className="input_select" value="30">30 Years</option>
                </select>
                &emsp;
                <select className="amount_input">
                  <option className="input_select" value="0"></option>
                  <option className="input_select" value="1">1 Month</option>
                  <option className="input_select" value="2">2 Months</option>
                  <option className="input_select" value="3">3 Months</option>
                  <option className="input_select" value="4">4 Months</option>
                  <option className="input_select" value="5">5 Months</option>
                  <option className="input_select" value="6">6 Months</option>
                  <option className="input_select" value="7">7 Months</option>
                  <option className="input_select" value="8">8 Months</option>
                  <option className="input_select" value="9">9 Months</option>
                  <option className="input_select" value="10">10 Months</option>
                  <option className="input_select" value="11">11 Months</option>
                </select>
              </div>
            </div>

            <div className="calcInput">
              <h3 className="input_heading">
                Payment Frequency
              </h3>
              <div className="amount">
                <select className="amount_input">
                  <option className="input_select" value="AW">Accelerated Weekly</option>
                  <option className="input_select" value="W">Weekly</option>
                  <option className="input_select" value="ABW">Accelerated Bi-Weekly</option>
                  <option className="input_select" value="BW">Bi-Weekly</option>
                  <option className="input_select" value="SM">Semi-Monthy</option>
                  <option selected className="input_select" value="M">Monthly</option>
                </select>
              </div>
            </div>

            <div className="calcInput">
              <h3 className="input_heading">
                Term
              </h3>
              <div className="amount">
                <select className="amount_input">
                  <option className="input_select" value="1">1 Year</option>
                  <option className="input_select" value="2">2 Years</option>
                  <option className="input_select" value="3">3 Years</option>
                  <option className="input_select" value="4">4 Years</option>
                  <option selected className="input_select" value="5">5 Years</option>
                  <option className="input_select" value="6">6 Years</option>
                  <option className="input_select" value="7">7 Years</option>
                  <option className="input_select" value="8">8 Years</option>
                  <option className="input_select" value="9">9 Years</option>
                  <option className="input_select" value="10">10 Years</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Calculator;
