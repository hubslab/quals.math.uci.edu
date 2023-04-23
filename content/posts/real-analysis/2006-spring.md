# 2006 Spring Real Analysis

## Problem 1

::ProblemBlock
Let $f\in L^p\cap L^q$ with $1\leq p < q\leq\infty$. Prove that $f\in L^r$ for all $p < r < q$.
::

### Proof

See [Problem 5 of 2023 Winter Real Analysis](/pdfs/quals/2023WR.html).

## Problem 2

::ProblemBlock
Let $\mathcal M$ be the Lebesgue measurable sets on the real line. Consider two measures on $\mathcal M$: Lebesgue measure $m$ and the counting measure $\tau$, where for $A\in\mathcal M$ we set $\tau(A)$ to be the number of points in $A$. Show that $m$ is absolutely continuous with respect to $\tau$, but that $\dfrac{dm}{d\tau}$ doesn't exist, i.e., there is no measureable function $h$ such that $m(A)=\int_A hd\tau$ for all $A\in\mathcal M$. Does this contradict to the Radon-Nikodym Theorem?
::

### Proof 

See [Radon-Nikodym](https://en.wikipedia.org/wiki/Radon–Nikodym_theorem). The Radon-Nikodym derivative doesn't exist because:

1. $m$, $\tau$ live in two different $\sigma$-algebra
2. $\tau$ is not $\sigma$-finte

## Problem 3

::ProblemBlock
Given a measure space $(X,\mathfrak U,\mu)$, let $(f_n\mid n\in\mathbb N)$ and $f$ be extended real-valued $\mathfrak U$-measurable functions on a set $D\in\mathfrak U$ and assume that $f$ is real-valued a.e. on $D$. Suppose there exists a sequence of positive numbers $(\eps_n\mid n\in\mathbb N)$ such that:

1. $\sum_{n\in\mathbb N}\eps_n<\infty$
2. $\int_D|f_n-f|^pd\mu<\eps_n$ for every $n\in\mathbb N$ for some fixed $p\in(0,\infty)$

Show that the sequence $(f_n\mid n\in\mathbb N)$ convergens to $f$ a.e. on $D$.
::
