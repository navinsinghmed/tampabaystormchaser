function App() {
    return (
        <div>
            <Tweet 
                name="Navin Singh"
                username="TampaBayStormChaser"
                date={new Date().toDateString()}
                message="Hurricane Season 2023 will be dangerous!"
            />
            <Tweet 
                name="Hurricane Man"
                username="HurricaneMan2023"
                date={new Date().toDateString()}
                message="Troughing in the gulf- stormy pattern"
            />
            <Tweet 
                name="Walrus Keeper"
                username="walrusCareGiver100"
                date={new Date().toDateString()}
                message="Do you like walruses? I am the walrus"
            />
        </div>
    );
}