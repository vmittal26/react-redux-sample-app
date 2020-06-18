/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer((createSerializer({ mode: 'deep' }) as any));

configure({ adapter: new Adapter() });
