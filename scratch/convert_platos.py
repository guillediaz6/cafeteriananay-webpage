import os
from PIL import Image

def convert_to_webp(input_path, output_path):
    print(f"Converting {input_path} to {output_path}")
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (e.g. if RGBA)
            img.save(output_path, 'webp', quality=85)
        print("Success.")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

image_dir = r"c:\Users\arenc\Desktop\mares_cafedelnorte_webpage-main\assets\images"
images = ["plato1", "plato2", "plato3", "plato4"]

for img_name in images:
    input_path = os.path.join(image_dir, f"{img_name}.png")
    output_path = os.path.join(image_dir, f"{img_name}.webp")
    if os.path.exists(input_path):
        convert_to_webp(input_path, output_path)
    else:
        print(f"Not found: {input_path}")
