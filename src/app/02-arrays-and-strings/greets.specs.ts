import { greet } from './greet';

describe('Greet', () => {
    it('should containg name in the message', () => {
        expect(greet('name')).toContain('name');
    });
});

