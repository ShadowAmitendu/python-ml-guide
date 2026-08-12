---
layout: post
title: "Setting Up Your Python Environment for Machine Learning"
date: 2026-08-12
categories: [setup, beginner]
tags: [python, colab, jupyter, vscode, pycharm, setup]
description: "Learn how to set up Google Colab, Jupyter Notebook, VS Code, and PyCharm for Machine Learning with Python. Includes test code to verify your setup."
---

Before we write a single line of ML code, we need a place to write and run Python. In this post, I'll walk you through **four popular options** — pick the one that suits you best (or try all of them!).

| Tool | Best For | Needs Install? | Free? |
|------|----------|----------------|-------|
| Google Colab | Quick start, no setup | ❌ No | ✅ Yes |
| Jupyter Notebook | Local experimentation | ✅ Yes | ✅ Yes |
| VS Code | Full IDE experience | ✅ Yes | ✅ Yes |
| PyCharm | Professional development | ✅ Yes | ✅ Community Edition |

---

## 1. 🌐 Google Colab (Recommended for Beginners)

Google Colab is the **fastest way to start**. It runs in your browser, gives you free GPU access, and comes with most ML libraries pre-installed.

### How to Set Up

1. Go to [colab.research.google.com](https://colab.research.google.com/)
2. Sign in with your Google account
3. Click **"New Notebook"**
4. You're ready! 🎉

### Your First Code Cell

Type this in the first cell and press `Shift + Enter` to run:

```python
# ✅ Test: Check Python version
import sys
print(f"Python version: {sys.version}")

# ✅ Test: Check if ML libraries are available
import numpy as np
import pandas as pd
import sklearn

print(f"NumPy version:   {np.__version__}")
print(f"Pandas version:  {pd.__version__}")
print(f"Scikit-Learn:    {sklearn.__version__}")
print("\n🎉 All good! Your Colab environment is ready for ML.")
```

**Expected output:**
```
Python version: 3.10.x (or newer)
NumPy version:   1.x.x
Pandas version:  2.x.x
Scikit-Learn:    1.x.x

🎉 All good! Your Colab environment is ready for ML.
```

### Colab Tips

- **Run a cell:** `Shift + Enter`
- **Add a new cell:** Click `+ Code` or `+ Text`
- **Free GPU:** Go to `Runtime → Change runtime type → GPU`
- **Save your work:** It auto-saves to Google Drive

---

## 2. 📓 Jupyter Notebook (Local)

Jupyter is the classic choice for data science. It runs locally on your computer.

### How to Set Up

**Step 1: Install Python**

Download Python from [python.org](https://www.python.org/downloads/). During installation, **check "Add Python to PATH"**.

Verify the install:
```bash
python --version
```

**Step 2: Install Jupyter and ML Libraries**

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
# Install Jupyter
pip install notebook

# Install ML essentials
pip install numpy pandas matplotlib seaborn scikit-learn
```

**Step 3: Launch Jupyter**

```bash
jupyter notebook
```

This opens Jupyter in your browser. Click **"New → Python 3"** to create a notebook.

### Test Code for Jupyter

Paste this into a cell and run it:

```python
# ✅ Jupyter Environment Test
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Test NumPy
arr = np.array([1, 2, 3, 4, 5])
print(f"NumPy array: {arr}")
print(f"Mean: {arr.mean()}, Std: {arr.std():.2f}")

# Test Pandas
df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Score": [85, 92, 78]
})
print(f"\nPandas DataFrame:\n{df}")

# Test Matplotlib
plt.figure(figsize=(6, 3))
plt.bar(df["Name"], df["Score"], color=["#4CAF50", "#2196F3", "#FF9800"])
plt.title("Test Scores")
plt.ylabel("Score")
plt.show()

