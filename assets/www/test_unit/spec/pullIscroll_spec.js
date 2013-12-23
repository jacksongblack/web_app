
describe("拉动刷新测试",function(){

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '../';
        loadFixtures('news_list.html')
        localStorage.setItem("url","http://0.0.0.0:3000/")
    })
    it("获取页面远程链接地址",function(){
        var pullObj = new PullLoad();
        expect(pullObj.self.getPath("#pullAjaxUrl")).toBe("api/domains/1?posts_page=2")
    })

})