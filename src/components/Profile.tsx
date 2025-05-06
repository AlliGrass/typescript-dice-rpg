import { usePlayerStore } from "../stores/usePlayerStore"

interface ProfileProp {
    visibility: () => void
}

const Profile = ({visibility}: ProfileProp) => {
    const { level, exp, healthMax, strength } = usePlayerStore()

    return(
        <>
            <h1>Level {level}</h1>
            <span>EXP: {exp}</span>
            <div>
                <div style={{
                    'display': 'flex',
                    'justifyContent': 'space-evenly',
                }}>
                    <h2>Health - {healthMax}</h2>
                    {/* <button style={{'display': levelUpVisibility? "block" : "none",}} onClick={()=> {levelUpSkill("health")}}>Up</button> */}

                </div>
                <div style={{
                    'display': 'flex',
                    'justifyContent': 'space-evenly',
                }}>
                    <h2>Strength - {strength}</h2>
                    {/* <button style={{'display': levelUpVisibility? "block" : "none",}} onClick={()=> {levelUpSkill("strength")}}>Up</button> */}

                </div>

            </div>
            <div>
                <button onClick={visibility}>Close</button>
                {/* <button onClick={activateLevelUp}>Level Up</button> */}
            </div>
        </>
    )
}

export default Profile