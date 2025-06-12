import Card from "./card";

let link1="/creation_1.png";
let link2= "/vite.svg";

let options = ["heha" , "meow" , "sher" , "kutta"];
//We will have to wrap the numbers in curly bracket , To use them as a number 
function CardList() {
    return (
        <div className="cardList">
            <Card link={link1} title="title 1" desc="this is desc 1 " options={options}/> 
            <Card link={link1} desc="this is desc 2 " options={["raju","kaju","bhaju"]}/>
            <Card link={link2} title="title 2" desc="this is desc 3 " objOption={{a:"ram",b:"hari",c:"vishnu"}}/>
        </div>
    )
}

export default CardList;