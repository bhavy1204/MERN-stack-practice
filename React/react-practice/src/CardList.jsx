import Card from "./card";

let link1 = "/creation_1.png";
let link2 = "/vite.svg";

// let options = [<li>"heha" </li>, <li> "meow"</li>, <li> "sher"</li>, <li>"kutta"</li>];
let options = [<li>"heha" </li>, <li> "meow"</li>, <li> "sher"</li>, <li>"kutta"</li>];
const list = options.map((el) => <li>{el}</li>); //we can also wrrite this whole logic at place of rendering insted of creating new variable
function CardList() {
    return (
        <div className="cardList">
            <Card link={link1} title="title 1" desc="this is desc 1 " options={list} />
            <Card link={link1} desc="this is desc 2 " options={["raju", "kaju", "bhaju"]} />
            <Card link={link2} title="title 2" desc="this is desc 3 " objOption={{ a: "ram", b: "hari", c: "vishnu" }} />
        </div>
    )
}

export default CardList;