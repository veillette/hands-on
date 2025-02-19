import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
import matplotlib.patches as patches

# Create the figure and axis
plt.figure(figsize=(10, 6))
ax = plt.subplot(111)

# Define the x range and calculate the Gaussian PDF
x = np.linspace(-4, 4, 1000)
sigma = 1.0
mu = 0.0
pdf = 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x-mu)**2/(2*sigma**2))

# Plot the Gaussian curve
plt.plot(x, pdf, 'k-', lw=2, label='Gaussian Distribution')

# Function to calculate the area (probability) between 0 and x_val
def area_between_0_and_x(x_val):
    return stats.norm.cdf(x_val) - stats.norm.cdf(0)

# Choose x/sigma value to illustrate - let's use x/sigma = 1.0
x_val = 1.0

# Fill the area from 0 to x_val
x_fill = np.linspace(0, x_val, 100)
y_fill = 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x_fill-mu)**2/(2*sigma**2))
plt.fill_between(x_fill, y_fill, color='skyblue', alpha=0.6)

# Add probability value text
prob = area_between_0_and_x(x_val)
plt.text(x_val/2, 0.15, f"Area = {prob:.3f}", 
         ha='center', va='center', fontsize=12, 
         bbox=dict(facecolor='white', alpha=0.8))

# Add x/sigma = 1.0 vertical line
plt.axvline(x=x_val, color='blue', linestyle='--', alpha=0.7)
plt.axvline(x=0, color='blue', linestyle='--', alpha=0.7)

# Annotate the endpoints
plt.annotate('x/σ = 0', xy=(0, 0), xytext=(0, -0.02),
             arrowprops=dict(arrowstyle='->'), ha='center')
plt.annotate(f'x/σ = {x_val}', xy=(x_val, 0), xytext=(x_val, -0.02),
             arrowprops=dict(arrowstyle='->'), ha='center')

# Add a small table showing values
table_data = [
    ['x/σ', 'Probability'],
    ['0.0', '0.000'],
    ['0.5', '0.192'],
    ['1.0', '0.341'],
    ['1.5', '0.433'],
    ['2.0', '0.477'],
    ['3.0', '0.499']
]

# Create the table in the upper right corner
table = plt.table(cellText=table_data, loc='upper right', cellLoc='center', 
                 colWidths=[0.1, 0.1], bbox=[0.7, 0.55, 0.28, 0.35])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.5)

# Customize the plot
plt.grid(alpha=0.3)
plt.title('Area Under the Gaussian Distribution Curve', fontsize=14)
plt.xlabel('x/σ (Standard Deviations from Mean)', fontsize=12)
plt.ylabel('Probability Density', fontsize=12)
plt.xlim(-3, 3)
plt.ylim(-0.03, 0.45)

# Add a descriptive caption as text under the plot
plt.figtext(0.5, 0.01, 
           "Figure A1.1: The shaded area represents the probability of a \n"
           "deviation falling between 0 and x=1σ (34.1% of total area).", 
           ha='center', fontsize=11)

# Add an explanation of the concept
plt.text(-2.8, 0.3, 
        "The probability that a measurement\n"
        "falls between 0 and x is given by:\n"
        r"$\int_0^x \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{t^2}{2\sigma^2}}dt$",
        fontsize=10, bbox=dict(facecolor='lightyellow', alpha=0.9))

plt.tight_layout(rect=[0, 0.03, 1, 0.97])
plt.savefig('gaussian_area.svg', dpi=300)
plt.show()
