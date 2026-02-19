export interface ResolverComponent {
  name: string;
  from: string;
  type: string;
  importName: string;
  originalName: string;
}

export default function customResolver(): ResolverComponent[];
