import { Given, When, Then} from "@wdio/cucumber-framework";

Given(/^user opened the brower$/, async function () {
  await browser.url("https://www.saucedemo.com/v1/");
  await browser.pause(1000);
  await browser.maximizeWindow();
});

When(/^enter the login (.*) and (.*)$/, async function (id, password) {
  console.log(`id---> ${id}`);
  console.log(`password---> ${password}`);

  let ele= await $(`[name="user-name"]`);
    await ele.setValue(id);
     
    let elem=await $(`[name="password"]`);
    await elem.setValue(password);
});

Then(/^After click on login home page should opened$/, async function() {
    let ele =await $(`[type="submit"]`);
     await ele.click();
      await browser.pause(1000);

})