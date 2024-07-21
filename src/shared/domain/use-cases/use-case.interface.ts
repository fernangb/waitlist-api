export interface UseCaseInterface<Input, Output> {
  execute(props: Input): Promise<Output>;
}
