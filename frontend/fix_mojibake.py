import os

# Map of mojibake string -> Correct Vietnamese string
replacements = {
    "HÃ ng má»›i vá» ": "Hàng mới về",
    "Sáº£n pháº©m cÃ³ nhiá» u lÆ°á»£t xem": "Sản phẩm có nhiều lượt xem",
    "Ä Ã£ cÃ³ lá»—i xáº£y ra": "Đã có lỗi xảy ra",
    "Sáº£n pháº©m Ä‘Æ°á»£c Ä‘Ã¡nh giÃ¡ cao": "Sản phẩm được đánh giá cao", # Just in case
    "ThÆ°Æ¡ng hiá»‡u ná»•i báº­t": "Thương hiệu nổi bật", # Just in case
    "Danh má»¥c sáº£n pháº©m": "Danh mục sản phẩm", # Just in case
    "BÃ¡n cháº¡y nháº¥t": "Bán chạy nhất" # Just in case
}

files = [
    r"e:\gabi-store\frontend\src\pages\public\Home\suggestion.jsx",
    r"e:\gabi-store\frontend\src\pages\public\Home\category.jsx",
    r"e:\gabi-store\frontend\src\pages\public\Home\blog.jsx",
    r"e:\gabi-store\frontend\src\pages\public\Home\best-selling.jsx",
    r"e:\gabi-store\frontend\src\pages\public\Home\brand.jsx"
]

for file_path in files:
    try:
        # Try reading as utf-8
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
