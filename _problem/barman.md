---
layout: problem
title: Barman | Problem
name: Barman
url-name: barman
year: 2011
ID: "001"
author: Sergio Jimenez Celorrio
category:
  - "Sequential"
  - "Multi-Core"
  - "Satisficing"
  - "Optimal"
language: PDDL
description: >
  In this domain, there is a robot barman that manipulates drink dispensers, glasses, and a shaker.
  The goal is to find a plan of the robot's actions that serves a desired set of drinks. In this
  domain deletes of actions encode relevant knowledge given that robot hands can only grasp one
  object at a time and given that glasses need to be empty and clean to be filled.
source: "https://github.com/potassco/pddl-instances/tree/master/ipc-2011/domains/barman-sequential-satisficing"
variations:
  - name: Sequential & Satisficing
    description: >
      In this domain, there is a robot barman that manipulates drink dispensers, glasses, and a shaker.
      The goal is to find a plan of the robot's actions that serves a desired set of drinks. In this
      domain deletes of actions encode relevant knowledge given that robot hands can only grasp one
      object at a time and given that glasses need to be empty and clean to be filled.
    modelPath: "../database/barman/sequential-satisficing/domain.pddl"
    instancesPath: "../database/barman/sequential-satisficing/instances.zip"
  - name: Sequential & Optimal
    description: >
      In this domain, there is a robot barman that manipulates drink dispensers, glasses, and a shaker.
      The goal is to find a plan of the robot's actions that serves a desired set of drinks. In this
      domain deletes of actions encode relevant knowledge given that robot hands can only grasp one
      object at a time and given that glasses need to be empty and clean to be filled.
    modelPath: "../database/barman/sequential-optimal/domain.pddl"
    instancesPath: "../database/barman/sequential-optimal/instances.zip"
  - name: Sequential & Multicore
    description: >
      In this domain, there is a robot barman that manipulates drink dispensers, glasses, and a shaker.
      The goal is to find a plan of the robot's actions that serves a desired set of drinks. In this
      domain deletes of actions encode relevant knowledge given that robot hands can only grasp one
      object at a time and given that glasses need to be empty and clean to be filled.
    modelPath: "../database/barman/sequential-multicore/domain.pddl"
    instancesPath: "../database/barman/sequential-multicore/instances.zip"
links:
  - type: "link"
    url: "/addProblem/"
    text: "Add a Problem"
  - type: "dropdown"
    name: "Problems"
    items:
      - url: "/problems/problems_by_id.html"
        text: "Ordered by ID"
      - url: "/problems/problems_by_category.html"
        text: "Ordered by Category"
      - url: "/problems/problems_by_language.html"
        text: "Ordered by Language"
---
