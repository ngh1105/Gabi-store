# Backend (NestJS) cho E-Shop

API server cho ung dung thuong mai dien tu, cung cap cac chuc nang:
- Xac thuc JWT (dang ky/dang nhap nguoi dung).
- Quan ly san pham, danh muc, thuong hieu, blog, danh gia, wishlist.
- Quan ly gio hang, don hang, thanh toan (tich hop PayPal).
- Upload tep tinh (hinh anh san pham, banner).

## Yeu cau moi truong
- Node.js 18+
- MySQL

Bien moi truong goi y:
- DATABASE_URL hoac cau hinh ket noi MySQL.
- JWT_SECRET, JWT_EXPIRES_IN.
- PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET.

## Chay cuc bo
```
npm install
npm run start:dev
```

## Build & chay production
```
npm run build
npm run start:prod
```

## Kiem thu
```
npm run test        # unit
npm run test:e2e    # e2e
npm run test:cov    # coverage
```

Tai lieu nay da duoc lam sach thong tin cre va chi mo ta backend cua du an.
