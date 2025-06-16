# state
jo bhi dynamic changes apan ci=omponents aur unke functions me karte ahi vo UI me reflect nhi hote.

to jese apan ne ek counter banaya to jo componenets hai unke andar varables vagera to change aur update ho rahe hai par DOM me change nhi ho raha kuc. Componenet to bas ek function hote hai jo ek baar render ho jaate hai par vo dynamically re render nhi ho sakte kisi updation pe.

props ke case me bhi esa hi hota hai vo bhi immutable hote hai.. unme bhi change aane par component apne aap re render nhi hota.

So here we need to use the concept of "states":-
> The state is the built-in react "object" that  is used to contain data or information about the "component".
> A component's state can change over time; WHenever it changes the component re renders.

# hooks

jab react nayi aayi thi tab usme comp class ki form me likhte the unko class component bolte the aur ab apan jo likhte hai unko function coomponent bolte hai. Class componet me kuch chize thi jo ki function componeht me nhi thi, Unko pura karne ke liye hooks aaye.

> hooks let uyou use state and other react features without writing a class.

1. use state() => 