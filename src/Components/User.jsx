import React from "react";
import Card from "./UI/Card";
import { TrashIcon } from "@heroicons/react/solid";

const User = (props) => {
  const handleDelete = () => {
    props.deletePerson(props.user);
  };

  return (
    <div className="shadow shadow-gray-500">
      <Card>
        <div className="flex justify-between items-center">
          <div className="relative mb-2 inline-block">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-bold tracking-wider">
                {props.user.fullName}{" "}
              </h1>
              <span className="bg-blue-500 text-white rounded-full tracking-wider px-2 text-xs">
                {props.user.username}
              </span>
            </div>
            <div>
              <h5 className="font-semibold tracking-wider">
                {" "}
                {props.user.email}
              </h5>
            </div>
            <div className="bg-green-500 w-10 h-10 rounded-full flex justify-center items-center mt-2">
              <span className="font-semibold text-white">
                {" "}
                {props.user.age}
              </span>
            </div>
          </div>
          <div className="flex">
            <span
              className="flex gap-1 text-red-500 hover:bg-red-600 hover:text-white px-2 cursor-pointer  hover:rounded-full"
              onClick={handleDelete}
            >
              Remove
              <TrashIcon className="w-5 h-5  " />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default User;
