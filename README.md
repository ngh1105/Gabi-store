# E-Shop - ung dung web thuong mai dien tu (ReactJS + NestJS + MySQL)

## 1. Muc tieu he thong
- Cung cap du day tinh nang cua mot website thuong mai dien tu: xem san pham, gio hang, dat hang, thanh toan truc tuyen, quan ly nguoi dung va quan tri.
- Kien truc full-stack: frontend ReactJS + TailwindCSS, backend NestJS, co so du lieu MySQL.

## 2. Chuc nang chinh
- Khach hang: duyet & xem chi tiet san pham, tim kiem/loc, gio hang (them/sua/xoa), dat hang, thanh toan PayPal, quan ly tai khoan & lich su don.
- Quan tri vien: quan ly san pham (them/sua/xoa/ton kho), don hang (cho -> giao -> hoan thanh), nguoi dung (khoa/bat, phan quyen), noi dung blog/thuong hieu/danh muc.

## 3. Kien truc & cong nghe
- Frontend: ReactJS, TailwindCSS, React Router, Redux Toolkit; tich hop PayPal client; quan ly trang thai gio hang va xac thuc nguoi dung.
- Backend: NestJS, JWT auth, Sequelize + MySQL; modules san pham, gio hang, don hang, thanh toan, nguoi dung, blog, wishlist, rating; ho tro upload tep tinh.
- Trien khai: build frontend & backend tach biet; cau hinh bien moi truong cho DB, JWT, PayPal; co the dong goi Docker hoac trien khai len dich vu cloud.

## 4. Quy trinh hoat dong dien hinh
1. Nguoi dung truy cap giao dien web, tai danh sach san pham qua API.
2. Chon san pham -> them vao gio -> xac nhan gio hang.
3. Thanh toan truc tuyen qua PayPal.
4. Backend xac nhan thanh toan, tao don hang trong MySQL.
5. Nguoi dung xem lich su don; quan tri vien theo doi va xu ly don.

## 5. Cau truc thu muc (rut gon)
- /frontend: ma nguon ReactJS + TailwindCSS.
- /backend: ma nguon NestJS (modules: auth, users, products, cart, orders, payments, blog, wishlist...).
- /deploy: cau hinh trien khai.

## 6. Chay nhanh (goi y)
- Backend: cd backend && npm install && npm run start:dev
- Frontend: cd frontend && npm install && npm start

README nay da duoc lam sach thong tin cre va chi mo ta chuc nang/kien truc cua du an.
