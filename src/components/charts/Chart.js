import React from "react";
import PropTypes from "prop-types";
import { otherExpenses, inflationRate, chartHeight } from "constant/Expenses";
import classess from "./chart.module.css";

function Chart(props) {
  const {
    mwbDetails,
    mwbDetails: { recoverTxt },
  } = props;

  const result = Object.values(mwbDetails).filter(
    (word, index) =>
      word.length > 0 && index < Object.values(mwbDetails).length - 1
  );

  let listSum = 0,
    costToday = 0,
    costTenYears = 0,
    costList = 0,
    constListInflamtion = 0;

  if (result.length > 0) {
    listSum = result.reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue)
    );

    costList = listSum - otherExpenses;
    constListInflamtion =
      recoverTxt.length > 0
        ? (listSum * inflationRate) / parseInt(recoverTxt)
        : 0;

    if (costList > chartHeight) {
      costToday = "100%";
    } else if (costList > 0) {
      costToday = `${(costList * 100) / chartHeight}%`;
    }

    if (constListInflamtion > chartHeight) {
      costTenYears = "100%";
    } else if (constListInflamtion > 0) {
      costTenYears = `${(constListInflamtion * 100) / chartHeight}%`;
    }
  }

  const mwbBarStyle1 = {
    costTodayHeight: {
      height: costToday,
    },
    costAfterHeight: {
      height: costTenYears,
    },
  };
  return (
    <div className={classess.mwb_bar}>
      <table className={classess.q_graph}>
        <tbody>
          <tr className={`${classess.qtr} ${classess.q1} ${classess.rowData}`}>
            <th scope='row' className={`${classess.qtr} ${classess.headData}`}>
              Estimated Cost
            </th>
            <td
              className={`${classess.sent} ${classess.bar} ${classess.qtr}`}
              style={mwbBarStyle1.costTodayHeight}
            >
              <p className={classess.price}>
                {costList < 0
                  ? "$0"
                  : `$${parseInt(
                      parseInt(costList).toString().substring(0, 7)
                    ).toLocaleString()}`}
              </p>
            </td>
          </tr>
          <tr className={`${classess.qtr} ${classess.q2} ${classess.rowData}`}>
            <th scope='row' className={`${classess.qtr} ${classess.headData}`}>
              Estimated Cost
            </th>
            <td
              className={`${classess.sent} ${classess.bar} ${classess.qtr}`}
              style={mwbBarStyle1.costAfterHeight}
            >
              <p className={classess.price}>
                {constListInflamtion < 0
                  ? "$0"
                  : `$${parseInt(
                      parseInt(constListInflamtion).toString().substring(0, 7)
                    ).toLocaleString()}`}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={classess.ticks}>
        <div className={classess.tick}>
          <p className={classess.priceLst}>$500k</p>
        </div>
        <div className={classess.tick}>
          <p className={classess.priceLst}>$400k</p>
        </div>
        <div className={classess.tick}>
          <p className={classess.priceLst}>$300k</p>
        </div>
        <div className={classess.tick}>
          <p className={classess.priceLst}>$200k</p>
        </div>
        <div className={classess.tick}>
          <p className={classess.priceLst}>$100k</p>
        </div>
        <div className={`${classess.tick} ${classess.tick_empty}`}>
          <p className={classess.priceLstEmpty}>$0</p>
        </div>
      </div>
    </div>
  );
}

Chart.propTypes = {
  mwbDetails: PropTypes.object,
};

export default Chart;
