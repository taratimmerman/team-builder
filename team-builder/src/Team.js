export default function TeamList(props) {
    return(
        <ul>
            <li>Rick, Team lead, rick@heistcon.com</li>
            <li>Truckula, Transportation, truckula@heistcon.com</li>
            <li>Glar, Muscle, glar@heistcon.com</li>
            <li>Angie Flint, Codebreaker, angie@heistcon.com</li>
            {props.TeamList.map(team => {
                return <li>{team.name}, {team.role}, {team.email}</li>
            })}
        </ul>
    )
}