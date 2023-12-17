import Api from "app/api";
import { API_URL } from "app/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useApiStatus } from "hooks/use-api-status";
import utils from "utils";
import { usePaginate } from "hooks/use-paginate";
import { toast } from "react-toastify";

export default function CommentSection({ id, isBought }) {

    const [commentCount, setCommentCount] = useState(0);
    const [comments, setComments] = useState([]);

    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { status, setStatus } = useApiStatus();

    const ITEMS_PER_PAGE = 4;
    const {
        items, setItems, totalItems,
        onSortItems, setTotalPages,
        onSearchItems, Pagination,
        setCurrentPage
    } = usePaginate(ITEMS_PER_PAGE);

    const fetchCommentData = async () => {
        let res = await Api.Get(`/comment/count-comment/${id}`);
        if (!res.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return;
        }

        setCommentCount(res.response);

        res = await Api.Get(`/comment/find-related/${id}`);
        if (!res.isSuccess) {
            toast.error("Đã có lỗi xảy ra");
            return;
        }

        setTotalPages(Math.ceil(res.response.length / ITEMS_PER_PAGE));
        setCurrentPage(1);
        setItems(res.response);
    }

    useEffect(() => {
        (async () => {
            await fetchCommentData();
        })();

    }, [id]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            content: "",
        },
        validationSchema: Yup.object({
            content: Yup.string()
                .required("Đây là dữ liệu bắt buộc")
                .max(500, `Không thể vượt quá 500 ký tự`),
        }),
        onSubmit: async (values, { resetForm }) => {

            if (!isAuthenticated()) {
                navigate("/auth/login");
                return;
            }

            setStatus(prevState => ({
                ...prevState,
                isSubmit: true
            }));

            const data = {
                content: values.content,
                userId: parseInt(user.userId),
                productId: parseInt(id),
            }

            const resData = await Api.Post("/comment", data);

            if (!resData.isSuccess) {
                setStatus(prevState => ({
                    isError: true,
                    errorMessage: resData.response.message,
                    isSubmit: false,
                }));

                return;
            }

            await fetchCommentData();

            setStatus(prevState => ({
                ...prevState,
                isSubmit: false,
            }));

            resetForm();

            toast.success("Thêm bình luận thành công", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
            });
        },
    })

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Bình luận {`(${commentCount})`}</h2>
                    <div className="w-16 mb-3 border-b-2 border-indigo-500 dark:border-gray-400 inset-px" />
                </div>
                <form className="mb-6" onSubmit={formik.handleSubmit}>
                    <div className="py-2 px-4 mb-3 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label className="sr-only">Your comment</label>
                        <textarea rows={6}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Bình luận của bạn..."
                            name="content"
                            value={formik.values.content || ''}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.errors.content && formik.touched.content && (
                        <p className="mb-3 ml-1 text-red-600 text-sm">
                            {formik.errors.content}
                        </p>
                    )}
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Gửi bình luận
                    </button>
                </form>
                <div className="">
                    {
                        items.map((obj, index) => {
                            return (
                                <article
                                    key={index}
                                    className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <footer className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                <img className="mr-2 w-8 h-8 rounded-full"
                                                    src={`${API_URL}${(obj.User.avatarUrl && obj.User.avatarUrl !== "") ? obj.User.avatarUrl : "/upload/user/default-avatar.png"}`} alt="avatar" />
                                                {obj.User.fullName}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400"><time>{utils.formatDate(obj.createdAt)}</time></p>
                                        </div>
                                        <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                            </svg>
                                        </button>
                                        <div className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                                <li>
                                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p className="text-gray-500 dark:text-gray-400">{obj.content}</p>
                                </article>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center mt-6">
                    <Pagination />
                </div>
            </div>
        </section>
    );
}