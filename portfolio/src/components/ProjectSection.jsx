import React from 'react';
import Section from './primitives/Section';
import Project from './primitives/Project';

const projects = [
    {
        title: "VanGo: Itinerary Planner",
        image: require("../assets/images/vango-main-thin.PNG"),
        techStack: ["React", "Redux", "Meteor", "MongoDB", "Heroku"],
        description: 
            <>
                <div>
                    VanGo is an itinerary planner that lets you create, save and share itineraries with local events and attractions in Vancouver.
                    My primary focus was designing the UI, creating the Itinerary, Login, and Registration Pages in React and Redux, 
                    setting up the database for itinerary data, and integrating user experience feedback.
                </div>
                <br/>
                <em>Challenges:</em>
                <ul>
                    <li>
                        Having both the database (MongoDB via Meteor) and state (Redux) track changes in the React Components led to mutliple re-renders, thus throttling.
                        I was able to resolve this by decoupling the client from the database by removing the Meteor tracker.
                    </li>
                    <li>
                        Implementing authentication with Blaze is simple but lacked flexibility (e.g., login callbacks).
                        Therefore, using Meteor Accounts API and documentation, I created my own template to work with callbacks.
                    </li>
                </ul>
            </>,
        links: [{
            label: "WEBAPP",
            href: "https://vango436.herokuapp.com"
        }, {
            label: "GITHUB",
            href: "https://github.com/shirleywbi/VanGo"
        }]
    }
];

const ProjectSection = ({id}) => {
    return <Section heading="Projects" id={id}>
        {projects.map(project => 
            <Project
                key={project.title}
                project={project}
            />
        )}
    </Section>
}

export default ProjectSection;