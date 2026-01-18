import os

replacements = {
    "Trang chá»§": "Trang chủ",
    "Sáº£n pháº©m": "Sản phẩm",
    "BÃ i viáº¿t": "Bài viết",
    "LiÃªn há»‡": "Liên hệ",
    "ChÃ­nh sÃ¡ch": "Chính sách",
    "Ä Äƒng nháº­p": "Đăng nhập",
    "Ä Äƒng kÃ½": "Đăng ký",
    "Vá»  E-Shop": "Về E-Shop",
    "Giá»›i thiá»‡u": "Giới thiệu",
    "ThÆ°Æ¡ng hiá»‡u": "Thương hiệu",
    "Danh má»¥c": "Danh mục",
    "Theo dÃµi": "Theo dõi",
    "ChÃ­nh sÃ¡ch báº£o máº­t": "Chính sách bảo mật",
    "Ä iá» u khoáº£n sá»­ dá»¥ng": "Điều khoản sử dụng",
    "Táº¥t cáº£ cÃ¡c quyá» n Ä‘Æ°á»£c báº£o lÆ°u": "Tất cả các quyền được bảo lưu",
    "Ä Ã£ cÃ³ lá»—i xáº£y ra": "Đã có lỗi xảy ra"
}

files = [
    r"e:\gabi-store\frontend\src\layouts\public\topbar.jsx",
    r"e:\gabi-store\frontend\src\layouts\public\footer.jsx"
]

for file_path in files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        for k, v in replacements.items():
            new_content = new_content.replace(k, v)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
        else:
            print(f"No changes for {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
