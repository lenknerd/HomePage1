My doctoral work at Carnegie Mellon University was in a sub-field of Physics calling *Lattice QCD*.
Lattice QCD is a type of "computational physics", or physics which is investigated primarily using computer simulations.
This may be an unfamiliar idea to some - the conventional idea of physics is that it involves either equations scribbled on blackboards, or large experiments like the particle accelerators that received so much press recently.
Where does computer programming come in?

This article describes Lattice QCD in what I hope is an accesible way, and discusses why computer programming is the best tool available for making progress in this area of physics.
For those interested in more technical detail, a list of my publications may be found [here](#).
<!-- To do; put in the actual link! -->

# A Jargon-Free Introduction to Lattice QCD

<img src="img/blowups.gif" style="margin:5px;" align="right" width="250px"/>

<p>If you were to look very, <i>very</i> closely at any of the matter in the world around you, you would find that it is made of tiny bits of stuff called atoms.
Zooming in even further, into the atoms' cores, you would then find that these are made up of even smaller bits of stuff called protons and neutrons.
And finally, at the very bottom<sup>2</sup> of the "bits-of-stuff" hierarchy, there are incredibly tiny point-like bits of stuff called <i>quarks</i> and <i>gluons</i>, which bind together to form protons and neutrons.</p>

<p>It turns out that describing quark and gluon binding is extremely tricky business in physics, much more so than similar binding phenomena at larger scales.
For instance, if you and a friend hold hands and step on a scale together, you find (not surprisingly) that your combined weight is the sum of your individual weights.
However, if three quarks "grab hold of each other" and step on a scale, they find that the scale reads more than a <i>hundred times</i> the sum of their individual weights!</p>

<p>This "extra mass" acquired through binding is actually the origin of most of the mass in our world, far more than the famed Higgs mechanism.
But where does this extra mass come from, and why does it arise when quarks get together and interact?</p>

<p>That has proven to be a very thorny question for physicists, and even when, in the 1960's, equations were invented for describing quark and gluon behavior, it was still not clear why this extra mass should appear!
Those equations, now known as the theory of Quantum Chromodynamics or <font color=#990000><i>QCD</i></font>, provided clear predictions for how quarks behave on their own,<sup>3</sup> but the math was too difficult to solve in bound systems (such as protons/neutrons) where forces and interactions between quarks become important.</p>

<h4>Strongly Interacting Systems</h4>

<p>Why is it that our QCD equations are difficult to apply in bound-state situations?
The reason lies in the fact that quarks in their natural habitat (bound inside protons or other such groups) are <i>strongly interacting</i> -- their behavior is determined to a large degree by that of their neighbors.
To see what is so difficult about strongly interacting systems, let's look at a few examples.

<p>First, for contrast, let's look at a weakly interacting system; say, this group of cats.</p>

<div align="center">
<img src="cats_together.jpg" alt="Image Not Available" style="" align="center" width="300px">
</div>

<p>None of them seems to care very much what the others are doing.
So if we know that a cat on its own spends 1/3 of its time going one way, 1/3 of its time going another way, 1/4 of its time eating, etc., then we can guess what a group of them will look like: about 1/3 of the cats will be going one way, 1/4 of them will be eating, and so on.
There may actually be some limited interactions between them, but it is a decent starting point to assume they move independently, and then make small corrections to that.
In physics this is often referred to as "perturbation theory", and it can be done via pencil-and-paper calculations.</p>

<img src="fish_tornado_cropped.jpg" style="margin:15px" align="right" width="200px">

<p>On the other hand, the school of fish at right constitute a strongly interacting system; each fish makes most of its motion decisions based on the actions of its neighbors.
For instance, each fish's instincts may be something like "If my neighbor on the left is further than my neighbor on the right, I move left, and vice versa."
Yet even if we knew all these individual-fish rules, it would still be pretty hard to predict what the overall school will look like -- there are just too many fish for pencil-and-paper calculations to be practical, and the "non-interacting" approximation is completely wrong.</p>

<p>However, modern computers provide a fairly convenient way of modeling systems such as these fish.
All we need to do is tell the computer what the rules are for each fish, and the program will cycle through all the fish, and for each one, check the position of its neighbors, and apply the specified rule set to see where that fish will go in the next second, or microsecond.
In fact, just this sort of model has been used to study fish; see for instance <a href="http://cognition.ups-tlse.fr/dynactom/dynactomprojetsEn.html">Complex Dynamics and Interaction Networks in Animal Societies</a> at Universit&eacute Paul Sabatier.</p>

<h4>Lattice QCD</h4>

<p>Fast-moving quarks, such as those in high energy physics experiments, behave like those cats: they have some small interactions, but nothing much compared to their own impetus for zipping by each other and doing whatever they would do on their own.
They are weakly interacting, and thus relatively easy to model.
But quarks in an everyday proton or neutron are more like those fish; they interact very strongly, and their behavior is very different than it would be on their own.
Thus it is useful to model these systems of quarks and gluons on a computer.<sup>4</sup></p>

<img align="left" src="lgt_sugar0.jpg" style="margin:15px" width="130px">

<p>There are still a fair amount of difficulties with these models, especially relating to the fact that computers can only deal with a finite number of spatial points.
Continuous space must be approximated by a "lattice" of points (hence Lattice QCD), rather like like the grid of pixels on your computer screen.
But despite challenges, Lattice QCD has provided excellent predictions about properties of bound states of quarks and gluons, confirming that QCD is the right theory, and improving our understanding of how quarks and gluons make up the matter around us.</p>

<font size="2">
<p><sup>1</sup>Mostly.</p>

<p><sup>2</sup>At least, as far as we know... we haven't discovered anything smaller yet.</p>

<p><sup>3</sup>Actually, we now think that quarks can NEVER move entirely on their own -- this principle is known as <i>confinement</i>.
But they can move <i>nearly</i> independently in some situations, such as very high-energy laboratory experiments, where we can test our equations.</p>

<p><sup>4</sup>If you followed all of that particularly sharply, you may object thus: "Wait, you said that strange behaviour could arise when just three quarks bind together, and `step on a scale.'  Three is not so many!  Why do you still need computers to model that sort of system?"
The answer is that there are really many more than three quarks in any bound state, because quark-antiquark pairs are continually popping out of nothingness, then disappearing back!
Relativistic field theory predicts this... but that's getting well beyond the scope of this introduction.</p>

</fo
