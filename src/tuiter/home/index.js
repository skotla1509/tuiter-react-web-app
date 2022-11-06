import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}

export default HomeComponent;