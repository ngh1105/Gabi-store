import React from "react";
import classNames from "classnames/bind";
import style from "./BlogCard.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function BlogCard({ item }) {
  console.log(item);
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
    <section className="flex items-center bg-white 0 font-poppins dark:bg-gray-900 ">
      <div className="justify-center flex-1 max-w-screen-xl px-4 py-4 mx-auto text-left ">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold capitalize dark:text-white">
            {" "}
            Blog List
          </h1>
        </div>
        <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800 gap-2">
          <div>
            <img
              src="https://laforce.vn/wp-content/uploads/2023/06/phong-cach-thoi-trang-nam.jpg"
              alt
              className="object-cover w-full rounded-md h-80 md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-4 lg:px-2">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 "
            >
              June 4, 2022
            </a>
            <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
            <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
              Đam Mê Thời Trang, Bạn Phải Biết Những Fashion Này
            </h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Làm thế nào để biết mình có đam mê thời trang hay không? Đó là một
              câu hỏi rất khó trả lời, Chip.vn chỉ muốn nói rằng, đó là khi bạn
              nhìn thấy một người ăn mặc đẹp và đắm chìm trong bộ trang phục của
              họ, từ cách họ phối các phụ kiện đi kèm, học hỏi từ style của họ,
              chứ không nhìn họ bằng con mắt đố kị.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800 gap-2">
          <div>
            <img
              src="https://dony.vn/wp-content/uploads/2021/09/ao-quan-mua-xuan.jpg"
              alt
              className="object-cover w-full rounded-md h-80 md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-4 lg:px-2">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 "
            >
              June 4, 2022
            </a>
            <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
            <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
              Đam Mê Thời Trang, Bạn Phải Biết Những Fashion Này
            </h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Làm thế nào để biết mình có đam mê thời trang hay không? Đó là một
              câu hỏi rất khó trả lời, Chip.vn chỉ muốn nói rằng, đó là khi bạn
              nhìn thấy một người ăn mặc đẹp và đắm chìm trong bộ trang phục của
              họ, từ cách họ phối các phụ kiện đi kèm, học hỏi từ style của họ,
              chứ không nhìn họ bằng con mắt đố kị.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800 gap-2">
          <div>
            <img
              src="https://www.novelty.com.vn/public/uploads/images/camo-pants-shorts.jpg"
              alt
              className="object-cover w-full rounded-md h-80 md:h-full"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-4 lg:px-2">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 "
            >
              June 4, 2022
            </a>
            <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
            <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
              Đam Mê Thời Trang, Bạn Phải Biết Những Fashion Này
            </h2>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Làm thế nào để biết mình có đam mê thời trang hay không? Đó là một
              câu hỏi rất khó trả lời, Chip.vn chỉ muốn nói rằng, đó là khi bạn
              nhìn thấy một người ăn mặc đẹp và đắm chìm trong bộ trang phục của
              họ, từ cách họ phối các phụ kiện đi kèm, học hỏi từ style của họ,
              chứ không nhìn họ bằng con mắt đố kị.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
