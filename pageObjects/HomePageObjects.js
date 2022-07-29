class HomePageObjects {

    constructor(page) {
        //Create header locator
        this.header = page.locator('div[class="row mb-3"] h1 center');

        //Create text input field locator
        this.inputField = page.locator('#input');

        //Create calculate button field locator
        this.calculateButton = page.locator('#run');

        //Create campaign field locator
        this.campaignField = page.locator('//img[@id="id1"]');

        //Create output label locator
        this.output = page.locator('#output');
    }
}

module.exports = {HomePageObjects};