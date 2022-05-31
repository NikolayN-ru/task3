type typeEl = Array<number | null>

interface coursesInterface {
	name: string;
	prices: typeEl
}

let courses:coursesInterface[] = [
	{ name: "Courses in England", prices: [0, 100] }, 
	{ name: "Courses in Germany", prices: [500, null] }, 
	{ name: "Courses in Italy", prices: [100, 200] }, 
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200]; // england, Italy, usa, france
let requiredRange2 = [100, 350]; // england, italy, china, usa, kazahstan, france
let requiredRange3 = [200, null]; // usa, france

const filter = (el:typeEl):string[] => {
	let arr:string[] = [];
	courses.forEach((course:coursesInterface) => {
		if((el[0] >= course.prices[0] || el[0] == course.prices[0] || el[0] == 0 || el[1] >= course.prices[0]) && (el[1] >= course.prices[1])){
			arr.push(course.name)
		}
	})
	return arr
}

console.log(filter(requiredRange1), '111')
console.log(filter(requiredRange2), '222')
console.log(filter(requiredRange3), '333')
