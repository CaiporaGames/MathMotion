export type BalanceSideId =
    "left" |
    "right";

export type BalanceSideState = {
    boxCount: number;

    /**
     * Peso conhecido existente no prato.
     *
     * Exemplo:
     * 2 caixas + 2 kg
     *
     * knownWeight = 2
     */
    knownWeight: number;
};

export type BalanceStatus =
    | "balanced"
    | "left-heavy"
    | "right-heavy";

export type BalanceScenario = {
    left: BalanceSideState;

    right: BalanceSideState;

    /**
     * Peso real da caixa.
     *
     * O motor precisa saber esse valor para
     * simular fisicamente a balança.
     *
     * A interface NÃO deve mostrá-lo.
     */
    hiddenBoxWeight: number;
};