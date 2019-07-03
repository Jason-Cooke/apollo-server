import { Kind, VariableNode } from 'graphql';

export function isObject(value: any): value is object {
  return (
    value !== undefined &&
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value)
  );
}

export function isVariableNode(node: any): node is VariableNode {
  return node.kind === Kind.VARIABLE;
}
