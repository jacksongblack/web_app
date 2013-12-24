describe("拉动刷新测试", function () {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '../';
        loadFixtures('news_list.html')
        localStorage.setItem("url", "http://0.0.0.0:3000/")

    })
    afterEach(function () {
        localStorage.clear();
    })
    it("获取页面远程链接地址", function () {
        var pullObj = new PullLoad();
        expect(pullObj.self.getPath("#pullAjaxUrl")).toBe("api/domains/1?posts_page=2")
    })
    it("当前数字为默认的“2”时，修改当前的页面参数为2", function () {
        var pullObj = new PullLoad();
        spyOn(pullObj, 'send');
        spyOn(pullObj, "getResponse").andReturn(new Array("red"))
        pullObj.self.send();
        expect($("#pullAjaxUrl").attr("data-page")).toBe("2")
    })
    it("当前的页面为1时，修改当前页面参数为2", function () {
        var pullObj = new PullLoad();
        spyOn(pullObj, 'send');
        spyOn(pullObj, "getResponse").andReturn(new Array("red"));
        pullObj.num = 1;
        pullObj.self.send();
        expect($("#pullAjaxUrl").attr("data-page")).toBe("2")

    })

})