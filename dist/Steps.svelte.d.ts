export default Steps;
type Steps = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Props>): void;
};
/**
 * ## svelte-steps
 *
 * ## props
 *
 * - `steps`:
 *   - Array of object. Length has to be more than 1
 *   - Required
 *   - Each item is a step object that can have:
 *     - `text`: The text displayed below each steps.
 *     - `icon`: A svelte component displayed inside each steps.
 *     - `iconProps`: An object that will be passed as props to the `icon` component.
 *     - `checkIcon` or `checkicon`: A custom check icon for this specific step when completed. Overrides the global `checkIcon` prop.
 * - `current`: current step index. Number. Default `0`
 * - `size`: size of the step buttons. String. Default `"3rem"`
 * - `line`: thickness of the connecting lines between the step buttons. String. Default `"0.3rem"`
 * - `primary`: Primary color of passed and current steps. String. Default `'var(--bs-primary, #3a86ff)'`
 * - `secondary`: Secondary color of future steps. String. Default `'var(--bs-secondary, #bbbbc0)'`
 * - `light`: Primary color of text color in passed anc current steps. String. Default `'var(--bs-light, white)'`
 * - `dark`: Secondary color of text color in future steps. String. Default `'var(--bs-dark, black)'`
 * - `borderRadius`: Border radius of the step buttons. String. Default `'50%'` (circle)
 * - `fontFamily`: Font family of the component. String. Default `"'Helvetica Neue', Helvetica, Arial, sans-serif"`
 * - `vertical`: Vertical steps
 * - `reverse`: For horizontal steps, reverse the step from right to the left; for vertical steps, reverse puts text labels to the left. Default `false`
 * - `clickable`: When set to `false`, Clicking icons and labels will not change step. You have to change `current` to change step. Default `true`
 * - `checkIcon`: User defined check icon for passed steps. If not specified, use the default check mark. Set to `null` if you don't want a check icon.
 * - `alertIcon`: User defined alert icon for passed steps that has truthful `alert` property. If not specified, use the default alert icon. Set to `null` if you don't want an alert icon.
 * - `alertColor`: User defined bg color for passed steps that has truthful `alert` property. Default 'var(--bs-danger, #dc3545)'
 *
 * ## events
 *
 * - `onclick`: callback function called when a step is clicked. Receives an object with two keys:
 *   - `current`: the index of current step
 *   - `last`: the index of last step
 */
declare const Steps: import("svelte").Component<{
    steps: any;
    current?: number;
    vertical?: boolean;
    size?: any;
    line?: any;
    lineHeight?: any;
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
    htmlMode?: boolean;
    duration?: number;
    easing?: Function;
    aot?: number;
    onclick?: Function;
}, {}, "line" | "current" | "last">;
type Props = {
    steps: any;
    current?: number;
    vertical?: boolean;
    size?: any;
    line?: any;
    lineHeight?: any;
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
    htmlMode?: boolean;
    duration?: number;
    easing?: Function;
    aot?: number;
    onclick?: Function;
};
