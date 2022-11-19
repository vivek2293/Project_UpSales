from joblib import dump, load
import numpy as np
model = load('SalesPredictor.joblib') 

features = np.array([[500.45333629, 50.08387547, -0.67186289, 100, 1.58160933]])
print(model.predict(features))
