
path = r"e:\gabi-store\frontend\src\pages\public\Home\suggestion.jsx"

with open(path, 'rb') as f:
    content = f.read()

lines = content.split(b'\n')
for i, line in enumerate(lines):
    # Print lines 55-65
    if i >= 55 and i <= 65:
        print(f"Line {i+1} RAW: {line}")
        try:
            print(f"Line {i+1} UTF8: {line.decode('utf-8')}")
        except:
            print(f"Line {i+1}: DECODE ERROR")
