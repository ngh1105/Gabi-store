import os

# List of files identified with Mojibake
files_to_fix = [
    r"e:\gabi-store\frontend\src\pages\public\bill\index.jsx",
    r"e:\gabi-store\frontend\src\pages\public\product-detail\comment.jsx",
    r"e:\gabi-store\frontend\src\pages\public\blog\index.jsx",
    r"e:\gabi-store\frontend\src\pages\public\blog\blog-detail.jsx",
    r"e:\gabi-store\frontend\src\pages\auth\forgot-password.jsx",
    r"e:\gabi-store\frontend\src\pages\admin\user\index.jsx",
    r"e:\gabi-store\frontend\src\pages\admin\user\update.jsx",
    r"e:\gabi-store\frontend\src\pages\admin\product\delete.jsx",
    r"e:\gabi-store\frontend\src\pages\admin\product\update.jsx",
    r"e:\gabi-store\frontend\src\pages\admin\product\add.jsx",
    # Add potential Sidebar or Layout file if found
]

def fix_encoding(file_path):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if it looks like Mojibake (contains common Mojibake chars)
        # Ä (C3 84) is distinct.
        if "Ä" not in content and "Ã" not in content:
            print(f"Skipping {file_path} (No obvious Mojibake found)")
            return

        # Perform the fix: Encode to latin1, then decode as utf-8
        # This reverses the double-encoding: UTF-8 -> Bytes -> UTF-8 (Correct)
        try:
            fixed_content = content.encode('latin1').decode('utf-8')
        except UnicodeEncodeError:
            # Fallback: Try to fix line by line
            lines = content.splitlines()
            fixed_lines = []
            for line in lines:
                try:
                    fixed_line = line.encode('latin1').decode('utf-8')
                    fixed_lines.append(fixed_line)
                except UnicodeEncodeError:
                    fixed_lines.append(line) # Keep original if valid utf-8 that doesn't map to latin1
                except UnicodeDecodeError:
                    fixed_lines.append(line)
            fixed_content = "\n".join(fixed_lines)
            
        except UnicodeDecodeError as e:
            print(f"Error decoding {file_path}: {e}")
            return

        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed: {file_path}")
        else:
            print(f"No changes for {file_path}")

    except Exception as e:
        print(f"Failed to process {file_path}: {e}")

if __name__ == "__main__":
    for file_path in files_to_fix:
        fix_encoding(file_path)
