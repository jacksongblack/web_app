describe("拉动刷新测试",function(){
    beforeEach(function(){
        var testData={

        };
        $("#pullAjaxUrl")
         pullObj = new PullLoad();
        spyOn(pullObj,'send')
        spyOn(pullObj,'getResponse').andReturn(testData)
    })
    it("向下拉动时,如果取得数据,则渲染页面",function(){
        expect(pullObj)
    })
})