import React from "react";

export default function TeamList(props) {
    return(
        <div>
            <ul>
                <li>Rick, rick@heistcon.com, Team lead</li>
                <li>Truckula, truckula@heistcon.com, Transportation</li>
                <li>Glar, glar@heistcon.com, Muscle</li>
                <li>Angie Flint, angie@heistcon.com, Codebreaker</li>
                {props.TeamList.map(team => {
                    return <li>{team.name}, {team.email}, {team.role}</li>
                })}
            </ul>
        </div>
    )
}