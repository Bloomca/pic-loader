import test from 'ava';
import { preload } from '../src';

test('should return a resolved promise in node', t => {
  const promise = preload('some_link');
  t.true('function' === typeof promise.then);
})
