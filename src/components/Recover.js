import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classess from "./style.module.css";

export class Recover extends PureComponent {
  render() {
    const { updatePrice, recoverPrice } = this.props;
    return (
      <div className={classess.mwb_recover}>
        <div className={`col-md-6 text-center ${classess.mwb_rec}`}>
          <svg
            className={classess.mwb_layer}
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            width='1.5em'
            height='1.5em'
          >
            <path
              d='M256,24C383.9,24,487.95,128.1,487.95,256S383.9,488,256,488,24,383.9,24,256,128.09,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z'
              fill='#5b5b5f'
            />
            <polygon
              points='403.99 286.2 403.99 225.8 286.2 225.8 286.2 108.02 225.79 108.02 225.79 225.8 108.03 225.8 108.03 286.2 225.79 286.2 225.79 403.98 286.2 403.99 286.2 286.2 403.99 286.2'
              fill='#5b5b5f'
            />
          </svg>
          <span>Recovery period</span>
          <svg
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className={`bi bi-exclamation-circle ${classess.mwb_layer_exc}`}
            fill='#808080'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
            />
            <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
          </svg>
        </div>
        <div className='col-md-6'>
          <input
            type='text'
            className={`form-control ${classess.mwb_medicare}`}
            value={
              recoverPrice !== "" ? parseInt(recoverPrice).toLocaleString() : ""
            }
            onChange={(e) => {
              updatePrice(e, "recoverTxt");
            }}
          />
        </div>
      </div>
    );
  }
}

Recover.propTypes = {
  updatePrice: PropTypes.func,
  recoverPrice: PropTypes.string,
};

export default Recover;
