function flashToJson(session) {
    return stirngToJson(session);
}

function StorageTool(){
    jsonToString = function(jsonObj){
        return JSON.stringify(jsonObj);
    };
    stringToJson = function(string){
        return eval('(' + string + ')');
    };
    sessionClear = function(key){
        localStorage.removeItem(key)
    };
};
StorageTool.prototype={
    objectToHtml:function(obj){
        return buildHtml(obj)
    },
    storageToHtml:function(sessionKeyName){
       var str = localStorage.getItem(sessionKeyName)
       var obj = this.objectToHtml(stringToJson(str))
       return obj
    }
};