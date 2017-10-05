

//Zacchaeus stood and said to the Lord, "Behold, Lord, half of my goods I give to the poor. 
//If I have wrongfully exacted anything of anyone, I restore four times as much."(Luke 19:8)


export let random = (min, max) => {
	let r = Math.random();
	return Math.floor(r * (max - min) + min);
};

export let clone = (obj) => {
	let newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}
