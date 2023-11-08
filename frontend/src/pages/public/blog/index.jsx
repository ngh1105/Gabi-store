import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState([
            {
              id: 1,
              img: "https://file.hstatic.net/1000184601/file/_o_polo_nam.png",
              title: "THU HÚT PHÁI ĐẸP VỚI 7 CÁCH PHỐI ÁO POLO ĐẸP XUẤT SẮC",
              describe: "Theo thống kế của các nhà phê bình thời trang nổi tiếng thế giới, áo thun Polo là một item thời trang mà bất kì người mẫu nào cũng sở hữu trong tủ quần áo. Áo Polo có thể mặt như một chiếc áo độc lập, hay là một kiểu áo nền ở bên trong. Nói chung, áo Polo mặc kiểu nào cũng đẹp.",
              describe2: "Tuy nhiên, bạn phải biết cách phối đồ thì mới có thể tôn lên được vẻ đẹp của chiếc áo Polo. Trong bài viết này, GABI STORE sẽ hướng dẫn bạn các cách mix-match chiếc áo Polo với các sản phẩm thời trang khác để có thể thu hút ánh nhìn của phái đẹp.",
              date: "2023-08-08",
              title2: "Áo Polo Không Nút",
              content2: "Trừ khi bạn đang ở một nơi có không khí trang trọng thì nên cài nút áo lại, còn không thì hãy bung hết tất cả nút áo ra. Nghe thì có vẻ hơi khó hiểu nhưng bạn biết không, các nhà thiết kế thời trang gần đây đang dần chuyển sang mặc các loại áo Polo không nút. Chính sự đơn giản này là điểm nhấn chết người của chiếc áo Polo không nút.",
              content2v1: "Cách phối đơn giản nhất là phối áo Polo không nút với giày chinos hoặc loafer. Ngoài ra hãy kết hợp với các loại quần jeans màu sáng và quần tây ống cao.",
              content2v2: "Chú ý, hãy chọn những chiếc áo Polo vừa vặn với dáng người nếu bạn không muốn trở thành 'chú hề' mặc áo Polo nhé!",
              img2: "https://file.hstatic.net/1000184601/file/_o_polo_1.png",
              title3: "Mix-match với Veston",
              content3: "Hầu như ai cũng nghĩ mặc đồ Veston thì phải mặc với áo sơ mi ở bên trong. Nhưng mà bây giờ là thời đại 2018 rồi, thời trang cũng cần phải được cải tiến chứ. Hiện tại, rất nhiều người mẫu chuộng cách phối áo Polo với đồ Veston đó.",
              content3v1: "Cách phối đồ này cũng rất đơn giản luôn. Hãy chú ý một điều rất quan trọng là màu sắc của áo Polo và áo vest, quần tây phải tương phản nhau. Đừng chọn các màu gần giống hoặc giống nhau, như vậy áo Polo sẽ bị chìm trong các layer khác.",
              content3v2: null,
              img3: "https://file.hstatic.net/1000184601/file/_o_polo_2.png",
              title4: "Áo Polo Kẻ Sọc",
              content4: "Áo Polo kẻ sọc là một sự lựa chọn hoàn hảo cho những ngày cuối tuần hay đi du lịch. Điều này giúp bạn trông thật cá tính và năng động. Không cần phải phối nhiều, một chiếc áo Polo kẻ sọc và quần jeans đơn giản là bạn đã sẵn sàng cho một ngày dạo chơi ngoài trời.",
              content4v1: "Áo Polo kẻ sọc cũng có thể kết hợp với các loại quần shorts hoặc chân váy ngắn nếu bạn là người yêu thích phong cách trẻ trung.",
              content4v2: null,
              img4: "https://file.hstatic.net/1000184601/file/_o_polo_ke_s__c.png",
              title5: "Áo Polo Phối Sọc Ngang",
              content5: "Áo Polo phối sọc ngang thường mang đến sự tươi trẻ và thời trang. Bạn có thể phối chiếc áo này với các loại quần jeans, quần shorts hoặc chinos. Chọn một màu sáng cho áo Polo để tạo điểm nhấn trong trang phục.",
              content5v1: "Khi bạn mặc áo Polo phối sọc ngang, hãy chọn các phụ kiện như nón, giày thể thao hoặc đồng hồ thể thao để tạo phong cách thể thao năng động.",
              content5v2: null,
              img5: "https://file.hstatic.net/1000184601/file/_o_polo_phoi_s_c_ngang.png",
              title6: "Áo Polo Kết Hợp Áo Sơ Mi",
              content6: "Khi bạn muốn thêm sự lịch lãm và trang trọng cho trang phục với áo Polo, hãy thử phối nó với áo sơ mi. Các loại áo sơ mi trắng sạch sẽ và màu trơn thường tạo điểm nhấn cho chiếc áo Polo.",
              content6v1: "Kết hợp áo Polo với áo sơ mi và quần tây sẽ thích hợp cho các dịp quan trọng và buổi họp mặt chuyên nghiệp.",
              content6v2: null,
              img6: "https://file.hstatic.net/1000184601/file/_o_polo_ao_so_mi.png",
              title7: "Phối Áo Polo Với Quần Jogger",
              content7: "Nếu bạn đang tìm kiếm một phong cách thời trang thoải mái và thích hợp cho cuộc sống hàng ngày, thì hãy phối chiếc áo Polo với quần jogger. Đây là một trang phục dễ dàng di chuyển và cực kỳ thoải mái.",
              content7v1: "Bạn có thể thêm các phụ kiện như giày thể thao hoặc nón và bạn sẽ trông rất thời trang và sành điệu trong trang phục này.",
              content7v2: null,
              img7: "https://file.hstatic.net/1000184601/file/_o_polo_qu_n_jogger.png"
            }
            
    
          
        
    ]);

    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('http://localhost:8000/blog').then((data) => setBlog(data.data));
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {blog.map((data) => (
                    // <div key={data.id} className={cx('post')}>
                    //     <div className={cx('img')}>
                    //         <img src={data.img} />
                    //     </div>
                    //     <div className={cx('content')}>

                    //             <h2>{data.title}</h2>

                    //         <p>{data.shortDescribtion}</p>
                    //         <Button outline>Xem thêm</Button>
                    //     </div>
                    // </div>
                    <BlogCard item={data} key={data.id} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
