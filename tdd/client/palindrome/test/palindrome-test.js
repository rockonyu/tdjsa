describe("palindrome - 測試", function() {
    it('通過金絲雀測試', function() {
        expect(true).to.be.true;
    });

    it('傳入參數 mon 回傳 true', function() {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('傳入參數 dad 回傳 true', function() {
        expect(isPalindrome('dad')).to.be.true;
    });

    it('傳入參數 dude 回傳 false', function() {
        expect(isPalindrome('dude')).to.be.false;
    });

    it('傳入空字串回傳 false', function() {
        expect(isPalindrome('')).to.be.false;
    });

    it('傳入兩個空白字元回傳 false', function() {
        expect(isPalindrome('  ')).to.be.false;
    });

    it('沒有傳入任何參數應該拋出錯誤', function() {
        expect(isPalindrome).to.throw(Error, 'Invalid argument');
    });
});
