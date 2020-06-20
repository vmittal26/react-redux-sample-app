/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import fetchMock from 'jest-fetch-mock';

expect.addSnapshotSerializer((createSerializer({ mode: 'deep' }) as any));
fetchMock.enableMocks();
configure({ adapter: new Adapter() });
