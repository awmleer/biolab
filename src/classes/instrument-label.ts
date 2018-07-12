export interface InstrumentLabel {
  id: number;
  name: string;
  parentId: number;
}
export interface InstrumentLabelTreeNode extends InstrumentLabel {
  children: InstrumentLabelTreeNode[];
}
