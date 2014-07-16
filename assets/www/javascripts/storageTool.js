
function StorageTool(){
    _thisStorageToolObj_ = this;
};
StorageTool.prototype={
    jsonToString: function(jsonObj){
    return JSON.stringify(jsonObj);
},
stringToJson:function(string){
    return eval('(  ' + string + ')');
},
sessionClear : function(key){
    localStorage.removeItem(key)
}
};
