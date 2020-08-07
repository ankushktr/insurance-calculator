import React, { Component } from "react";
import Recover from "./Recover";
import Chart from "./charts/Chart";
import classess from "./style.module.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mwbTxt1: "",
      mwbTxt2: "",
      mwbTxt3: "",
      mwbTxt4: "",
      mwbTxt5: "",
      recoverTxt: "",
      typingTimeout: 0,
    };
  }

  changePriceHandler = (e, type) => {
    e.persist();
    const { typingTimeout } = this.state;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    this.setState({
      typingTimeout: setTimeout(() => {
        const regexp = /^[0-9\b]+$/;
        if (
          (e.target.value === "" ||
            regexp.test(e.target.value.replace(/,/g, ""))) &&
          e.target.value.replace(/,/g, "").length < 11
        ) {
          this.setState({ [type]: e.target.value.replace(/,/g, "") });
        }
      }, 3000),
    });
  };

  render() {
    const {
      mwbTxt1,
      mwbTxt2,
      mwbTxt3,
      mwbTxt4,
      mwbTxt5,
      recoverTxt,
    } = this.state;
    return (
      <section className='pt-4 pb-0 text-dark'>
        <div className='container'>
          <div className='row mb-0'>
            <div className='col-md-4'>
              <div>
                <span>Desired replacement income (after-tax)</span>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className={`bi bi-exclamation-circle ${classess.mwb_list_svg}`}
                  fill='#808080'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                  />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <label data-domain='/ month' data-symbol='$'>
                  <input
                    type='text'
                    defautvalue={
                      mwbTxt1 !== "" ? parseInt(mwbTxt1).toLocaleString() : ""
                    }
                    className='form-control mt-2 pl-4'
                    onChange={(e) => this.changePriceHandler(e, "mwbTxt1")}
                  />
                </label>
              </div>

              <div className='mt-3'>
                <span>Out-of-pocket healthcare expenses</span>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className={`bi bi-exclamation-circle ${classess.mwb_list_svg}`}
                  fill='#808080'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                  />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <label data-symbol='$'>
                  <input
                    type='text'
                    className='form-control mt-2 pl-4'
                    defautvalue={
                      mwbTxt2 !== "" ? parseInt(mwbTxt2).toLocaleString() : ""
                    }
                    onChange={(e) => this.changePriceHandler(e, "mwbTxt2")}
                  />
                </label>
              </div>

              <div className='mt-3'>
                <span>Home modification expenses</span>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className={`bi bi-exclamation-circle ${classess.mwb_list_svg}`}
                  fill='#808080'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                  />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <label data-symbol='$'>
                  <input
                    type='text'
                    className='form-control mt-2 pl-4'
                    defautvalue={
                      mwbTxt3 !== "" ? parseInt(mwbTxt3).toLocaleString() : ""
                    }
                    onChange={(e) => this.changePriceHandler(e, "mwbTxt3")}
                  />
                </label>
              </div>

              <div className='mt-3'>
                <span>Medical homecare expenses</span>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className={`bi bi-exclamation-circle ${classess.mwb_list_svg}`}
                  fill='#808080'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                  />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <label data-domain='/ month' data-symbol='$'>
                  <input
                    type='text'
                    className='form-control mt-2 pl-4'
                    defautvalue={
                      mwbTxt4 !== "" ? parseInt(mwbTxt4).toLocaleString() : ""
                    }
                    onChange={(e) => this.changePriceHandler(e, "mwbTxt4")}
                  />
                </label>
              </div>

              <div className='mt-3'>
                <span>Other expenses (transport, childcare, etc)</span>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className={`bi bi-exclamation-circle ${classess.mwb_list_svg}`}
                  fill='#808080'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                  />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <label data-domain='/ month' data-symbol='$'>
                  <input
                    type='text'
                    className='form-control mt-2 pl-4'
                    defautvalue={
                      mwbTxt5 !== "" ? parseInt(mwbTxt5).toLocaleString() : ""
                    }
                    onChange={(e) => this.changePriceHandler(e, "mwbTxt5")}
                  />
                </label>
              </div>
            </div>

            <div className='col-md-8 pb-3'>
              <Recover
                updatePrice={this.changePriceHandler}
                recoverPrice={recoverTxt}
              />
              <Chart mwbDetails={this.state} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default List;
