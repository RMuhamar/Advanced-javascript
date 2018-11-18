const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator,array) => {
	console.log('array',array);
	console.log('acc', accumulator);
	return accumulator.concat(array);
},[])