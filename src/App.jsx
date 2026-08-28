/*Import for day 8
import Counter from "./day-8/Counter";
import Toggle from "./day-8/Toggle";
import Greeting from "./day-8/Greeting";*/

// Import for day 9
// import LiveCharacterCounter from "./day-9/LiveCharacterCounter";

// Import for day 10
// import DeveloperRegistrationForm from "./day-10/DeveloperRegistrationForm";

// Import for day 11
// import TodoList from "./day-11/TodoList";
// import SkillManager from "./day-11/SkillManager";

// Import for day 12
// import TodoApp from "./day-12/TodoApp";
// import ProjectFilterApp from "./day-12/ProjectFilterApp";

// Import for day 13
// import UserDirectory from "./day-13/UserDirectory";

// Import for day 14
// import GitHubApp from "./day-14/GitHubApp";

// Import for day 15
// import Panel from "./day-15/Panel";
// import PanelHeader from "./day-15/PanelHeader";
// import PanelFooter from "./day-15/PanelFooter";
// import StatCard from "./day-15/StatCard";

// Import for day 17
// import { Routes, Route } from 'react-router-dom';
// import Layout from './day-17/component/Layout';
// import Contact from './day-17/pages/Contact';
// import Home from './day-17/pages/Home'
// import Projects from './day-17/pages/Projects';
// import Skills from './day-17/pages/Skills'
// import NotFound from './day-17/pages/NotFound'

// Import for day 18
// import { Routes, Route } from 'react-router-dom';
// import Layout from './day-18/component/Layout';
// import Contact from './day-18/pages/Contact';
// import Home from './day-18/pages/Home'
// import Projects from './day-18/pages/Projects';
// import ProjectDetails from './day-18/component/ProjectDetails';
// import Skills from './day-18/pages/Skills'
// import NotFound from './day-18/pages/NotFound'

// Import for day 19
// import { Routes, Route } from 'react-router-dom';
// import Layout from './day-18/component/Layout';
// import Contact from './day-18/pages/Contact';
// import Home from './day-18/pages/Home'
// import Projects from './day-18/pages/Projects';
// import ProjectDetails from './day-18/component/ProjectDetails';
// import Skills from './day-18/pages/Skills'
// import NotFound from './day-18/pages/NotFound'

// import { ThemeProvider } from './day-19/context/ThemeContext'

// Import for day 20
import { Routes, Route } from 'react-router-dom';
import Layout from './day-18/component/Layout';
import Contact from './day-18/pages/Contact';
import Home from './day-18/pages/Home'
import Projects from './day-18/pages/Projects';
import ProjectDetails from './day-18/component/ProjectDetails';
import Skills from './day-18/pages/Skills'
import NotFound from './day-18/pages/NotFound'

import { ThemeProvider } from './day-19/context/ThemeContext'

function App() {
    return (
        <>
            {/* day 8 practice component */}
            {/* <Counter />
            <br />
            <Toggle />
            <br />
            <Greeting /> */}

            {/* day 9 practice component */}
            {/* <LiveCharacterCounter /> */}

            {/* day 10 practice component */}
            {/* <DeveloperRegistrationForm /> */}

            {/* day 11 practice component */}
            {/* <TodoList /> */}
            {/* <SkillManager /> */}

            {/* day 12 practice component */}
            {/* <TodoApp /> */}
            {/* <ProjectFilterApp /> */}

            {/* day 13 practice component */}
            {/* <UserDirectory /> */}

            {/* day 14 practice component */}
            {/* <GitHubApp /> */}

            {/* day 15 practice component */}
            {/* <Panel>
                <PanelHeader>Profile Info</PanelHeader>
                <p>Name: Muhammad Apu Hossain</p>
                <p>Role: Backend Developer</p>
            </Panel>

            <Panel>
                <PanelHeader>Confirm Action</PanelHeader>
                <p>Are you sure you want to proceed?</p>
                <PanelFooter>
                    <button>Cancel</button>
                    <button>Confirm</button>
                </PanelFooter>
            </Panel>

            <Panel>
                <p>This is a simple notice panel with no header.</p>
            </Panel>

            <StatCard label="Total Projects" value={5}>
                <p>2 featured</p>
            </StatCard> */}

            {/* day 17 practice component */}
            {/* <Routes>
                <Route path='/' element={<Layout />}> 
                    <Route index element={<Home/>} />
                    <Route path='projects' element={<Projects/>} />
                    <Route path='skills' element={<Skills/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes> */}

            {/* day 18 practice component */}
            {/* <Routes>
                <Route path='/' element={<Layout />}> 
                    <Route index element={<Home/>} />
                    <Route path='projects' element={<Projects/>} />
                    <Route path='projects/:id' element={<ProjectDetails/>} />
                    <Route path='skills' element={<Skills/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>    */}

            {/* day 19 practice component */}
            {/* <ThemeProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='projects/:id' element={<ProjectDetails />} />
                        <Route path='skills' element={<Skills />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </ThemeProvider> */}

            {/* day 20 practice component */}
            <ThemeProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='projects/:id' element={<ProjectDetails />} />
                        <Route path='skills' element={<Skills />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </ThemeProvider>

        </>
    )
}

export default App;