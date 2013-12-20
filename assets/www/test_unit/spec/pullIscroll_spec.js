describe("拉动刷新测试",function(){

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '../../';
        localStorage.setItem("url","http://0.0.0.0:3000/")
    })
    it("获取页面远程链接地址",function(){

        loadFixtures('news_list.html')
        expect(pullObj.self.getPath()).toBe("http://0.0.0.0:3000")
    })

})