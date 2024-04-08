import { htmlLineBreaks } from '../src';

test('no line breaks', () => {
    expect(htmlLineBreaks('hello')).toBe('hello');
});

test('one line', () => {
    expect(htmlLineBreaks('hello\n')).toBe('hello<br>');
    expect(htmlLineBreaks('hello\r\n')).toBe('hello<br>');
});

test('two lines', () => {
    expect(htmlLineBreaks('hello\nworld')).toBe('hello<br>world');
    expect(htmlLineBreaks('hello\r\nworld')).toBe('hello<br>world');
});

test('three lines', () => {
    expect(htmlLineBreaks('hello\nworld\ntest')).toBe('hello<br>world<br>test');
    expect(htmlLineBreaks('hello\r\nworld\r\ntest')).toBe('hello<br>world<br>test');
});

test('one paragraph', () => {
    expect(htmlLineBreaks('hello\n\nworld')).toBe('<p>hello</p><p>world</p>');
    expect(htmlLineBreaks('hello\r\n\r\nworld')).toBe('<p>hello</p><p>world</p>');
});

test('two paragraphs', () => {
    expect(htmlLineBreaks('hello\n\n\n\nworld')).toBe('<p>hello</p><p></p><p>world</p>');
    expect(htmlLineBreaks('hello\r\n\r\n\r\n\r\nworld')).toBe('<p>hello</p><p></p><p>world</p>');
});