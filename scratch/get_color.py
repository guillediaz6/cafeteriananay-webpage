from PIL import Image

def get_bottom_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        width, height = img.size
        # Get pixels from the bottom row
        bottom_row = [img.getpixel((x, height - 1)) for x in range(width)]
        # Calculate average color
        avg_r = sum(c[0] for c in bottom_row) // width
        avg_g = sum(c[1] for c in bottom_row) // width
        avg_b = sum(c[2] for c in bottom_row) // width
        hex_color = "#{:02x}{:02x}{:02x}".format(avg_r, avg_g, avg_b)
        print(f"Bottom color: {hex_color} (RGB: {avg_r}, {avg_g}, {avg_b})")
    except Exception as e:
        print(f"Error: {e}")

get_bottom_color('assets/images/cartel.webp')
