var expect = require('chai').expect;

describe('Mocha Spec Sync example', function() {

    it("Submit a test file to heroku", function() {
        var testFile = 'test_file.txt'
        var pathToTestFile = './' + testFile
        console.log(pathToTestFile);
        console.log(testFile);

        //Go to the upload page
        browser.url('/upload');

        //Click the choose file button and select the test file
        browser.waitForVisible('#file-upload', 10000);
        browser.chooseFile('#file-upload', pathToTestFile);

        //Click the upload button to submit the file
        browser.click('#file-submit');
    });
});
