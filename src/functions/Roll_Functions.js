const noTableItem = {
    name: '[Table does not exist!]',
    value: 0
}

export function ShowRoll({ die, setRoll }) {
	return (
		<>
			<button
				onClick={() => {
                    setRoll(getRandomInt(1, die));
				}}
			>
				Roll a d{die}
			</button>
		</>
	);
}

export function ShowRollTable({tableName, setResult}){
    return (
		<>
			<button
				onClick={() => {
                    setResult(RollTable(tableName));
				}}
			>
				Roll for {tableName}
			</button>
		</>
	);
}

export const RollTable = (tableName, die=0, returnObject=false, fudge=0) => {
    try{ require('../data/' + tableName + '.json'); }
    catch(err){
        return returnObject ? noTableItem : noTableItem.name
    }
    const table = require('../data/' + tableName + '.json')
    if(die <= 0){
        die = table.length
    }
    let r = (fudge === 0 ? roll(die) : fudge)
    if(r > table.length){
        r = table.length
    }
    const result = table.find(item => item.value === r)
    if(returnObject){
        return result
    } return result.name
}

export const roll = (die) => {
    return getRandomInt(1, die)
}

const getRandomInt = (min, max) => {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
