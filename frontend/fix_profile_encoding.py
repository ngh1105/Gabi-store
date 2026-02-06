import os

file_path = "e:/gabi-store/frontend/src/pages/public/user-settings/index.jsx"

def fix_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_lines = []
        for line in content.splitlines():
            try:
                # Try to encode as latin1 and decode as utf-8
                decoded_line = line.encode('latin1').decode('utf-8')
                new_lines.append(decoded_line)
            except (UnicodeEncodeError, UnicodeDecodeError):
                new_lines.append(line)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed encoding for: {path}")

    except Exception as e:
        print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    fix_file(file_path)
