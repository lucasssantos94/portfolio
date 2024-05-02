export interface ProjectProps {
    map(arg0: (project: ProjectProps) => import("react").JSX.Element): import("react").ReactNode;
    filter(arg0: (project: any) => any): unknown;
    id: number;
    name: string;
    owner: {
        login: string;
    };
    html_url: string;
    description: string;
    homepage: string;
    default_branch: string;
}