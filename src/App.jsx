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
import Panel from "./day-15/Panel";
import PanelHeader from "./day-15/PanelHeader";
import PanelFooter from "./day-15/PanelFooter";
import StatCard from "./day-15/StatCard";



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
            <Panel>
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
            </StatCard>

        </>
    )
}

export default App;