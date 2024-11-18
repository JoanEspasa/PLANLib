---
#HTML Head Element Details
title: Home | PLANLib
layout: home
description: "This library offers streamlined solutions for tackling planning and network flow challenges. Dive into efficient tools and resources tailored to solve complex scheduling, logistics, and resource management problems. Whether you’re exploring optimization or need robust decision-making support, PLANLib’s homepage is your starting point for powerful, user-friendly planning solutions."

#NavBar Information/Links
links:
  - type: "link"
    url: "/addProblem"
    text: "Add a Problem"
  - type: "dropdown"
    name: "Problems"
    items:
      - url: "/problems/problems_by_ID.html"
        text: "Ordered by ID"
      - url: "/problems/problems_by_category.html"
        text: "Ordered by Category"
      - url: "/problems/problems_by_category.html"
        text: "Ordered by Category"

#Main Content
library-name: PLANLib #name of the library as the title of the page.
library-icon: fa-flask #icon that goes right next to the library name.
library-description: A General-Usage Library for Constraint Problems #description of the library
block-1:
  main-question: What is PLANLib? #First question on the main block of the page.
  question-answer:
    PLANLib is a general-purpose library web application designed to
    organize, display, reference, and help solvers in anything related to
    planning problems. #Text that appears below the question.
  spacer: "Here you will find:"
  table-values: #values in the table below the first question block.
    - A recollection of diverse planning problems submitted by users
      or used during instances of the International Planning Competition (IPC)
    - The different models, generators, instances, and variations that problems might have
    - All relevant references for the problem, its sources and details.
block-2:
  main-question: What is the motivation behind PLANLib? #Second Question on the main page.
  question-answer: The main motivation behind this project was to create a centralised platform that allows for planners from all over the world to contribute to the community with new problems and new solutions in the most streamlined fashion possible. <br> It also establishes a historical repository of past problems that might not be available elsewhere on the internet. #Answer to the past question.
stats:
  main-title: Library Data #Main title of the stats block
  stats-block:
    - name: Problems
      value: 0
    - name: Authors
      value: 0
    - name: Categories
      value: 0
---
