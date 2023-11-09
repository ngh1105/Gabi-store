import React from 'react';
import classNames from 'classnames/bind';
import style from './BlogCard.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';

const cx = classNames.bind(style);

function BlogCard({ item }) {
    console.log(item);
    const navigate = useNavigate()

    const rootId = item.id;

    const handleDetail = () => {
        navigate(`/blog/${rootId}`, {
            state: {
                item: item,
            },
        });
    };

    return (
      <section className="flex items-center py-10 bg-gray-100 lg:py-24 font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-6xl px-6 py-6 mx-auto text-left lg:py-10 ">
    <div className="mb-10 text-center">
      <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
        Our blog
      </span>
      <h1 className="text-3xl font-bold capitalize dark:text-white"> Blog List</h1>
    </div>
    <div className="grid grid-cols-1 bg-white dark:bg-gray-900  mb-6 lg:grid-cols-[1fr,70%]   gap-4">
      <div>
        <img src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg" alt className="object-cover w-full rounded-md h-80 lg:h-44" />
      </div>
      <div className="px-4 py-4 lg:px-0">
        <a href="#" className="px-2.5  py-0.5 mr-2 text-xs text-gray-700 bg-gray-200 rounded hover:bg-blue-600 dark:bg-gray-700 dark:text-gray-400 hover:text-gray-100 dark:hover:bg-gray-800">
          Report</a>
        <a href="#">
          <h2 className="mt-3 mb-3 text-xl font-semibold text-gray-600 hover:text-blue-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-400">10th october,2022</span>
      </div>
    </div>
    <div className="grid grid-cols-1 dark:bg-gray-900 bg-white mb-6 lg:grid-cols-[1fr,70%]   gap-4">
      <div>
        <img src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg" alt className="object-cover w-full rounded-md h-80 lg:h-44" />
      </div>
      <div className="px-4 py-4 lg:px-0">
        <a href="#" className="px-2.5  py-0.5 mr-2 text-xs text-gray-700 bg-gray-200 dark:hover:bg-gray-800 rounded hover:bg-blue-600 dark:bg-gray-700 dark:text-gray-400 hover:text-gray-100">
          Architect</a>
        <a href="#">
          <h2 className="mt-3 mb-3 text-xl font-semibold text-gray-600 hover:text-blue-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-400">10th october,2022</span>
      </div>
    </div>
    <div className="grid grid-cols-1 bg-white dark:bg-gray-900 mb-6 lg:grid-cols-[1fr,70%]   gap-4">
      <div>
        <img src="https://i.postimg.cc/GhwqZcSm/pexels-designecologist-1627935.jpg" alt className="object-cover w-full rounded-md h-80 lg:h-44" />
      </div>
      <div className="px-4 py-4 lg:px-0">
        <a href="#" className="px-2.5  py-0.5 mr-2 text-xs dark:hover:bg-gray-800 text-gray-700 bg-gray-200 rounded hover:bg-blue-600 dark:bg-gray-700 dark:text-gray-400 hover:text-gray-100">
          Magazine</a>
        <a href="#">
          <h2 className="mt-3 mb-3 text-xl font-semibold text-gray-600 hover:text-blue-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </a>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-400">10th october,2022</span>
      </div>
    </div>
  </div>
</section>




    );
}

export default BlogCard;
