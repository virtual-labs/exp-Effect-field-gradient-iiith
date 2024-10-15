# Drift
When an electric field is applied across a doped semiconductor, charge carriers (electrons or holes) begin to move in the direction of the electric field, although they undergo random collisions due to interactions with vibrating silicon atoms (Brownian motion). The net velocity, however, is directed along the electric field.

Drift Velocity Formulas
<p align="center"><b>
v<sub>d</sub> = -ч<sub>n</sub> * E</b> (For electrons)</p>
<p align="center"><b>
v<sub>d</sub> = ч<sub>p</sub> * E </b>(For holes)</p>

Where:
<b>v<sub>d</sub></b> is the drift velocity<br>
<b>ч</b> is the mobility of the charge carriers (electrons or holes)<br>
<b>E</b> is the applied electric field
### Drift Current Density
The drift current density depends on the velocity, density, and charge of the carriers:
<p align="center"><b>
J<sub>n</sub> = -q<sub>n</sub> * v<sub>d</sub> = -q<sub>n</sub> * ч<sub>n</sub> * E</b> (For electrons)</p>
<p align="center"><b>
J<sub>p</sub> = -q<sub>p</sub> * v<sub>d</sub> = -q<sub>p</sub> * ч<sub>p</sub> * E </b>(For holes)</p>
The total drift current density:
<p align="center"><b>
J<sub>drift</sub> = J<sub>n</sub> + J<sub>p</sub></b></p>

According to Ohm’s law:
<p align="center"><b>
J<sub>drift</sub> = σE = E / ρ</b></p>

Where:

<b>σ</b> is the conductivity<br>
<b>ρ</b> is the resistivity<br>
# Diffusion
Diffusion refers to the movement of charge carriers from a region of higher concentration to a region of lower concentration, which occurs in non-uniformly doped semiconductors. This random movement results in diffusion current, which works to eliminate the charge gradient.

### Fick's First Law
The diffusion flux is proportional to the concentration gradient:

<p align="center"><b>
F<sub>n</sub> = -D<sub>n</sub> * (dn/dx)</b> (For electrons)</p>
<p align="center"><b>
F<sub>p</sub> = -D<sub>p</sub> * (dn/dx)</b>(For holes)</p>
Where:

<b>D</b> is the diffusion <br>
<b>dn/dx</b> is the concentration gradient<br>

Therefore the diffusion Current Density will be:
<p align="center"><b>
J<sub>n</sub> = -q * D<sub>n</sub> * (dn/dx)</b> (For electrons)</p>
<p align="center"><b>
J<sub>p</sub> = -q * D<sub>p</sub> * (dp/dx)</b>(For holes)</p>
The total diffusion current density:
<p align="center"><b>
J<sub>diff</sub> = J<sub>n</sub> + J<sub>p</sub></b></p>