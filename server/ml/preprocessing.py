import pandas as pd

# Load the original crop dataset (with crop names)
df = pd.read_csv(r'C:\Users\Suman\sustainable-farming-hub\sustainable-farming-hub\ml\crop_data\Crop_recommendation.csv')

# Fill missing values if any
df.fillna(method='ffill', inplace=True)

# Optional: Check the structure (uncomment to debug)
print(df.head())

# Save cleaned data with crop names in the label
df.to_csv(r'C:\Users\Suman\sustainable-farming-hub\sustainable-farming-hub\ml\crop_data\preprocessed_crop_data.csv', index=False)

print("✅ Data Preprocessing Complete with Crop Names!")
