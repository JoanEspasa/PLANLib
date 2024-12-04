---
#HTML Head Element Details
title: AddProblem | PLANLib
layout: addProblem
description: "This library offers streamlined solutions for tackling planning and network flow challenges. Dive into efficient tools and resources tailored to solve complex scheduling, logistics, and resource management problems. Whether you’re exploring optimization or need robust decision-making support, PLANLib’s homepage is your starting point for powerful, user-friendly planning solutions."

#Page Header
header: "How to request a new problem?"

#NavBar Information/Links
links:
  - type: "link"
    url: "/addProblem"
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

#Instructions for the Problem Adding
tasks:
  - title: "Clone the Repository"
    instructions:
      - "Go to the link using the <span class='fw-bold'>Contribute to GitHub</span> button on the navbar."
      - "Clone the repository with the following command <code>git clone https://github.com/JoanEspasa/PLANLib.git</code>"
  - title: "Adding the files."
    instructions:
      - "Each problem is composed of a <code>.md</code> file in the <code>_problem</code> folder as well as the necessary <code>instances.zip</code> with their respective model file."
      - "When cloning, first, you should write the <code>.md</code> file of the problem. Follow the structure of the other <code>.md</code> files for guidance."
      - "Then create a new folder with the problems name on the database folder and add the <code>instances.zip</code> and the model file."
  - title: "Preparation"
    instructions:
      - "Now, compile the project using the command <code>npm run serve</code> on the terminal. If it compiles, you should be able to test how your new problem looks on the page."
      - "Once you are satisfied with the result, you should submit a PR for the problem to be added onto the main branch."
      - "Thank you for your contribution!"
---
