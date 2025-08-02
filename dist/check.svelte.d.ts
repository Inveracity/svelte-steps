export default Check;
type Check = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
declare const Check: import("svelte").Component<{
    stroke?: string;
}, {}, "">;
type Props = {
    stroke?: string;
};
