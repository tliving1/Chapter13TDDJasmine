// Generated by CoffeeScript 1.6.3
(function() {
  describe("Raffler Namespace", function() {
    return it("should befefined", function() {
      return expect(Raffler).toBeDefined();
    });
  });

  describe("Raffler Model", function() {
    var invisible_table, raffler_data;
    it("should exist", function() {
      return expect(Raffler.Models.Entry).toBeDefined();
    });
    describe("Attributes", function() {
      var raffle;
      raffle = new Raffler.Models.Entry;
      return it("should have default attributes", function() {
        expect(raffle.attributes.name).toBeDefined();
        return expect(raffle.attributes.winner).toBeDefined();
      });
    });
    describe("Raffler Collection", function() {
      var rafflerList;
      rafflerList = new Raffler.Collections;
      it("should exist", function() {
        return expect(Raffler.Collections).toBeDefined();
      });
      return it("should use the Raffler Model", function() {
        return expect(rafflerList.model).toEqual(Raffler.Models.Entry);
      });
    });
    describe("Raffler View", function() {});
    raffler_data = [
      {
        name: 'Thurston',
        winner: false
      }, {
        name: 'Jennifer',
        winner: false
      }
    ];
    invisible_table = document.createElement('table');
    beforeEach(function() {
      this.raffler_collection = new Raffler.Collections(raffler_data);
      return this.raffler_view = new Raffler.View({
        collection: this.raffler_collection,
        el: invisible_table
      });
    });
    it("should be defined", function() {
      return expect(Raffler.View).toBeDefined();
    });
    it("should have the right element", function() {
      return expect(this.raffler_view.el).toEqual(invisible_table);
    });
    return it("should have the right collection", function() {
      return expect(this.raffler_view.collection).toEqual(this.raffler_collection);
    });
  });

}).call(this);
