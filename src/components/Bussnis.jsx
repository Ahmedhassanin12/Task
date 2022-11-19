import React from "react";
let users = [
  {
    name: "John",
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
  },
  {
    name: "John",
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
  },
  {
    name: "John",
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
  },
  {
    name: "John",
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
  },
  
];
const Bussnis = () => {
  return (
    <div className="ml-14 md:mt-4 bg-white rounded-lg flex flex-col items-center justify-around">
      <div className="flex items-center justify-around mb-3">
        <p className="mr-16 text-gray-400 font-bold">Discussion</p>
        <p className="font-light">View All</p>
      </div>
      {users.map((user, i) => (
        <>
          <div className="flex py-2 px-4  justify-between items-center  w-[250px]">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src={user.imgUrl}
              alt={user.name}
            />
            <div className="text-gray-400 font-medium">
            <p>{user.name}</p>
            <p>19/11/2022</p>
            </div>
            <p className="text-gray-500 font-bold text-xl justify-end">:</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Bussnis;
