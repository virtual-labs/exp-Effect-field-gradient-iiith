# Drift
Electrons in a doped semiconductor begin to move when electric field is applied across it. Electrons, being negatively charged, move in the direction opposite to the electric field, while holes, being positively charged, move in the direction of the electric field. As they are moving, they undergo collisions with vibrating Si atoms. This makes their movement unpredictable, haphazard (similar to Brownian motion of gas particles). However, the net velocity of each charge carrier is along the electric field.Therefore, the velocity can be modeled as:

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
J<sub>n</sub> = -q<sub>n</sub> * vd<sub>n</sub> = -q<sub>n</sub> * ч<sub>n</sub> * E</b> (For electrons)</p>
<p align="center"><b>
J<sub>p</sub> = -q<sub>p</sub> * vd<sub>p</sub> = -q<sub>p</sub> * ч<sub>p</sub> * E </b>(For holes)</p>
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
F<sub>p</sub> = -D<sub>p</sub> * (dp/dx)</b>(For holes)</p>
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
