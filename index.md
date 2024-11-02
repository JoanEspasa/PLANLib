---
#HTML Head Element Details
title: Home | PLANLib
layout: home
description: "This library offers streamlined solutions for tackling planning and network flow challenges. Dive into efficient tools and resources tailored to solve complex scheduling, logistics, and resource management problems. Whether you’re exploring optimization or need robust decision-making support, PLANLib’s homepage is your starting point for powerful, user-friendly planning solutions."

#NavBar Information/Links
links:
  - type: "link"
    url: "https://example.com"
    text: "Example Link 1"
  - type: "link"
    url: "https://anotherexample.com"
    text: "Example Link 2"
  - type: "dropdown"
    name: "Example Dropdown"
    items:
      - url: "https://dropdownitem1.com"
        text: "Dropdown Item 1"
      - url: "https://dropdownitem2.com"
        text: "Dropdown Item 2"
      - url: "https://dropdownitem3.com"
        text: "Dropdown Item 3"

#Main Content
library-name: PLANLib #name of the library as the title of the page.
library-icon: fa-flask #icon that goes right next to the library name.
library-description: A General-Usage Library for Constraint Problems #description of the library
block-1: 
    main-question: What is PLANLib? #First question on the main block of the page.
    question-answer: PLANLib is a general-purpose library web application designed to
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
    - name: How many problems currently?
      value: 0
    - name: How many authors so far?
      value: 0
    - name: How many categories so far?
      value: 0

---
