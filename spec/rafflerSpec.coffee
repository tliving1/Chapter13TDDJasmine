describe "Raffler Namespace", ->
	it "should befefined", ->
		expect(Raffler).toBeDefined()

describe "Raffler Model", ->
	it "should exist", ->
		expect(Raffler.Models.Entry).toBeDefined()

	describe "Attributes", ->
		raffle = new Raffler.Models.Entry

		it "should have default attributes", ->
			expect(raffle.attributes.name).toBeDefined()
			expect(raffle.attributes.winner).toBeDefined()

	describe "Raffler Collection", ->
		rafflerList = new Raffler.Collections

		it "should exist", ->
			expect(Raffler.Collections).toBeDefined()

		it "should use the Raffler Model", ->
			expect(rafflerList.model).toEqual Raffler.Models.Entry

	describe "Raffler View", ->
	raffler_data = [
		{	
			name: 'Thurston'
			winner: false
		},
		{
			name: 'Jennifer'
			winner: false
		}]

	invisible_table = document.createElement 'table'

	beforeEach ->
		@raffler_collection = new Raffler.Collections raffler_data
		@raffler_view = new Raffler.View
			collection: @raffler_collection
			el: invisible_table
	it "should be defined", ->
		expect(Raffler.View).toBeDefined()
	it "should have the right element", ->
		expect(@raffler_view.el).toEqual invisible_table
	it "should have the right collection", ->
		expect(@raffler_view.collection).toEqual @raffler_collection
