describe('Test Suite Which Contains Skipped & Timeout', () => {

    const delay = ms => new Promise(res => setTimeout(res, ms));

    xit('Test Will Skipped', () => {
        expect(true).toEqual(true);
    });

    test('Test Will Timeout', async () => {
        await delay(6000);
        expect(true).toEqual(true);
    });
});