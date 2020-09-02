import React from 'react';
import Section from './primitives/Section';
import ProjectCard from './primitives/ProjectCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ProjectSection.css';

const projects = [
    {
        title: "Stock Market Scripts",
        image: require("../assets/images/thumbnails/Stock Market Scripts-thumbnail.svg"),
        techStack: ["Python"],
        description: 
            <div>
                A collection of Python scripts to calculate market indicators, screen stocks and determine stop loss price using yfinance.
            </div>,
        links: [{
            label: "GITHUB",
            href: "https://github.com/shirleywbi/StockScreener"
        }]
    },
    {
        title: "Hnefatafl",
        image: require("../assets/images/thumbnails/Hnefatafl-thumbnail.svg"),
        techStack: ["Kotlin", "Android Studio"],
        description: 
            <>
                <div>
                    Hnefatafl is a Nordic and Celtic strategy board, also known as "Viking Chess".
                    For this project, I created the prototype, designed the assets, and implemented the game logic.
                </div>
            </>,
        links: [{
            label: "GITHUB",
            href: "https://github.com/shirleywbi/Hnefatafl"
        }]
    },
    {
        title: "Amplify",
        image: require("../assets/images/thumbnails/Amplify-thumbnail.svg"),
        techStack: ["React Native", "Expo", "Node.js"],
        description: 
            <div>
                Amplify is a public speaking coach that helps users make more impactful conversations. 
                Built using the Google Cloud Speech-to-Text API, it finds filler words, calculates speech duration, and suggests more concise wording."
            </div>,
        links: [{
            label: "DEVPOST",
            href: "https://devpost.com/software/amplify-b7gar8"
        },
        {
            label: "GITHUB",
            href: "https://github.com/NobleTan/cmd-f-2020"
        }]
    },
    {
        title: "SAP University of HANA and Analytics",
        image: require("../assets/images/thumbnails/UHA-thumbnail.svg"),
        techStack: ["React", "Redux", "Node.js", "MongoDB"],
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
        links: []
    },
    {
        title: "VanGo: Itinerary Planner",
        thumbnail: require("../assets/images/thumbnails/VanGo-thumbnail.svg"),
        image: require("../assets/images/vango-main-thin.PNG"),
        techStack: ["React.js", "Redux", "Meteor", "MongoDB", "Heroku"],
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
    },
    {
        title: "Message Board",
        thumbnail: require("../assets/images/thumbnails/Message Board-thumbnail.svg"),
        image: require("../assets/images/postings-main.png"),
        techStack: ["MongoDB", "Express", "React", "Redux", "Node.js", "Heroku"],
        description: 
            <>
                <div>
                    Message Board is a basic message board with add, delete, and filter functionality, storing persistent data on MongoDB.
                </div>
                <br/>
                <em>What I learnt:</em>
                <ul>
                    <li>Front-end design using HTML/CSS/JavaScript/React</li>
                    <li>State management using Redux</li>
                    <li>SQL vs. noSQL and how to store data on a cloud database service</li>
                    <li>Heroku delpoyment</li>
                </ul>
            </>,
        links: [{
            label: "WEBAPP",
            href: "https://sbi-postings.herokuapp.com"
        }, {
            label: "GITHUB",
            href: "https://github.com/shirleywbi/Message-Board"
        }]
    },
    {
        title: "Wine Warehouse",
        thumbnail: require("../assets/images/thumbnails/Wine Warehouse-thumbnail.svg"),
        image: require("../assets/images/wine-warehouse-inventorymanager.png"),
        techStack: ["SQL", "PHP"],
        description: 
            <>
                <div>
                    Designed logical and physical data models of a wine warehouse and created an Inventory Management System 
                    to view, add, update, delete, and query a wine inventory with multiple user views using PHP and SQL
                </div>
                <br/>
                <em>Challenges:</em>
                <ul>
                    <li>
                        Normalizing the data to 3NF separated some of the related information that I wanted to be together for the user interface.
                        Many of the tables had to be joined and multiple SQL queries had to be made to provide better usuability in terms of viewing, updating, adding, deleting, and querying the data.
                    </li>
                </ul>
            </>,
        links: [{
            label: "GITHUB",
            href: "https://github.com/shirleywbi/WineWarehouse"
        }]
    },
    {
        title: "Budget App",
        thumbnail: require("../assets/images/thumbnails/Budget App-thumbnail.svg"),
        image: require("../assets/images/budget-app-main.png"),
        techStack: ["Java", "JUnit"],
        description: 
            <>
                <div>
                    Budget App produces dynamic reports on user income and expenses using the observer pattern.
                    The GUI was created using GridBagLayout in Java Swing and BarChart in JavaFX.
                </div>
                <br/>
                <em>What I learnt:</em>
                <ul>
                    <li>
                        Due to a lot of initial coupling and lack of cohesion, I was able to learn about the importance of writing maintainable code.
                    </li>
                    <li>
                        Learning to draw UML Diagrams helped me to visualize the overall structure of the app.
                    </li>
                    <li>
                        Although combining JavaFX and Java Swing is doable, it can be very error-prone.
                    </li>
                </ul>
            </>,
        links: [{
            label: "GITHUB",
            href: "https://github.com/shirleywbi/BudgetApp"
        }]
    },
    // {
    //     title: "Insight UBC",
    //     image: require("../assets/images/insight-ubc-thin.png"),
    //     techStack: ["TypeScript", "JavaScript", "HTML", "Mocha/Chai", "Node.js"],
    //     description: 
    //         <>
    //             <div>
    //                 Insight UBC is a NodeJS web app created to query UBC building and course metadata 
    //                 by using asynchronous programming, parsing HTML files and JSON objects, using a RESTful design, and testing with Mocha/Chai.
    //             </div>
    //             <br/>
    //             <em>What I learnt:</em>
    //             <ul>
    //                 <li>
    //                     Although less efficient, my teammate and I took it as a learning opportunity to switch our roles part way through this project (data handling vs. data querying) 
    //                     which allowed us to get feedback on our own code and have a better understanding of how to write clean and readable code.
    //                 </li>
    //             </ul>
    //         </>,
    //     links: [{
    //         label: "README",
    //         href: "https://github.com/ubccpsc/310/blob/2018sept/project/README.md"
    //     }]
    // },
    {
        title: "Etch A Sketch",
        thumbnail: require("../assets/images/thumbnails/Etch-a-Sketch-thumbnail.svg"),
        image: require("../assets/images/etch-a-sketch.png"),
        techStack: ["HTML5 Canvas", "CSS", "JavaScript"],
        description: 
            <>
                <div>
                    Etch A Sketch is a classic game where you manipulate two "knobs" to move a line.
                    In this version, it operates by collecting an array of (x, y) positions for every key press to form an image.
                </div>
            </>,
        links: [{
            label: "GAME",
            href: "https://shirleywbi.github.io/etch-a-sketch"
        }]
    },
    {
        title: <>
            <FontAwesomeIcon className={"hack-win"} icon={["fa", "crown"]}/>
            Banking on Food
        </>,
        thumbnail: require("../assets/images/thumbnails/Banking on Food-thumbnail.svg"),
        image: require("../assets/images/thumbnails/Banking on Food-thumbnail.svg"),
        techStack: ["React Native", "Expo"],
        description: 
            <>
                <div>
                    Food banks often receive many goods during the holidays but less so during the rest of the year. 
                    Banking on Food solves this issue by gamifying food bank donations to promote donations year-round.
                    Using React Native, I implemented an achievements page, and an inventory page that shows what items are urgently needed.
                </div>
                <br/>
                <div>
                    Banking on Food received 3rd place at the UBC Local Hack Day: Build Day.
                </div>
            </>,
        links: [{
            label: "DEVPOST",
            href: "https://devpost.com/software/foodbank-e7vs6n"
        }, {
            label: "GITHUB",
            href: "https://github.com/shirleywbi/foodbank"
        }]
    },
    {
        title: <>
            <FontAwesomeIcon className={"hack-win"} icon={["fa", "crown"]}/>
            Degree Navigator 2.0
        </>,
        thumbnail: require("../assets/images/thumbnails/Degree Navigator 2.0-thumbnail.svg"),
        image: require("../assets/images/cmdf-degree-nav-cropped.png"),
        techStack: ["React", "TypeScript"],
        description: 
            <>
                <div>
                    Due to the difficulty of reading and understanding the current UBC degree navigator, 
                    our team decided to revamp the design with Degree Navigator 2.0.
                    Degree Navigator 2.0 parses student academic credits to display a user's academic progress towards graduation 
                    in a modern, legible, and clean interface using React.
                    The logic for counting the credits was written in TypeScript. 
                </div>
                <br/>
                <div>
                    Degree Navigator 2.0 received 2nd place at the cmd-f hackathon.
                </div>
            </>,
        links: [{
            label: "DEVPOST",
            href: "https://devpost.com/software/degree-navigator-2-0"
        }]
    },
    {
        title: "Art of Compression",
        thumbnail: require("../assets/images/thumbnails/Art of Compression-thumbnail.svg"),
        image: require("../assets/images/artofcompression.jpg"),
        techStack: ["C++"],
        description: 
            <>
                <div>
                    Art of Compression generates blocky images using an unusual algorithm for lossy image compression with Quad Trees.
                </div>
            </>,
        links: []
    },
    // {
    //     title: "Funcouver (Prototype)",
    //     image: require("../assets/images/funcouver-prototype.PNG"),
    //     techStack: ["React", "Redux", "Meteor", "MongoDB", "Heroku"],
    //     description: 
    //         <>
    //             <div>
    //                 Funcouver is a prototype for an event explorer created using Figma during the UBC BCS Hackathon.
    //                 After learning about Figma, an interface design tool, at a cmd-f workshop, our team decided to create a prototype of an event explorer.
    //                 The goal was to create a display such that a user would be able to visualize how popular an event was based on the size of its icon.
    //             </div>
    //         </>,
    //     links: [{
    //         label: "PROTOTYPE",
    //         href: "https://www.figma.com/proto/EhNsd5QRNGQXKlxFaNBTzi7T/BCS-Hackathon-Funcouver-Prototype?node-id=10%3A89&scaling=min-zoom"
    //     }]
    // }
];

const ProjectSection = ({id}) => {
    return <Section heading="Projects" id={id}>
        <Container fluid="md">
            <Row className="justify-content-md-center">
                {projects.map(project => 
                    <Col 
                        xs={12} sm={12} md={6} lg={4} xl={4}
                        key={JSON.stringify(project.title)} 
                    >
                        <ProjectCard
                            project={project}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    </Section>
}

export default ProjectSection;