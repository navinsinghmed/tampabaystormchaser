function App() {
    return (
        <div>
            <Person
                name="Homer"
                age={38}
                hobbies={["bowling", "watching tv", "drinking beer"]}
            />
            <Person 
                name="Navin"
                age={35}
                hobbies={["weather watching", "storm chasing", "gym"]}
            />
            <Person
                name="Dalia Lama"
                age={70}
                hobbies={["meditating", "yoga", "reading"]}
            />
        </div>
    );
}