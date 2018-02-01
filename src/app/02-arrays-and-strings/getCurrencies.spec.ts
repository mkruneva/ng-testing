import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
    it('should return supported currencies USD, AUD, EUR', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
