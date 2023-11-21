import { useMemo } from "react";

function Story() {
    const tabs = useMemo(() => [
        { 
            img1:"https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg",
            name: "BỨT PHÁT NỔ LỰC KHÔNG NGỪNG",
            title: "Thời trang nam Gabi Store phong cách hiện đại, nam tính và sành điệu, mang đến cho khách hàng chuỗi giá trị cung ứng sản phẩm, dịch vụ khác biệt và thân thiện với môi trường.",
            btn: "Xem thêm",
        },
        {
            name: "HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG",
            title: "Thời trang bền vững là một xu hướng mới của ngành thời trang, nhằm giảm thiểu tác động tiêu cực của ngành công nghiệp thời trang đến môi trường và xã hội.",
            btn: "Xem thêm",
        },
        {
            name: "TẦM NHÌN & SỨ MỆNH 2023",
            title: "Thời trang nam Gabi Store phong cách hiện đại, nam tính và sành điệu, mang đến cho khách hàng chuỗi giá trị cung ứng sản phẩm, dịch vụ khác biệt và thân thiện với môi trường.",
            btn: "Xem thêm",
        },

    ])
    return (

        <div className=" flex p-14 space-x-10 justify-center ">
            {
                tabs.map((obj, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">

                                <a href="/storydetail">
                                    <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-img-5_b6ef82190aac43aba3d03e990d826458.jpg" alt="Noteworthy technology acquisitions 2021" />
                                </a>
                                <div className="p-5">
                                    <a href="/storydetail">
                                        <h4 className="font-semibold text-xl ">{obj.name}</h4>

                                    </a>
                                    <p className="font-light text-gray-700 mb-3">{obj.title}</p>
                                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                                        {obj.btn}
                                    </a>
                                </div>
                            </div>                   
                        </div>

                        
                    )
                })
            }


            {/* <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/storydetail">
            <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-new-2_c3d71ea46248436699cc8b296fc2aeea.jpg" alt="Noteworthy technology acquisitions 2021" />
        </a>
        <div className="p-5">
            <a href="/storydetail">
                <h3 className="font-semibold text-xl">HƯỚNG ĐẾN THỜI TRANG BỀN VỮNG</h3>
            </a>
            <p className="font-light text-gray-700 mb-3"> Thời trang bền vững là một xu hướng mới của ngành thời trang, nhằm giảm thiểu tác động tiêu cực của ngành công nghiệp thời trang đến môi trường và xã hội.</p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                Xem thêm
            </a>
        </div>
    </div>

    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/storydetail">
            <img className="rounded-t-lg" src="https://file.hstatic.net/1000184601/file/profile-img-8_84ceaf2387d94838be96a16c13245a5d.jpg" alt="Noteworthy technology acquisitions 2021" />
        </a>
        <div className="p-5">
            <a href="/storydetail">
                <h4 className="font-semibold text-xl">TẦM NHÌN & SỨ MỆNH 2023</h4>
            </a>
            <p className="font-light text-gray-700 mb-3">  Thời trang nam  <span className="font-bold">Gabi Store</span> phong cách hiện đại, nam tính và sành điệu, mang đến cho khách hàng chuỗi giá trị cung ứng sản phẩm, dịch vụ khác biệt và thân thiện với môi trường.</p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/storydetail">
                Xem thêm
            </a>
        </div>
    </div> */}
        </div>

        


    );
}

export default Story;
