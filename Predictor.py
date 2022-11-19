from joblib import load
import numpy as np
import sys
model = load('SalesPredictor.joblib') 

a = float(sys.argv[1])
b = float(sys.argv[2])
c = float(sys.argv[3])
d = float(sys.argv[4])
e = float(sys.argv[5])

features = np.array([[a, b, c, d, e]])
print(model.predict(features))
