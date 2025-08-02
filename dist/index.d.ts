declare module 'svelte-steps' {
    import type { SvelteComponent } from 'svelte';

    interface StepObject {
        text?: string;
        icon?: any;
        iconProps?: any;
        alert?: boolean;
    }

    interface StepClickData {
        current: number;
        last: number;
    }

    interface StepsProps {
        steps: StepObject[];
        current?: number;
        vertical?: boolean;
        size?: string;
        line?: string;
        primary?: string;
        secondary?: string;
        light?: string;
        dark?: string;
        borderRadius?: string;
        fontFamily?: string;
        reverse?: boolean;
        clickable?: boolean;
        checkIcon?: any;
        alertIcon?: any;
        alertColor?: string;
        onclick?: (data: StepClickData) => void;
    }

    export class Steps extends SvelteComponent<StepsProps> { }
}
