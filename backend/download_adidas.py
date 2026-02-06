import urllib.request
import os

url = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
output_dir = "public/upload/products"
output = os.path.join(output_dir, "adidas-ultraboost-light.jpg")

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

headers = {"User-Agent": "Mozilla/5.0"}

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response, open(output, 'wb') as out_file:
        data = response.read()
        out_file.write(data)
    print("Download success")
except Exception as e:
    print(f"Error: {e}")
