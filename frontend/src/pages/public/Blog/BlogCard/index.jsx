import React from "react";
import classNames from "classnames/bind";
import style from "./BlogCard.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function BlogCard({ item }) {
  console.log("item", item);
  const navigate = useNavigate();

  const rootId = item.id;

  const handleDetail = () => {
    navigate(`/blog/${rootId}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className="w-full mb-6 border rounded-md shadow-md dark:bg-transparent dark:border-gray-700" onClick={handleDetail}>
      <div className="relative mb-5 overflow-hidden h-72">
        <img
          className="object-cover w-full h-full transition-all rounded hover:scale-110"
          src={item.img}
          alt
        />
      </div>
      <div className="px-4">
        <a className="mb-0 lg:mb-4" href="#">
          <h2 className="mb-3 text-xl font-bold leading-9 text-blue-800 dark:text-white">
            {" "}
            {item.title}
          </h2>
          <p className="text-base leading-7 text-gray-400">
            {item.describe.slice(0, 150)}
            {item.describe.length > 100 ? "...... Xem thêm" : ""}
          </p>
        </a>
        <div className="mt-4 mb-4">
          <p className="text-lg flex justify-between">
            <span className=" text-gray-400  dark:text-gray-400">
              <i
                href="#"
                className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 mr-1 bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                {item.date}
              </i>
            </span>
            <span className="ml-2 text-gray-400  dark:text-gray-400">
              <i
                href="#"
                className="flex items-center mr-4 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 mr-1 bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                {item.view}
              </i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
