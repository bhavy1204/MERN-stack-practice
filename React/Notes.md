#### react props
>> props are the info that you pass to a jsx tag

> We will have to wrap the numbers in curly bracket , To use them as a number

> components ek function hote hai jo ki tag dete hai ye thik hai. Par arguments ka kya..? Jese maan le apan ne cards ka ek component banaya aur usme apan ne ek vale dedi tags me to jab bhi us component ko render karaenge tab wahi ka wahi values aayegi to actually dekhe to uska use kya hua..? kuch bhi nhi. Usme koi dynamic info nhi hai to uske liye props kaam aate hai. props actual me bas "information" hote hai.

> Ye same attribute aur parameters jesa hi hai 

> isi tarah apan ne dekha ki kese array vagera bhi props kki help se bhej sakte  hai etc. to ab baaki languaages ki tarah na array ko as it nhi lete balki react array ki har index kki value leta hai aur uskooneby one print karna chalu kar deta hai. To apan fir kya karte hai ki array of values nhi bhej ki "array of elements" bhej dete hai... kind of in li tag..? taki jab react us individual vvalue ko array me se extract kare tab vo ek element hi ho. 

> isi ko karne ka dusraoption ye hoga ki apan array kko to normal rakhe aur print karate time apan map function ka use kare taaki har value ko element me convert kar sake. ye easy aur freqent use hoga. 


---

>react has three pillar:-
1. components
2. props
3. state

# state



# closure 
A closure is a feature in JS where an inner function has access to the outer (enclosing) function's variable. 
IN js once a function completes any variable that were defined inside the function scope xease to exists.


- component re render tab hi karega jab statet ki value me koi change aayega.
- apan useState hook ke argument m ek function bhi paas kar sakte hai par usko as a refrence hi paas karna hota hai call nhi jese maan lo apne function ka naam that "initValue(){};" to apan likhenege "useState(initValue)" isko as refrence hbolte hai par agar apan "useState(initValue())" likheneg to jab bhi re rendering hogi tab ye function bhi call hoga aur resources consume karega.