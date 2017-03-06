My doctoral work at Carnegie Mellon University was in a sub-field of Physics calling *Lattice QCD*.
Lattice QCD is a type of "computational physics", or physics which is investigated primarily using computer simulations.
This may be an unfamiliar idea to some - the conventional idea of physics is that it involves either equations scribbled on blackboards, or large experiments like the particle accelerators that received so much press recently.
Where does computer programming come in?

This article describes Lattice QCD in what I hope is an accessible way, and discusses why computer programming is the best tool available for making progress in this area of physics.
For those interested in more technical detail, a list of my publications may be found [here](#).
<!-- To do; put in the actual link! -->

## A Jargon-Free Introduction to Lattice QCD

<img src="/img/blowups.gif" style="margin:5px;" align="right" width="250px"/>

If you were to look very, *very* closely at any of the matter in the world around you, you would find that it is made of tiny bits of stuff called atoms.
Zooming in even further, into the atoms' cores, you would then find that these are made up of even smaller bits of stuff called protons and neutrons.
And finally, at the very bottom<sup>1</sup> of the "bits-of-stuff" hierarchy, there are incredibly tiny point-like bits of stuff called *quarks* and *gluons*, which bind together to form protons and neutrons.

It turns out that describing quark and gluon binding is extremely tricky business in physics, much more so than similar binding phenomena at larger scales.
For instance, if you and a friend hold hands and step on a scale together, you find (not surprisingly) that your combined weight is the sum of your individual weights.
However, if three quarks "grab hold of each other" to form a proton or neutron, the combined partcile weighs more than a **hundred times** the sum of their individual weights!

This mysterious "extra mass" acquired through binding is actually the origin of most of the mass in our world, far more than the famed Higgs mechanism.
But where does this extra mass come from, and why does it arise when quarks get together and interact?

That has proven to be a very thorny question for physicists.
Even when equations were found that describe individual quark and gluon behavior, it was still not clear why this extra mass should appear.
Those equations, now known as the theory of Quantum Chromodynamics or **QCD**, provide clear predictions for how quarks behave on their own, but the math is too difficult to solve in bound systems (such as protons/neutrons) where forces and interactions between quarks become important.

## Strongly Interacting Systems

Why is it that our QCD equations are difficult to apply in bound-state situations?
The reason lies in the fact that quarks in their natural habitat (bound inside protons or other such groups) are **strongly interacting** -- their behavior is determined to a large degree by that of their neighbors.
To see what is so difficult about strongly interacting systems, let's look at a few examples.

First, for contrast, let's look at a weakly interacting system; say, this group of cats.

<div align="center">
<img src="/img/cats_together.jpg" alt="Image Not Available" style="" align="center" width="300px">
</div>

None of them seems to care very much what the others are doing.
So if we know that a cat on its own spends 1/3 of its time going one way, 1/3 of its time going another way, 1/4 of its time eating, etc., then we can guess what a group of them will look like: about 1/3 of the cats will be going one way, 1/4 of them will be eating, and so on.
There may actually be some limited interactions between them, but it is a decent starting point to assume they move independently, and then make small corrections to that.
In physics this is often referred to as "perturbation theory", and it can be done via pencil-and-paper calculations.

<img src="/img/fish_tornado_cropped.jpg" style="margin:15px" align="right" width="200px">

On the other hand, the school of fish at right constitute a strongly interacting system; each fish makes most of its motion decisions based on the actions of its neighbors.
For instance, each fish's instincts may be something like "If my neighbor on the left is further than my neighbor on the right, I move left, and vice versa."
Yet even if we knew all these individual-fish rules, it would still be pretty hard to predict what the overall school will look like -- there are just too many fish for pencil-and-paper calculations to be practical, and the "non-interacting" approximation is completely wrong.

However, computers provide a fairly convenient way of modeling systems such as these fish.
All we need to do is tell the computer what the rules are for each fish, and the program will cycle through all the fish, and for each one, check the position of its neighbors, and apply the specified rule set to see where that fish will go in the next second, or microsecond.
In fact, just this sort of model has been used to study the movement of fish schools (see <a href="http://www.sciencedirect.com/science/article/pii/S0022519305806812">this paper</a> for example).

## Lattice QCD

Very fast-moving quarks, such as those in high energy physics experiments, behave like those cats: they have some small interactions, but nothing much compared to their own impetus for zipping by each other and doing whatever they would do on their own.
They are relatively weakly interacting, and thus relatively easy to model.
But quarks in an everyday proton or neutron are more like those fish; they interact very strongly, and their behavior is very different than it would be on their own.
Thus it is useful to model these systems of quarks and gluons on a computer.

<img align="left" src="/img/lgt_sugar0.jpg" style="margin:15px" width="180px">

There are still a many difficulties with these models, especially relating to the fact that computers can only deal with a finite number of spatial points.
Continuous space must be approximated by a "lattice" of points (hence Lattice QCD), like the grid of pixels on your computer.
The more points, the more "realistic" the model looks, but at the expense of cost and complication.
Lattice QCD researchers innovate to push the boundaries of efficiency in these simulations, then also find the most powerful computers available to utilize in running the programs.
Our simulations ran on hundreds or thousands of cores at supercomputers such as [Stampede at the Texas Advanced Computing Center](https://www.tacc.utexas.edu/stampede/).

With these techniques, Lattice QCD has provided excellent predictions about properties of bound states of quarks and gluons, confirming that QCD is the right theory, and improving our understanding of how quarks and gluons make up the matter around us.

<!-- Footnote Section -->
<font size="3">

<sup>1</sup>That is far as we know, of course - we haven't discovered anything smaller yet.

</font>
