import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import joblib

# Load preprocessed data with crop names
df = pd.read_csv(r'C:\Users\Suman\sustainable-farming-hub\server\ml\crop_data\preprocessed_crop_data.csv')

# Separate features and labels
X = df.drop('label', axis=1)
y = df['label']

# Encode labels (crop names to numbers)
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f'Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%')
print('Classification Report:')
print(classification_report(y_test, y_pred, target_names=encoder.classes_))

# Save model and encoder
joblib.dump(model, 'crop_predictor_model.pkl')
joblib.dump(encoder, 'crop_encoder.pkl')
print("✅ Model and encoder saved successfully!")
