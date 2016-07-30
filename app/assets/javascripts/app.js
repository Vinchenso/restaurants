//
var Constants = {
    CHANGE_EVENT: 'change',
    ADD_COMMENT: 'comment.add'
}

var Store = new _.extend({},EventEmitter.prototype,{
  _.comments: [],

  addComment: function(comment){
    this._comment[comment.id] = comment;
  },

  comments: function(){
   return this._comments;
  },

  addChangeListener: function(callback){
   this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
   this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  emitChange: function(){
   this.emit(Constants.CHANGE_EVENT);
  }
});

var AppDispatcher = new FluxDispatcher();

AppDispatcher.register(function(payload)){
    var action = payload.actionType;
    switch(action){
        case Constants.ADD_COMMENT:
            Store.addComment(payload.comment);
        break;
        default:
            //
    }
}
