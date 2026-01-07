import zipfile

zip_file_path = 'crop-recommendation-dataset.zip'  # Correct path to your zip file
extract_folder = 'crop_data'  # Folder where the data will be extracted

with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    zip_ref.extractall(extract_folder)

print("Dataset extracted successfully!")

