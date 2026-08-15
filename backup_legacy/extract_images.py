import fitz
import os

pdf_path = "vape2.pdf"
output_dir = "extracted_images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
image_count = 0

for page_index in range(len(doc)):
    page = doc.load_page(page_index)
    image_list = page.get_images(full=True)
    
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_filename = f"{output_dir}/image_{page_index+1}_{image_index}.{image_ext}"
        with open(image_filename, "wb") as f:
            f.write(image_bytes)
        image_count += 1

print(f"Extracted {image_count} images to {output_dir}")