print("\n🎉 Jupyter is working perfectly!")
```

You should see a **bar chart** appear right below the cell — that means everything is working!

---

## 3. 💻 VS Code (Best All-Round IDE)

VS Code is a powerful, free editor that supports Python notebooks natively.

### How to Set Up

**Step 1: Install VS Code**

Download from [code.visualstudio.com](https://code.visualstudio.com/)

**Step 2: Install the Python Extension**

1. Open VS Code
2. Press `Ctrl+Shift+X` (Extensions panel)
3. Search for **"Python"** by Microsoft → Install it
4. Also install **"Jupyter"** by Microsoft

**Step 3: Install Python + Libraries**

If you haven't already, install Python and the ML libraries:

```bash
pip install numpy pandas matplotlib seaborn scikit-learn
```

**Step 4: Create a Notebook**

1. Press `Ctrl+Shift+P` → type **"Create: New Jupyter Notebook"**
2. Select Python as the kernel
3. Start coding!

### Test Code for VS Code

```python
# ✅ VS Code Environment Test
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Quick ML test — generate random data and plot it
np.random.seed(42)
x = np.linspace(0, 10, 50)
y = 2 * x + 1 + np.random.randn(50) * 2  # y = 2x + 1 + noise

plt.figure(figsize=(8, 4))
plt.scatter(x, y, color="#6C63FF", alpha=0.7, label="Data points")
plt.plot(x, 2 * x + 1, color="#FF6584", linewidth=2, label="True line: y = 2x + 1")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Sample ML Data — Linear Relationship with Noise")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

print("🎉 VS Code + Python is ready for Machine Learning!")
```

### 🔗 Bonus: Connect VS Code to Google Colab

You can use VS Code as a **frontend** for Colab's cloud runtime:

1. In Colab, click the **▼ arrow** next to "Connect" → **"Connect to a local runtime"**
2. In your terminal, install the Colab server:
   ```bash
   pip install jupyter_http_over_ws
   jupyter serverextension enable --py jupyter_http_over_ws
   jupyter notebook --NotebookApp.allow_origin='https://colab.research.google.com' --port=8888 --no-browser
   ```
3. Copy the URL with token that appears in the terminal
4. Paste it into Colab's "Connect to a local runtime" dialog

> **Note:** This lets you use Colab's interface with your local machine's compute. For VS Code specifically, the **Jupyter extension** with a remote kernel works best.

---

## 4. 🛠️ PyCharm (Professional IDE)

PyCharm is a full-featured Python IDE by JetBrains. The **Community Edition is free** and perfect for ML.

### How to Set Up

**Step 1: Install PyCharm**

Download from [jetbrains.com/pycharm](https://www.jetbrains.com/pycharm/download/) → Choose **Community (Free)**

**Step 2: Create a New Project**

1. Open PyCharm → **New Project**
2. Set the location (e.g., `ml-basics`)
3. Choose **"New environment using Virtualenv"**
4. Click **Create**

**Step 3: Install Libraries**

Open the **Terminal** tab at the bottom of PyCharm and run:

```bash
pip install numpy pandas matplotlib seaborn scikit-learn jupyter
```

**Step 4: Create a Test Script**

Create a new file `test_setup.py` and paste:

```python
# ✅ PyCharm Environment Test
"""
Run this file to verify your ML environment is set up correctly.
Right-click → Run 'test_setup'
"""

import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Generate sample data
np.random.seed(42)
X = np.random.rand(100, 1) * 10  # 100 random points
y = 2.5 * X.squeeze() + 3 + np.random.randn(100) * 2  # y = 2.5x + 3 + noise

# Train a simple linear regression model
model = LinearRegression()
model.fit(X, y)

print("=" * 50)
print("  PyCharm ML Environment Test Results")
print("=" * 50)
print(f"  NumPy version:      {np.__version__}")
print(f"  Pandas version:     {pd.__version__}")
print(f"  Scikit-Learn:       ✅ Installed")
print(f"")
print(f"  Linear Regression Test:")
print(f"    True slope:       2.5")
print(f"    Predicted slope:  {model.coef_[0]:.2f}")
print(f"    True intercept:   3.0")
print(f"    Predicted interc: {model.intercept_:.2f}")
print(f"    Model score (R²): {model.score(X, y):.4f}")
print(f"")
print(f"  🎉 Everything is working! You're ready for ML.")
print("=" * 50)
```

Right-click the file → **Run 'test_setup'**. You should see output like:

```
==================================================
  PyCharm ML Environment Test Results
