export interface ReagentLabel {
  id: number;
  name: string;
  parentId: number;
}
export interface ReagentLabelTreeNode extends ReagentLabel {
  children: ReagentLabelTreeNode[];
}
