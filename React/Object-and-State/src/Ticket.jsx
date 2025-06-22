import TicketNum from "./TicketNum"
import "./Ticket.css"

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <p>ticket</p>
            {ticket.map((n, idx) => (
                <TicketNum num={n} key={idx} />
            ))}
        </div>
    );
}