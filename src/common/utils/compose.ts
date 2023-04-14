type ComposeArgs = (...args: any[]) => any;

const compose =
  (...fns: Array<ComposeArgs>) =>
  (param: any) =>
    fns.reduce(
      async (result: Promise<any>, next: ComposeArgs) => next(await result),
      param
    );

export default compose;