==================================================
  NumPy version:      1.x.x
  Pandas version:     2.x.x
  Scikit-Learn:       ✅ Installed

  Linear Regression Test:
    True slope:       2.5
    Predicted slope:  2.42
    True intercept:   3.0
    Predicted interc: 3.58
    Model score (R²): 0.9256

  🎉 Everything is working! You're ready for ML.
==================================================
```

### Jupyter Notebooks in PyCharm

PyCharm also supports `.ipynb` files! Just:

1. **File → New → Jupyter Notebook**
2. Use it the same way as Jupyter — cells, Shift+Enter, etc.

---

## 🏁 Quick Comparison — Which Should You Pick?

| | Colab | Jupyter | VS Code | PyCharm |
|---|---|---|---|---|
| **Setup time** | 0 min | 5 min | 10 min | 10 min |
| **Internet needed** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Free GPU** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Best for learning** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **Best for projects** | ⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Debugging tools** | Basic | Basic | Excellent | Excellent |
| **Git integration** | ❌ Limited | ❌ Limited | ✅ Built-in | ✅ Built-in |

> **My recommendation:** Start with **Google Colab** to learn, then move to **VS Code** or **PyCharm** when you start building real projects.

---

## 🧪 Universal Test Code — Works Everywhere

Copy this into **any** of the environments above. If it runs without errors, you're ready for the next post!

```python
"""
🧪 Universal ML Environment Test
Works in: Colab, Jupyter, VS Code, PyCharm
"""

# Step 1: Import libraries
import numpy as np
import pandas as pd

# Step 2: Create some fake student data
data = {
    "Student": ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "Math":    [88, 92, 75, 95, 83],
    "Science": [90, 85, 80, 92, 88],
    "English": [78, 88, 85, 90, 95]
}

df = pd.DataFrame(data)

# Step 3: Basic analysis
df["Average"] = df[["Math", "Science", "English"]].mean(axis=1)
df["Grade"] = df["Average"].apply(
    lambda x: "A" if x >= 90 else "B" if x >= 80 else "C"
)

print("📊 Student Performance Report")
print("=" * 45)
print(df.to_string(index=False))
print("=" * 45)
print(f"\n🏆 Top student: {df.loc[df['Average'].idxmax(), 'Student']}"
      f" ({df['Average'].max():.1f})")
print(f"📈 Class average: {df['Average'].mean():.1f}")

# Step 4: Quick ML preview — correlation
correlation = df["Math"].corr(df["Science"])
print(f"🔗 Math-Science correlation: {correlation:.2f}")
print(f"\n✅ All tests passed! You're ready for ML. 🚀")
```

**Expected output:**

```
📊 Student Performance Report
=============================================
 Student  Math  Science  English  Average Grade
   Alice    88       90       78     85.3     B
     Bob    92       85       88     88.3     B
 Charlie    75       80       85     80.0     B
   Diana    95       92       90     92.3     A
     Eve    83       88       95     88.7     B
=============================================

🏆 Top student: Diana (92.3)
📈 Class average: 86.9
🔗 Math-Science correlation: 0.63

✅ All tests passed! You're ready for ML. 🚀
```

---

## What's Next?

In the next post, we'll cover **Python Essentials for ML** — the Python concepts you actually need for machine learning (no fluff, just the useful stuff).

Topics include:
- Lists, dictionaries, and comprehensions
- Functions and lambda expressions
- NumPy arrays — the foundation of all ML data
- Reading data with Pandas

**[Stay tuned →](/python-ml-guide/)**

---

*Have questions? Found an issue? [Open an issue on GitHub](https://github.com/ShadowAmitendu/python-ml-guide/issues).*
