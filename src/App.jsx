import React, { useState } from "react";
import styles from "./style";
import "./App.scss";
import {
  Hero,
  Navbar,
  SideBar,
  Top,
  LineChart,
  CircalChart,
  Bussnis,
  BarChart,
} from "./components";
import { UserData } from "./Data";

const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#227db6"],
        borderColor: "#227db6",
        borderWidth: 1,
      },
    ],
  });

  return (
    <>
      <div className="grid grid-flow-col gap-4">
        <div className="row-span-3 ...">
          <SideBar />
        </div>
        <div className="col-span-2">
          <Navbar />
          <div className="second ">
            <Hero />
            <div className="flex flex-wrap gap-12">
              <div
                className="flex flex-col sm:w-[550px]  md:w-[750px] xl:w-[950px] items-center justify-center my-8 py-5 rounded-md bg-white px-8 mt-3"
                style={{  height: 250, marginTop: 50 }}
              >
                <h3 className="mb-3 font-bold text-gray-400">Users</h3>
                <BarChart chartData={userData} />
              </div>
               
              <Bussnis />
            </div>
          </div>
          {/* third */}
          <div className="third flex flex-wrap items-start justify-start gap-16">
            <Top />

            <div
              className="md:w-[350px] lg:w-[650px] flex flex-col items-center justify-center my-8 py-5 rounded-md bg-white px-8 mt-3"
              style={{ height: 250 }}
            >
              <h3 className="mb-3 font-bold text-gray-400">Viewers</h3>
              <LineChart chartData={userData} />
            </div>
            <div
              className="flex flex-col items-center justify-center my-8 py-5 rounded-md bg-white px-8 mt-3"
              style={{ width: 250, height: 250 }}
            >
              <h3 className="mb-3 font-bold text-gray-400">Viewers</h3>
              <CircalChart />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
