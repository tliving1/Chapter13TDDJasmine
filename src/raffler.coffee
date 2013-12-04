window.Raffler =
 Models:{}
 Collections:{}
 Views:{}
 Routers:{}

class Raffler.Models.Entry extends Backbone.Model
    defaults:
      name:null
      winner:false

class Raffler.Collections extends Backbone.Collection
  model: Raffler.Models.Entry

class Raffler.View extends Backbone.View