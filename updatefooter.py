import os

def replace_text_in_file(file_path, old_text, new_text):
    with open(file_path, 'r') as file:
        file_data = file.read()
    
    file_data = file_data.replace(old_text, new_text)
    
    with open(file_path, 'w') as file:
        file.write(file_data)

def process_html_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                replace_text_in_file(file_path, '&copy 1 &#43; (1 &#43; 1)<sup>11</sup> &#8722; (1 &#43; 1 &#43; 1)<sup>(1 &#43; 1 &#43; 1)', '&copy 2<sup>3</sup> &#43; 3<sup>3</sup> &#43; 4<sup>3</sup> &#43; 5<sup>3</sup> &#43; 6<sup>3</sup> &#43; 7<sup>3</sup> &#43; 8<sup>3</sup> &#43; 9<sup>3</sup>')

directory = "/Users/Justin/Desktop/personalsite-solo"
process_html_files(directory)
