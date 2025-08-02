export default Alert;
type Alert = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Alert: import("svelte").Component<{
    stroke?: string;
}, {}, "">;
type Props = {
    stroke?: string;
};
