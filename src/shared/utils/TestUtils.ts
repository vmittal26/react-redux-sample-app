/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShallowWrapper } from 'enzyme';

type ShallowWrapperType = ShallowWrapper<
  any,
  Readonly<any>,
  React.Component<any, any, any>
>;

export const getElementByAttr = (wrapper :ShallowWrapperType, attr:string):ShallowWrapperType=>{
  return wrapper.find(attr);
};
