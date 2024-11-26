---
layout: problem
name: Elevator
title: Elevator | Problem
url-name: elevator
year: 2011
ID: "002"
date: 8/11/2024 18:52:08
category: //
language: //
description: >
  The idea for this domain came up from the Miconic domain of IPC2, however the domain has been designed from scratch. The scenario is the following: There is a building with N + 1 floors, numbered from 0 to N. The building can be separated in blocks of size M + 1, where M divides N. Adjacent blocks have a common floor. For example, suppose N = 12 and M = 4, then we have 13 floors in total (ranging from 0 to 12), which form 3 blocks of 5 floors each, being 0 to 4, 4 to 8, and 8 to 12.<br>
  The building has K fast (accelerating) elevators that stop only in floors that are multiples of M / 2 (so M has to be an even number). Each fast elevator has a capacity of X persons. Furthermore, within each block, there are L slow elevators, that stop at every floor of the block. Each slow elevator has a capacity of Y persons (usually Y < X).<br>
  There are costs associated with each elevator starting/stopping and moving. In particular, fast (accelerating) elevators have negligible cost of starting/stopping but have significant cost while moving. On the other hand, slow (constant speed) elevators have significant cost when starting/stopping and negligible cost while moving. Traveling times between floors are given for any type of elevator, taking into account the constant speed of the slow elevators and the constant acceleration of the fast elevators.<br>
  There are several passengers, for which their current location (i.e., the floor they are on) and their destination are given. The planning problem is to find a plan that moves the passengers to their destinations while it maximizes some criterion.<br>
modelPath: "../database/elevator/domain.pddl"
instancesPath: "../database/elevator/instances.zip"
author: "Unknown"
path: random
source: https://github.com/potassco/pddl-instances/tree/master/ipc-2011/domains/elevator-sequential-satisficing
variations:
  - name: Sequential & Satisficing
    description: //
  - name: Sequential & Optimal
    description: //
  - name: Sequential & Multicore
    description: //
links:
  - type: "link"
    url: "/addProblem/"
    text: "Add a Problem"
  - type: "dropdown"
    name: "Problems"
    items:
      - url: "/problems/problems_by_idnp.html"
        text: "Ordered by ID"
      - url: "/problems/problems_by_category.html"
        text: "Ordered by Category"
      - url: "/problems/problems_by_language.html"
        text: "Ordered by Language"
---