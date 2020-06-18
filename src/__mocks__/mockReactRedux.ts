
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mockReactRedux = ()=>{
  const reactRedux = jest.requireActual('react-redux');
  return {
    ...reactRedux,
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  };
};
