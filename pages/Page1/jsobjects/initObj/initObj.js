export default {	
	async getShiba () {
		await getShibaApi.run()
		showAlert('init')
		console.log(getShibaApi)
	}
}