import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './circal.scss'

const CircalChart = ({ chartData }) => {
  return (
    
    <div class=" circle-wrap">
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>
        <div class="mask half">
          <div class="fill"></div>
        </div>
        <div class="inside-circle"> 75% </div>
      </div>
    </div>
  );
};

export default CircalChart;
