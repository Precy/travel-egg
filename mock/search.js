export default {
  'GET /api/getLists': {
		lists: ['a', 'b', 'c']
	},
	'GET /api/getListsAsync': (req, res) => {
		setTimeout(() => {
			res.json({
				status: 200,
				data: Array(10).fill(req.query.value)
			})
			// res.json({
			// 	status: 404,
			// 	errMsg: 'net error!'
			// })
		}, 1000)
		
	}
}