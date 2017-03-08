I recently participated in [Protohype Pittsburgh](http://www.ctsi.pitt.edu/funding-innovation-protohype.html), an engineering and design competition organized by [Tech Shop Pittsburgh](http://www.techshop.ws/pittsburgh.html) and the University of Pittsburgh's [Clinical and Translational Sciences Institute (CTSI)](http://www.ctsi.pitt.edu/).
Along with a few of my coworkers from [DSA](http://dsautomation.com/) and a biomedical research team at Pitt, we designed and built a product prototype for entry into this friendly outside-of-work competition.
Our product was an automatic calibration system for physical therapy motion tracking units.

It was a fantastic experience - a chance to showcase my professional skills, meet a great group of researchers and makers in the Pittsburgh area, put together a neat and potentially impactful product, all with a pretty sweet reward at the end.
The details follow, and there's a lot - it's the first chance I've had to really pull everything together and summarize the completed project, so I went for it here.

## The ProtoHype Competition

Tech Shop Pittsburgh and CTSI teamed up to organize the ProtoHype competition, with the idea of combining CTSI's understanding of what needs there are in the medical field, and Tech Shop Pittsburgh's extensive local facility for design and fabrication, and their maker-minded membership base.
The idea is that teams at the CTSI would identify challenges in the field of biomedicine that could be solved by potential products.
They would then pair with a team of Tech Shop members to create a prototype product to address that need.
After prototypes were built, they would be presented and judged by Tech Shop and CTSI staff for technical merit and potential benefit to patients and caregivers.
The winner would receive a grant to aid in continued development and commercialization.

## Our Challenge

We worked with Dr. Kevin Bell and his group in the University of Pittsburgh bioengineering department, including Marcus Allen and Chukwudi Onyeukwu.
They work with precision motion capture units (accelerometers, magnetometers, and gyroscopes) combined into an IMU, or intertial measurement unit, that allow precise characterization of patients body movements during physical therapy.
These help doctors and patients ensure they are performing exercises correctly, but the devices are difficult to calibrate - thus the need for an automated calibration procedure.

Here's Dr. Bell's team's own statement of the challenge, posted early in the Protohype competition;

<iframe width="400" height="305" align="center"
src="https://www.youtube.com/embed/96xLXqTQkO8">
</iframe>

We responded with a proposed solution, and we were selected as one of the teams to create a solution to automate the calibration procedure.

<!-- Leaving out for now, too much video content w/ above
<iframe src="https://drive.google.com/file/d/0B9aM7kLnVl_mMjN3YTF6MnczLUk/preview" width="640" height="360"></iframe>
-->

## Mechanical Design and Build

In order to automate the calibration, we designed a three-axis rotator that would align the IMU to various positions at which readings were necessary.
Readings would be taken via a Bluetooth interface provided by the IMU's manufacturer, [YEI](https://yostlabs.com/).
The readings would then be used to choose calibration coefficients to download to the device's on-board memory.

The mechanical design was done in [AutoDesk Fusion 360](http://www.autodesk.com/products/fusion-360/overview?mktvar002=698238&mkwid=szK6QE0U2|pcrid|177331758407|pkw|fusion%20360|pmt|e|pdv|c|&&gclid=COKKlLPuxdICFQKHswodTaoK9g), a cloud-based 3D CAD/CAM package available on the Tech Shop computers.
We limited part size to the print area of the 3D printers at the Tech Shop, and made as many duplicate parts as possible to make replacement easier.

<div align="center">
<img src="/img/protohype-design-screeenshot.png" alt="Image Not Available" style="" align="center" width="375px">
</div>

Electrical design was done using [Fritzing](http://fritzing.org/home/), an open-source package that builds in pinouts on many common boards including Arduinos.
We utilized [Arduino Micros](https://www.arduino.cc/en/Main/ArduinoBoardMicro) for low-level motor control.
These are inexpensive enough that it made sense to purchase three, one for each axis control, so as to be able to utilize sufficient interrupts on the Arduino for better timing performance per motor.

Serial commands were passed to these Arduinos via USB connection to a PC running the calibration interface and sequencer program.
The main sequencer and GUI was written in NI LabVIEW (code snapshot below), a graphical programming interface directed towards rapid prototyping, integration, and GUI development.

<div align="center">
<img src="/img/IMU-Main-BD.png" alt="Image Not Available" style="" align="center" width="400pxi">
</div>

The code to directly interface to the IMU was written in C and compiled into a shared library to be called by LabVIEW.
Here's a screenshot of the main calibration GUI;

<div align="center">
<img src="/img/IMU-Main-FP.png" alt="Image Not Available" style="" align="center" width="400pxi">
</div>

## The Result

The end product worked swimmingly!
Here's a video of the system in operation; it's lengthy, but a few things to note are A) the orientation pictures on the GUI match with each successive calibration positions, B) the LED flashes once in position for visible indication that the calibration readings happen when the positioning is complete, and C) there's a pretty cool turn at around 1:15 if you want to skip right to that.

<iframe width="420" height="260" align="center"
src="https://drive.google.com/file/d/0B9aM7kLnVl_mSGRUeS00RkF5SWM/preview"></iframe>

The process could use some tweaks if we get a chance - quicker moves by adjusting motor position PID, for example.
But the result was a working system to yield a well-calibrated IMU device without the time-intensive work of rotating repeatedly (24 times) carefully to the right positions and taking measurements at each, avoiding potential for human error.

Unfortunately, our submission didn't win the overall competition - there were a lot of excellent entries, kudos to the many great competitors in the Protohype challenge.
But in the "apples-to-apples" comparison, we did have the submission that Dr. Bell was most happy with, and we've even been discussing some other potential automation projects we may tackle with his group.
And we made it far enough in the competition to be awarded yearlong memberships to Tech Shop Pittsburgh, a pretty fantastic value!

It was a great experience all around - fun, edifying, with a useful product at the conclusion!
Many thanks to all involved; CTSI, Tech Shop Pittsburgh, Dr. Kevin Bell and his group, Nick Leyder at YEI labs for his help with their Bluetooth connection protocol, and especially to my teammates on the project, Wil Hamilton, Chris Mullin, and Tim Nolan.
